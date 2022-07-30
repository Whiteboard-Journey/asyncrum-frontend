import { TDFile, TDDocument, Tldraw } from "@tldraw/tldraw"
import { useMultiplayerState } from "./hooks/useMultiplayerState";

const Whiteboard = () => {
  const roomId = "testroomid";
  const url = "https://wbj-media.s3.ap-northeast-2.amazonaws.com/whiteboards/whiteboard_4_5.tldr"
  const { onMount, ...events } = useMultiplayerState(roomId, url);
  

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