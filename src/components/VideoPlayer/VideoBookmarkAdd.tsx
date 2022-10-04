import { useEffect } from 'react';

import { TldrawApp } from '@krapi0314/tldraw';

import { Box, IconButton, Tooltip } from '@chakra-ui/react';

import { Bookmark as BookmarkIcon } from 'tabler-icons-react';

import { create } from './VideoBookmark';
import type { Video } from './Video';

type PreciseVideoTimes = {
  [id: string]: number;
};

type Props = {
  app: TldrawApp;
  disabled: boolean;
  scale: number;
  video: Video;
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
  setVideo,
  videoTimes,
  setPlaying,
  setEditingBookmark,
  setCurrentTime,
}: Props) {
  function handleCreate() {
    const time = Object.values(videoTimes)[0];
    console.log('create');
    setPlaying(false);
    createVideoBookmark(video, setVideo, '', time, scale, app.document);
    console.log(video);
    setCurrentTime(time);
    setEditingBookmark(true);
  }

  const createVideoBookmark = (
    video: Video,
    setVideo: React.Dispatch<React.SetStateAction<Video>>,
    content: string,
    time: number,
    scale: number,
    drawing: object
  ) => {
    const bookmark = create(video, content, time, scale, drawing);
    setVideo((prevState) => ({
      ...prevState,
      bookmarks: [...prevState.bookmarks, bookmark],
    }));
  };

  /**
   * When the current time changes, stop editing any open bookmarks.
   */
  useEffect(() => {
    setEditingBookmark(false);
  }, [video.el.currentTime]);

  return (
    <Tooltip label="Bookmark this moment">
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
