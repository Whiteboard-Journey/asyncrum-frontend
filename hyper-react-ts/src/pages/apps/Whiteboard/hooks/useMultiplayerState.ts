import { TDBinding, TDDocument, TDShape, TldrawApp } from "@tldraw/tldraw";
import { useCallback, useEffect, useState } from "react";
import yorkie from "yorkie-js-sdk";

/** Client **/
// Creating a client
const client = new yorkie.Client('http://wbj-vpc-alb-private-152462774.ap-northeast-2.elb.amazonaws.com:8090');

/** Document **/
// Creating a document
const doc = new yorkie.Document<YorkieType>('testt2');

/** Doc Type */
export type YorkieType = {
  shapes: Record<string, TDShape>
  bindings: Record<string, TDBinding>
}

export function useMultiplayerState(roomId: string, preSignedUrl?: string) {

  const [app, setApp] = useState<TldrawApp>();
  const [loading, setLoading] = useState(true);

  const onMount = useCallback(
    async (app: TldrawApp) => {
      app.loadRoom(roomId);
      app.pause();
      // if(preSignedUrl){
      //   console.log(data)
      //   const testDocument: TDDocument = data.document
      //   // app.loadDocument(data.document);
      // }
      setApp(app);
    },
    [roomId]
  );

  const onChangePage = useCallback(
    (
      app: TldrawApp,
      shapes: Record<string, TDShape | undefined>,
      bindings: Record<string, TDBinding | undefined>
    ) => {
      doc.update((root) => {
        Object.entries(shapes).forEach(([id, shape]) => {
          if (!shape) {
            delete root.shapes[id];
          } else {
            root.shapes[id] = shape;
          }
        })
        Object.entries(bindings).forEach(([id, binding]) => {
          if (!binding) {
            delete root.bindings[id];
          } else {
            root.bindings[id] = binding;
          }
        })
      })
    },
    []
  );

  useEffect(() => {
    if (!app) return;

    function handleChanges() {
      let root = doc.getRoot();

      let shapeRecord: Record<string, TDShape> = JSON.parse(JSON.parse(JSON.stringify(root.shapes)))
      let bindingRecord: Record<string, TDBinding> = JSON.parse(JSON.parse(JSON.stringify(root.bindings)))
      
      console.log(shapeRecord);
      app?.replacePageContent(
        shapeRecord,
        bindingRecord,
        {}
      );
    }

    async function setup() {
      console.log("setup");
      try {
        await client.activate();
        await client.attach(doc);

        doc.update((root) => {
          if (!root.shapes) {
            root.shapes = {};
          }
          if (!root.bindings) {
            root.bindings = {};
          }
        }, 'create points if not exists');

        doc.subscribe((event) => {
          handleChanges();
        })

        await client.sync();
        handleChanges();
        setLoading(false);
      }
      catch (e) {
        console.error(e);
      }
    }

    setup();
    return () => {
    };
  }, [app]);

  return {
    onMount,
    onChangePage,
    loading,
  };
}
