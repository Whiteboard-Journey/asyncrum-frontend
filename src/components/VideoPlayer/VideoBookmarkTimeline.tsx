import { Box, Tooltip } from '@chakra-ui/react';
import { Bookmark as BookmarkIcon } from 'tabler-icons-react';

import type { Video } from './Video';
import type { VideoBookmark } from './VideoBookmark';

type Props = {
  bookmark: VideoBookmark;
  video: Video;
  size: 'small' | 'medium';
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function VideoBookmarkTimeline({ video, bookmark, size = 'medium', setCurrentTime, setPlaying }: Props) {
  function truncateString(str: string, n: number) {
    if (str.length > n) {
      return `${str.substring(0, n)}...`;
    }
    return str;
  }

  function handleGoto() {
    setPlaying(false);
    setCurrentTime(bookmark.time);
  }

  const renderedIcon = (() => {
    if (bookmark.icon) {
      return bookmark.icon.native;
    }

    return <BookmarkIcon size={size === 'medium' ? 25 : 20} color={size === 'medium' ? '#eee' : '#999'} />;
  })();

  return (
    <Tooltip label={`${video.name}: ${truncateString(bookmark.content, 50)}`}>
      <Box onClick={() => handleGoto()} cursor="pointer">
        {renderedIcon}
      </Box>
    </Tooltip>
  );
}
