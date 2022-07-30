import { Tldraw } from "@tldraw/tldraw"
import { useMultiplayerState } from "./hooks/useMultiplayerState";
const Whiteboard = () => {
  const roomId = "testroomid";
  const { onMount, ...events } = useMultiplayerState(roomId);
    return (
    <div>
      <Tldraw 
        onMount={onMount}
        {...events}
      />
    </div>);
}

export { Whiteboard };