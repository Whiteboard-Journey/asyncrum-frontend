import { TDFile, TDShape, TDBinding, Tldraw, TldrawApp } from "@tldraw/tldraw"
import { useCallback, useEffect, useState } from "react";
import yorkie from "yorkie-js-sdk";

export type YorkieType = {
  shapes: Record<string, TDShape>
  bindings: Record<string, TDBinding>
};

const roomId = "testroomid";
const params = new URLSearchParams(window.location.search);
const title = params.get('title');
const url = params.get('url');

const client = new yorkie.Client('http://wbj-vpc-alb-private-152462774.ap-northeast-2.elb.amazonaws.com:8090');
const doc = new yorkie.Document<YorkieType>(title ? title : '');

const Whiteboard = () => {

  function useMultiplayerState(roomId: string, url?: string) {
    const [app, setApp] = useState<TldrawApp>();
    const [loading, setLoading] = useState(true);
  
    const onMount = useCallback(
      async (app: TldrawApp) => {
        app.loadRoom(roomId);
        app.pause();
        if (url) {
          fetch(url)
            .then((res) => res.blob())
            .then(async (data) => {
              let json: string = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  if (reader.readyState === FileReader.DONE) {
                    resolve(reader.result as string);
                  }
                }
                reader.readAsText(data, 'utf8');
              });
              json = json.slice(json.indexOf('{'), json.lastIndexOf('}')+1);
              const file: TDFile = JSON.parse(json);
              app.loadDocument(file.document);
            });
        }
        setApp(app);
      },
      [roomId, url]
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
        try {
          await client.activate();
          try {
            await client.attach(doc);
          } catch(e) {

          }
  
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
    }, [app]);
  
    return {
      onMount,
      onChangePage,
      loading,
    };
  }
  
  const { onMount, ...events } = useMultiplayerState(roomId, url ? url : '');

  return (
  <div>
    <Tldraw 
      onMount={onMount}
      // document={document}
      {...events}
    />
  </div>);
}

export { Whiteboard };