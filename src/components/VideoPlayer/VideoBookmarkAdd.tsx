import { useEffect } from 'react';

import { TldrawApp } from '@krapi0314/tldraw';
import { getEmojiDataFromNative } from 'emoji-mart';

import { Box, IconButton, Tooltip } from '@chakra-ui/react';

import { Bookmark as BookmarkIcon } from 'tabler-icons-react';

import { create, VideoBookmarkIcon } from './VideoBookmark';
import type { Video } from './Video';
import { createBookmark as createBookmarkAPI } from 'helpers';

type PreciseVideoTimes = {
  [id: string]: number;
};

type Props = {
  app: TldrawApp;
  disabled: boolean;
  scale: number;
  video: Video;
  currentTime: number;
  setVideo: React.Dispatch<React.SetStateAction<Video>>;
  videoTimes: PreciseVideoTimes;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingBookmark: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
};

export default function VideoBookmark({
  app,
  disabled,
  scale,
  video,
  currentTime,
  setVideo,
  videoTimes,
  setPlaying,
  setEditingBookmark,
  setCurrentTime,
}: Props) {
  function handleCreate() {
    video.el.pause();
    setPlaying(false);
    createVideoBookmark(video, setVideo, '🔖', '', currentTime, scale, app.document);
    setEditingBookmark(true);
  }

  const createVideoBookmark = async (
    video: Video,
    setVideo: React.Dispatch<React.SetStateAction<Video>>,
    icon: string,
    content: string,
    time: number,
    scale: number,
    drawing: object
  ) => {
    const bookmark = create(video, icon, content, time, scale, drawing);
    const drawingString = JSON.stringify(drawing);
    const id = video.id;
    const position = bookmark.position ? bookmark.position : { x: 0, y: 0 };
    let hex = '';
    if (bookmark.icon.codePointAt(0) !== undefined) {
      hex = bookmark.icon.codePointAt(0)!.toString(16);
    }
    console.log(hex);

    const createBookmarkAPIResponse = await createBookmarkAPI({
      recordId: id,
      emoji: hex,
      content,
      time,
      position,
      drawing: drawingString,
      scale,
      author: bookmark.author,
    });
    bookmark.id = createBookmarkAPIResponse.data.id;
    setVideo((prevState) => ({
      ...prevState,
      bookmarks: [...prevState.bookmarks, bookmark],
    }));
    console.log(hex);
    console.log(String.fromCodePoint(parseInt('0x' + hex)));
  };

  return (
    <Tooltip label="Bookmark this moment (active when paused)">
      <Box>
        <IconButton
          onClick={() => handleCreate()}
          icon={<BookmarkIcon />}
          aria-label="Bookmark this moment"
          disabled={disabled}
        />
      </Box>
    </Tooltip>
  );
}
