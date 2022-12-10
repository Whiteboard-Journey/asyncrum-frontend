import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';

import VideoBookmarkTimeline from './VideoBookmarkTimeline';

import type { Video } from './Video';
import type { VideoBookmark } from './VideoBookmark';

type Props = {
  video: Video;
  fullDuration: number;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setActiveBookmark: React.Dispatch<React.SetStateAction<VideoBookmark | null>>;
  pauseVideo: () => void;
  camVideoRef: React.MutableRefObject<HTMLVideoElement | null>;
};

const TimeControl = ({
  video,
  fullDuration,
  currentTime,
  setCurrentTime,
  setActiveBookmark,
  pauseVideo,
  camVideoRef,
}: Props) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [renderedCurrentBookmarks, setRenderedCurrentBookmarks] = useState<JSX.Element[]>([]);
  const [trackDimensions, setTrackDimensions] = useState<DOMRect | null>(null); // tracks the dimensions of the track as it's resized

  const handleSliderChange = (time: number) => {
    setCurrentTime(time);
    video.el.currentTime = time;
    camVideoRef.current!.currentTime = time;
    setActiveBookmark(null);
  };

  const setBookmarkButtons = () => {
    setRenderedCurrentBookmarks(
      trackDimensions === null || fullDuration === 0
        ? []
        : video.bookmarks.map((bookmark) => {
            const percentage = bookmark.time / fullDuration;
            const left = trackDimensions.width * percentage;
            return (
              <Flex
                key={bookmark.id}
                bgColor="gray.800"
                position="absolute"
                width="2rem"
                height="2rem"
                align="center"
                justify="center"
                top="-7px"
                left={`calc(${left}px - 1rem)`}
                rounded="full"
                zIndex="1">
                <VideoBookmarkTimeline
                  video={video}
                  bookmark={bookmark}
                  size="medium"
                  setCurrentTime={setCurrentTime}
                  setActiveBookmark={setActiveBookmark}
                  pauseVideo={pauseVideo}
                />
              </Flex>
            );
          })
    );
  };

  useLayoutEffect(() => {
    function handleResize() {
      if (trackRef.current === null) {
        return;
      }
      setTrackDimensions(trackRef.current.getBoundingClientRect());
      setBookmarkButtons();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (trackRef.current) {
      if (
        trackDimensions === null ||
        trackRef.current.getBoundingClientRect().width < (trackDimensions as DOMRect).width
      )
        setTrackDimensions(trackRef.current.getBoundingClientRect());
    }
    setBookmarkButtons();
  }, [video.bookmarks, fullDuration, trackDimensions]);

  return (
    <Box position="relative">
      {renderedCurrentBookmarks}

      <Slider
        aria-label="Time control"
        focusThumbOnChange={false}
        key="playing"
        max={fullDuration}
        min={0}
        top="1px"
        onChange={(value: number) => handleSliderChange(value)}
        step={1 / video.frameRate}
        value={currentTime}>
        <SliderTrack className="track" ref={trackRef}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default TimeControl;
