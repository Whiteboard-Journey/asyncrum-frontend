import { TDShape, TDBinding, TDUser, TldrawApp, TDAsset } from '@krapi0314/tldraw';
import { useCallback, useEffect, useState } from 'react';
import { useThrottleCallback } from '@react-hook/throttle';
import * as yorkie from 'yorkie-js-sdk';
import { useRedux } from 'hooks';
import { user } from 'mock-server/demoData';

type options = {
  apiKey?: string;
  presence: object;
  syncLoopDuration: number;
  reconnectStreamDelay: number;
};

type YorkieDocType = {
  shapes: Record<string, TDShape>;
  bindings: Record<string, TDBinding>;
  assets: Record<string, TDAsset>;
};

let client: yorkie.Client<yorkie.Indexable>;
let doc: yorkie.Document<yorkie.Indexable>;

const useMultiplayerState = (
  roomId: string,
  userName: string,
  app?: TldrawApp | null,
  handleMount?: (app: TldrawApp) => void
) => {
  const { appSelector } = useRedux();

  // const [app, setApp] = useState<TldrawApp>();
  const [loading, setLoading] = useState(true);

  // Callbacks --------------

  const onMount = useCallback(
    (app: TldrawApp) => {
      app.loadRoom(roomId, user.fullname ? user.fullname : 'Anony');
      app.setIsLoading(true);
      app.pause();
      if (handleMount) handleMount(app);
    },
    [roomId]
  );

  // Update Yorkie doc when the app's shapes change.
  // Prevent overloading yorkie update api call by throttle
  const onChangePage = useThrottleCallback(
    (
      app: TldrawApp,
      shapes: Record<string, TDShape | undefined>,
      bindings: Record<string, TDBinding | undefined>,
      assets: Record<string, TDAsset | undefined>
    ) => {
      if (!app || client === undefined || doc === undefined) return;

      doc.update((root) => {
        Object.entries(shapes).forEach(([id, shape]) => {
          if (!shape) {
            delete root.shapes[id];
          } else {
            root.shapes[id] = shape;
          }
        });

        Object.entries(bindings).forEach(([id, binding]) => {
          if (!binding) {
            delete root.bindings[id];
          } else {
            root.bindings[id] = binding;
          }
        });

        // Should store app.document.assets which is global asset storage referenced by inner page assets
        // Document key for assets should be asset.id (string), not index
        Object.entries(app.assets).forEach(([id, asset]) => {
          if (!asset) {
            delete root.assets[asset.id];
          } else {
            root.assets[asset.id] = asset;
          }
        });
      });
    },
    60,
    false
  );

  // UndoManager will be implemented in further demo
  const onUndo = useCallback(() => {
    return;
  }, []);

  // RedoManager will be implemented in further demo
  const onRedo = useCallback(() => {
    return;
  }, []);

  // Handle presence updates when the user's pointer / selection changes
  const onChangePresence = useThrottleCallback(
    (app: TldrawApp, user: TDUser) => {
      if (!app || client === undefined || !client.isActive()) return;

      client.updatePresence('user', user);
    },
    60,
    false
  );

  // Document Changes --------

  useEffect(() => {
    if (!app) return;

    // Detach & deactive yorkie client before unload
    async function handleDisconnect() {
      if (client === undefined || doc === undefined) return;

      await client.detach(doc);
      await client.deactivate();
    }

    window.addEventListener('beforeunload', handleDisconnect);

    // Subscribe to changes
    function handleChanges() {
      const root = doc.getRoot();

      // WARNING: hard-coded section --------
      // Parse proxy object to record
      // eslint-disable-next-line
      const shapeRecord: Record<string, TDShape> = JSON.parse(root.shapes.toJSON().replace(/\\\'/g, "'"));
      const bindingRecord: Record<string, TDBinding> = JSON.parse(root.bindings.toJSON());
      const assetRecord: Record<string, TDAsset> = JSON.parse(root.assets.toJSON());

      // Replace page content with changed(propagated) records
      app?.replacePageContent(shapeRecord, bindingRecord, assetRecord);
    }

    let stillAlive = true;

    // Setup the document's storage and subscriptions
    async function setupDocument() {
      try {
        await handleDisconnect();
        // 01. Active client with RPCAddr(envoy) with presence
        //     also add apiKey if provided
        const options: options = {
          apiKey: '',
          presence: {
            user: app?.currentUser,
          },
          syncLoopDuration: 0,
          reconnectStreamDelay: 1000,
        };

        if (`${process.env.REACT_APP_YORKIE_API_KEY}`) {
          options.apiKey = `${process.env.REACT_APP_YORKIE_API_KEY}`;
        }

        client = new yorkie.Client(`${process.env.REACT_APP_YORKIE_URL}`, options);
        await client.activate();

        // 01-1. Subscribe peers-changed event and update tldraw users state
        client.subscribe((event) => {
          if (event.type === 'peers-changed') {
            const peers = event.value[doc.getKey()];
            // Compare with local user list and get leaved user list
            // Then remove leaved users
            const localUsers = Object.values(app?.room?.users ? app.room.users : {});
            const remoteUsers = Object.values(peers)
              .map((presence) => presence.user)
              .filter(Boolean);
            const leavedUsers = localUsers.filter(({ id: id1 }) => !remoteUsers.some(({ id: id2 }) => id2 === id1));

            leavedUsers.forEach((user) => {
              app?.removeUser(user.id);
            });

            // Then update users
            app?.updateUsers(remoteUsers);
          }
        });

        // 02. Attach document into the client with specifiy doc name
        doc = new yorkie.Document<YorkieDocType>(roomId);
        await client.attach(doc);

        // 03. Initialize document if document did not exist
        doc.update((root) => {
          if (!root.shapes) {
            root.shapes = {};
          }
          if (!root.bindings) {
            root.bindings = {};
          }
          if (!root.assets) {
            root.assets = {};
          }
        }, "create shapes/bindings/assets object if they don't exist");

        // 04. Subscribe document event and handle changes
        doc.subscribe((event) => {
          if (event.type === 'remote-change') {
            handleChanges();
          }
        });

        // 05. Sync client
        await client.sync();

        if (stillAlive) {
          // Update the document with initial content
          handleChanges();

          // Zoom to fit the content & finish loading
          if (app) {
            app.zoomToFit();
            if (app.zoom > 1) {
              app.resetZoom();
            }
            app.setIsLoading(false);
          }

          setLoading(false);
        }
      } catch (e) {
        console.error(e);
      }
    }

    setupDocument();

    return () => {
      window.removeEventListener('beforeunload', handleDisconnect);
      stillAlive = false;
    };
  }, [app]);

  return {
    onMount,
    onChangePage,
    onUndo,
    onRedo,
    loading,
    onChangePresence,
  };
};

export default useMultiplayerState;
