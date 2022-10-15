import { TldrawApp } from '@krapi0314/tldraw';

import { Box, IconButton, Tooltip } from '@chakra-ui/react';

import { Bookmark as BookmarkIcon } from 'tabler-icons-react';

import { create, VideoBookmark, VideoBookmarkIcon } from './VideoBookmark';
import type { Video } from './Video';
import { createBookmark as createBookmarkAPI } from 'helpers';

type Props = {
  app: TldrawApp;
  disabled: boolean;
  scale: number;
  video: Video;
  currentTime: number;
  setVideo: React.Dispatch<React.SetStateAction<Video>>;
  setEditingBookmark: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveBookmark: React.Dispatch<React.SetStateAction<VideoBookmark | null>>;
  pauseVideo: () => void;
};

export default function VideoBookmarkAdd({
  app,
  disabled,
  scale,
  video,
  currentTime,
  setVideo,
  setEditingBookmark,
  setActiveBookmark,
  pauseVideo,
}: Props) {
  function handleCreate() {
    pauseVideo();
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
    setActiveBookmark(bookmark);
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
