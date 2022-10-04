import { useRef, useEffect, useCallback } from 'react';
import { Tldraw, TldrawApp, ColorStyle } from '@krapi0314/tldraw';

// import { Container } from 'react-bootstrap';
import { Box } from '@chakra-ui/react';

import type { Video } from './Video';
import type { VideoBookmark } from './VideoBookmark';

type Props = {
  playing: boolean;
  onMount: (app: TldrawApp) => void;
  scale: number;
  video: Video;
  videoBookmark: VideoBookmark | undefined;
};

export default function Drawing({ playing, onMount, scale, video, videoBookmark }: Props) {
  const tlDrawRef = useRef<TldrawApp | null>(null);
  const outerRef = useRef(null);

  const setVideoBookmarkDrawing = (video: Video, bookmark: VideoBookmark, drawing: object) => {
    const bookmarkIndex = video.bookmarks.findIndex((innerBookmark) => {
      return innerBookmark.id === bookmark.id;
    });

    video.bookmarks[bookmarkIndex].drawing = drawing;
  };

  function handleMount(app: TldrawApp) {
    tlDrawRef.current = app;
    tlDrawRef.current.setCamera([0, 0], scale, 'layout_mounted');
    tlDrawRef.current.style({ color: ColorStyle.Red });
    onMount(app);
  }

  function handlePersist(app: TldrawApp) {
    if (videoBookmark === undefined || playing === true) {
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

  /**
   * Rescale drawing as parent scales
   */
  useEffect(() => {
    rescaleDrawing();
  }, [scale, rescaleDrawing]);

  /**
   * Load video bookmarks
   */
  useEffect(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    if (videoBookmark?.drawing) {
      tlDrawRef.current.loadDocument(
        JSON.parse(JSON.stringify(videoBookmark.drawing)) // we need to load a copy of the document
      );

      tlDrawRef.current.selectNone();
      rescaleDrawing();
    } else {
      clearDrawing();
    }
  }, [clearDrawing, rescaleDrawing, videoBookmark]);

  /**
   * Clear drawings between time changes if enabled
   */
  useEffect(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    if (playing === true) {
      clearDrawing();
    }
  }, [playing, clearDrawing]);

  return (
    // <Container className="position-absolute top-0 left-0 bottom-0 right-0" ref={outerRef}>
    <Box position="absolute" top="0" left="0" right="0" bottom="0" ref={outerRef}>
      <Tldraw
        // @ts-ignore
        onMount={(app: TldrawApp) => handleMount(app)}
        onPersist={(app: TldrawApp) => handlePersist(app)}
        showUI={false}
        style="{background-color: transparent !important}"
      />
    </Box>
    // </Container>
  );
}
