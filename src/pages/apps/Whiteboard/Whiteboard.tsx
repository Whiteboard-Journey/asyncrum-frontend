import { TDFile, TDShape, TDBinding, TDUser, Tldraw, TldrawApp, TDAsset, useFileSystem } from '@krapi0314/tldraw';
import { Utils } from '@krapi0314/tldraw-core';
import { useThrottleCallback } from '@react-hook/throttle';
import { useCallback, useEffect, useState } from 'react';
import * as yorkie from 'yorkie-js-sdk';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = params.get('url');
const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);

// 0. Yorkie Client declaration
let client: yorkie.Client<yorkie.Indexable>;

// 0. Yorkie Document declaration
let doc: yorkie.Document<yorkie.Indexable>;

// 0. Yorkie type for typescript
type YorkieDocType = {
  shapes: Record<string, TDShape>;
  bindings: Record<string, TDBinding>;
  assets: Record<string, TDAsset>;
};

// const client = new yorkie.Client('https://api.asyncrum.com:8090');
// const doc = new yorkie.Document<YorkieType>(id ? id : 'temp');

const Whiteboard = () => {
  function useMultiplayerState(roomId: string, url?: string) {
    const [app, setApp] = useState<TldrawApp>();
    const [loading, setLoading] = useState(true);

    // Callbacks --------------

    const onMount = useCallback(
      async (app: TldrawApp) => {
        console.log(user);
        app.loadRoom(roomId, user.fullname ? user.fullname : 'Anony');
        app.setIsLoading(true);
        app.pause();
        // if (url) {
        //   fetch(url)
        //     .then((res) => res.blob())
        //     .then(async (data) => {
        //       let json: string = await new Promise((resolve) => {
        //         const reader = new FileReader();
        //         reader.onloadend = () => {
        //           if (reader.readyState === FileReader.DONE) {
        //             resolve(reader.result as string);
        //           }
        //         }
        //         reader.readAsText(data, 'utf8');
        //       });
        //       json = json.slice(json.indexOf('{'), json.lastIndexOf('}') + 1);
        //       const file: TDFile = JSON.parse(json);
        //       app.loadDocument(file.document);
        //     });
        // }
        setApp(app);
      },
      [roomId, url]
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
    const onUndo = useCallback(() => {}, []);

    // RedoManager will be implemented in further demo
    const onRedo = useCallback(() => {}, []);

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
      function handleDisconnect() {
        if (client === undefined || doc === undefined) return;

        client.detach(doc);
        client.deactivate();
      }

      window.addEventListener('beforeunload', handleDisconnect);

      // Subscribe to changes
      function handleChanges() {
        const root = doc.getRoot();

        // WARNING: hard-coded section --------
        // Parse proxy object to record
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
          // 01. Active client with RPCAddr(envoy) with presence
          const options = {
            presence: {
              user: app?.currentUser,
            },
            syncLoopDuration: 0,
            reconnectStreamDelay: 1000,
          };
          client = new yorkie.Client(`https://api.asyncrum.com:8090`, options);
          await client.activate();

          // 01-1. Subscribe peers-changed event and update tldraw users state
          client.subscribe((event) => {
            if (event.type === 'peers-changed') {
              const peers = event.value[doc.getKey()];

              // Compare with local user list and get leaved user list
              // Then remove leaved users
              const localUsers = Object.values(app!.room!.users);
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

          // 03. Initialize document if document did not exists
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
          }, 'create shapes/bindings/assets object if not exists');

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
  }

  function useMultiplayerAssets() {
    const onAssetCreate = useCallback(
      // Send the asset to our upload endpoint, which in turn will send it to AWS and
      // Respond with the URL of the uploaded file.
      async (app: TldrawApp, file: File, id: string): Promise<string | false> => {
        const fileName = encodeURIComponent((id ?? Utils.uniqueId()) + '-' + file.name);
        const fileType = encodeURIComponent(file.type);

        const res = await fetch(
          `https://toygu5z9eb.execute-api.ap-northeast-2.amazonaws.com/default/getPresignedURL?fileName=${fileName}&fileType=${fileType}`
        );
        const { uploadURL, fileUrl } = await res.json();

        const upload = await fetch(uploadURL, {
          method: 'PUT',
          body: file,
        });

        if (!upload.ok) return false;

        return fileUrl;
      },
      []
    );

    // onAssetDelete will be implemented in further demo
    const onAssetDelete = useCallback(async (app: TldrawApp, id: string): Promise<boolean> => {
      // noop
      return true;
    }, []);

    const onAssetUpload = useCallback(
      // Send the asset to our upload endpoint, which in turn will send it to AWS and
      // Respond with the URL of the uploaded file.

      async (app: TldrawApp, file: File, id: string): Promise<string | false> => {
        const fileName = encodeURIComponent((id ?? Utils.uniqueId()) + '-' + file.name);
        const fileType = encodeURIComponent(file.type);

        const res = await fetch(
          `https://toygu5z9eb.execute-api.ap-northeast-2.amazonaws.com/default/getPresignedURL?fileName=${fileName}&fileType=${fileType}`
        );
        const { uploadURL, fileUrl } = await res.json();

        const upload = await fetch(uploadURL, {
          method: 'PUT',
          body: file,
        });

        if (!upload.ok) return false;

        return fileUrl;
      },
      []
    );

    return {
      onAssetCreate,
      onAssetDelete,
      onAssetUpload,
    };
  }

  const fileSystemEvents = useFileSystem();
  const { ...events } = useMultiplayerState(id ? id : 'temp', url ? url : '');
  const { ...assetEvents } = useMultiplayerAssets();

  return (
    <div>
      <Tldraw autofocus disableAssets={false} showPages={false} {...assetEvents} {...fileSystemEvents} {...events} />
    </div>
  );
};

export { Whiteboard };
