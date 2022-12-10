import { useRef, useEffect, useCallback, ReactText, useState } from 'react';
import { Tldraw, TldrawApp, ColorStyle, useFileSystem } from '@krapi0314/tldraw';

import { Box } from '@chakra-ui/react';

import type { Video } from './Video';
import type { VideoBookmark } from './VideoBookmark';
import useMultiplayerState from 'pages/apps/Whiteboard/useMultiplayerState';
import useMultiplayerAssets from 'pages/apps/Whiteboard/useMultiplayerAssets';

type Props = {
  app: TldrawApp | undefined;
  playing: boolean;
  setApp: React.Dispatch<React.SetStateAction<TldrawApp | undefined>>;
  scale: number;
  video: Video;
  setVideo: React.Dispatch<React.SetStateAction<Video>>;
  videoBookmark: VideoBookmark | null;
};

const Drawing = ({ playing, setApp, scale, video, setVideo, videoBookmark }: Props) => {
  const tlDrawRef = useRef<TldrawApp | null>(null);
  const outerRef = useRef(null);
  const fileSystemEvents = useFileSystem();
  const { ...events } = useMultiplayerState(video.id + 'b' + videoBookmark?.id, '', tlDrawRef.current, handleMount);
  const { ...assetEvents } = useMultiplayerAssets();
  const [reset, isReset] = useState(0);

  const setVideoBookmarkDrawing = (video: Video, bookmark: VideoBookmark, drawing: object) => {
    const bookmarkIndex = video.bookmarks.findIndex((innerBookmark) => {
      return innerBookmark.id === bookmark.id;
    });
    setVideo((prevState) => ({
      ...prevState,
      bookmarks: prevState.bookmarks.map((el, idx) => (idx === bookmarkIndex ? { ...el, drawing: drawing } : el)),
    }));
    if (videoBookmark) {
      videoBookmark.drawing = drawing;
    }
  };

  function handleMount(app: TldrawApp) {
    tlDrawRef.current = app;
    tlDrawRef.current.setCamera([0, 0], scale, 'layout_mounted');
    tlDrawRef.current.style({ color: ColorStyle.Red });
    setApp(app);
  }

  function handlePersist(app: TldrawApp) {
    if (videoBookmark === null || playing === true) {
      return;
    }

    setVideoBookmarkDrawing(video, videoBookmark, app.document);
  }

  const clearDrawing = useCallback(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    const tool = tlDrawRef.current.useStore.getState().appState.activeTool;
    tlDrawRef.current.deleteAll();
    tlDrawRef.current.selectTool(tool);
    tlDrawRef.current.toggleToolLock();
  }, []);

  const rescaleDrawing = useCallback(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    tlDrawRef.current.setCamera([0, 0], scale, 'layout_resized');
  }, [scale]);

  useEffect(() => {
    rescaleDrawing();
  }, [scale, rescaleDrawing]);

  useEffect(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    isReset((reset) => reset + 1);

    if (videoBookmark?.drawing && videoBookmark.drawing) {
      tlDrawRef.current.loadDocument(JSON.parse(JSON.stringify(videoBookmark.drawing)));
      tlDrawRef.current.selectNone();
      rescaleDrawing();
    } else {
      clearDrawing();
    }
  }, [clearDrawing, rescaleDrawing, videoBookmark]);

  useEffect(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    if (playing === true) {
      clearDrawing();
    }
  }, [playing, clearDrawing]);

  return (
    <Box position="absolute" top="0" left="0" right="0" bottom="0" ref={outerRef}>
      <Tldraw
        // @ts-ignore
        // onMount={(app: TldrawApp) => handleMount(app)}
        // @ts-ignore
        onPersist={(app: TldrawApp) => handlePersist(app)}
        showUI={false}
        style="{background-color: transparent !important}"
        disableAssets={false}
        showPages={false}
        {...assetEvents}
        {...fileSystemEvents}
        {...events}
        key={reset}
      />
    </Box>
  );
};

export default Drawing;
