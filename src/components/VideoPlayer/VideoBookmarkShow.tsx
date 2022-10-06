import { css } from '@emotion/react';

import { Box, Flex, Button, ButtonGroup, Text, Spacer, IconButton } from '@chakra-ui/react';
import Draggable from 'react-draggable'; // The default

import VideoBookmarkForm from './VideoBookmarkForm';

import type { Video } from './Video';
import type { VideoBookmark, VideoBookmarkCoordinates, VideoBookmarkIcon } from './VideoBookmark';
import { updateBookmark as updateBookmarkAPI, deleteBookmark as deleteBookmarkAPI } from 'helpers';
import React, { useState } from 'react';

type Props = {
  bookmark: VideoBookmark | null;
  setActiveBookmark: React.Dispatch<React.SetStateAction<VideoBookmark | null>>;
  scale: number;
  video: Video;
  setVideo: React.Dispatch<React.SetStateAction<Video>>;
  playing: boolean;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  editingBookmark: boolean;
  setEditingBookmark: React.Dispatch<React.SetStateAction<boolean>>;
};

const dragHandleStyles = css`
  cursor: move;
  height: 2rem;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05) 10px,
    rgba(255, 255, 255, 0.1) 10px,
    rgba(255, 255, 255, 0.1) 20px
  );
`;

export default function VideoBookmarkShow({
  video,
  bookmark,
  setActiveBookmark,
  scale,
  playing,
  setCurrentTime,
  editingBookmark,
  setEditingBookmark,
  setVideo,
}: Props) {
  if (playing === true) {
    return null;
  }

  if (!bookmark) {
    return null;
  }

  const [currentEmoji, setCurrentEmoji] = useState<string>(bookmark.icon);

  function handleDelete() {
    if (bookmark) {
      deleteVideoBookmark(setVideo, bookmark);
    }
    setEditingBookmark(false);
    setActiveBookmark(null);
  }

  const deleteVideoBookmark = (setVideo: React.Dispatch<React.SetStateAction<Video>>, bookmark: VideoBookmark) => {
    setVideo((prevState) => ({
      ...prevState,
      bookmarks: prevState.bookmarks.filter((innerBookmark) => {
        return bookmark.id !== innerBookmark.id;
      }),
    }));
    deleteBookmarkAPI(parseInt(bookmark.id));
  };

  const setVideoBookmarkCoords = (
    video: Video,
    setVideo: React.Dispatch<React.SetStateAction<Video>>,
    bookmark: VideoBookmark,
    coords: VideoBookmarkCoordinates,
    scale: number
  ) => {
    const bookmarkIndex = video.bookmarks.findIndex((innerBookmark) => {
      return innerBookmark.id === bookmark.id;
    });

    setVideo((prevState) => ({
      ...prevState,
      bookmarks: prevState.bookmarks.map((el, idx) =>
        idx === bookmarkIndex ? { ...el, position: { x: coords.x, y: coords.y }, scale: scale } : el
      ),
    }));
  };

  const setVideoBookmarkContent = (
    video: Video,
    setVideo: React.Dispatch<React.SetStateAction<Video>>,
    bookmark: VideoBookmark,
    content: string
  ) => {
    const bookmarkIndex = video.bookmarks.findIndex((innerBookmark) => {
      return innerBookmark.id === bookmark.id;
    });

    setVideo((prevState) => ({
      ...prevState,
      bookmarks: prevState.bookmarks.map((el, idx) => (idx === bookmarkIndex ? { ...el, content: content } : el)),
    }));

    video.bookmarks[bookmarkIndex].content = content;
    bookmark.content = content;
  };

  const setVideoBookmarkIcon = (
    video: Video,
    setVideo: React.Dispatch<React.SetStateAction<Video>>,
    bookmark: VideoBookmark,
    icon: VideoBookmarkIcon
  ) => {
    const bookmarkIndex = video.bookmarks.findIndex((innerBookmark) => {
      return innerBookmark.id === bookmark.id;
    });
    let hex = '';
    if (icon.native.codePointAt(0) !== undefined) {
      hex = icon.native.codePointAt(0)!.toString(16);
    }
    const iconString = String.fromCodePoint(parseInt('0x' + hex));
    setVideo((prevState) => ({
      ...prevState,
      bookmarks: prevState.bookmarks.map((el, idx) => (idx === bookmarkIndex ? { ...el, icon: iconString } : el)),
    }));
    bookmark.icon = iconString;
    setCurrentEmoji(iconString);
  };

  const offset = scale / bookmark.scale;

  const position = bookmark.position ? { x: bookmark.position.x * offset, y: bookmark.position.y * offset } : undefined;

  const renderedContent = (() => {
    if (editingBookmark === true) {
      return (
        <VideoBookmarkForm
          onChangeContent={(content) => setVideoBookmarkContent(video, setVideo, bookmark, content)}
          onChangeIcon={(details) => setVideoBookmarkIcon(video, setVideo, bookmark, details)}
          bookmark={bookmark}
          currentEmoji={currentEmoji}
        />
      );
    }

    return (
      <Text style={{ whiteSpace: 'pre-wrap' }}>
        {bookmark.icon} {bookmark.content}
      </Text>
    );
  })();

  const renderedPositiveAction = editingBookmark ? (
    <Button
      onClick={() => {
        setEditingBookmark(false);
        let hex = '';
        if (bookmark.icon.codePointAt(0) !== undefined) {
          hex = bookmark.icon.codePointAt(0)!.toString(16);
        }
        const emoji = hex;
        const content = bookmark.content;
        const time = bookmark.time;
        const position = bookmark.position ? bookmark.position : { x: 0, y: 0 };
        const drawing = JSON.stringify(bookmark.drawing);
        const scale = bookmark.scale;
        const author = bookmark.author;
        updateBookmarkAPI(parseInt(bookmark.id), { emoji, content, time, position, drawing, scale, author });
      }}>
      Done
    </Button>
  ) : (
    <Button onClick={() => setEditingBookmark(true)}>Edit</Button>
  );

  return (
    <Flex
      position="absolute"
      left={0}
      top={0}
      right={0}
      bottom={0}
      align="flex-end"
      justify="flex-end"
      padding="4"
      pointerEvents="none"
      zIndex={3}>
      <Draggable
        key={bookmark.id}
        onStop={(_event, data) => setVideoBookmarkCoords(video, setVideo, bookmark, { x: data.x, y: data.y }, scale)}
        bounds="parent"
        handle="#dragHandle"
        position={position}>
        <Box pointerEvents="all" background="blackAlpha.900" width="md">
          <Box id="dragHandle" css={dragHandleStyles} />
          {renderedContent && (
            <Box padding="4" borderBottom="1px" borderColor="whiteAlpha.500">
              {renderedContent}
            </Box>
          )}

          <Flex padding="4">
            <Spacer />
            <ButtonGroup size="sm">
              <Button onClick={() => handleDelete()} colorScheme="red">
                Delete
              </Button>
              {renderedPositiveAction}
            </ButtonGroup>
            <Spacer />
          </Flex>
        </Box>
      </Draggable>
    </Flex>
  );
}
