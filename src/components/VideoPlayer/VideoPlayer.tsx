import { useRef, useEffect, useState, useLayoutEffect, useCallback } from 'react';

import { css } from '@emotion/react';
import { Box, Flex, Heading, IconButton, Text, Tooltip } from '@chakra-ui/react';

import { TldrawApp } from '@krapi0314/tldraw';

import { getRatioDimensions } from './layout';
import Drawing from './Drawing';
import DrawingControls from './DrawingControls';
import VideoBookmarkShow from './VideoBookmarkShow';
import TimeDisplay from './TimeDisplay';
import TimeControl from './TimeControl';
import VideoVolume from './VideoVolume';
import PlaybackSpeed from './PlaybackSpeed';
import VideoBookmarkAdd from './VideoBookmarkAdd';
import { video as sampleVideo } from './testVideo';
import type { Video } from './Video';
import type { VideoBookmark } from './VideoBookmark';

import {
  PlayerPlay as PlayerPlayIcon,
  PlayerPause as PlayerPauseIcon,
  Maximize as MaximizeIcon,
} from 'tabler-icons-react';

export type PreciseVideoTimes = {
  [id: string]: number;
};

type Props = {
  currentVideo: Video;
};

// const VideoPlayer = ({ video: HTMLVideoElement }: Props) => {
const VideoPlayer = ({ currentVideo }: Props) => {
  const [app, setApp] = useState<TldrawApp>();
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [videoDimensions, setVideoDimensions] = useState<[number, number] | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentVolume, setCurrentVolume] = useState<number>(0.8);
  const [fullDuration, setfullDuration] = useState<number>(currentVideo.el.duration);
  const [loading, setLoading] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [editingBookmark, setEditingBookmark] = useState<boolean>(false);
  const [video, setVideo] = useState<Video>(currentVideo);
  const [bookmarks, setBookmarks] = useState<VideoBookmark[]>(currentVideo.bookmarks);
  const [activeBookmark, setActiveBookmark] = useState<VideoBookmark | null>(null);

  const videoTimes = useRef<PreciseVideoTimes>({});
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const fullscreenTargetRef = useRef<HTMLDivElement | null>(null);
  const fullscreenTriggerRef = useRef<HTMLButtonElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (overlayRef.current) {
      const dimensions = getRatioDimensions(video.displayAspectRatio, overlayRef.current);
      setVideoDimensions(dimensions);
    }
  }, []);

  useEffect(() => {
    if (video === undefined || video.el === null || videoContainerRef.current === null) {
      return;
    }

    videoContainerRef.current.innerHTML = '';
    videoContainerRef.current.appendChild(video.el);

    video.el.volume = video.volume;
    video.el.ontimeupdate = () => {
      setCurrentTime(video.el.currentTime);
    };

    video.el.onloadedmetadata = () => {
      setfullDuration(video.el.duration);
      setCurrentVolume(video.el.volume);
    };
    setLoading(false);
  }, []);

  const playVideo = () => {
    if (videoContainerRef.current === null) {
      return;
    }
    video.el.play();
    setPlaying(!playing);
  };

  const pauseVideo = () => {
    if (videoContainerRef.current === null) {
      return;
    }
    video.el.pause();
    setPlaying(!playing);
  };

  const overlayStyle = css`
    width: 800px;
    height: 450px;
  `;

  const videoStyle = css`
    video {
      width: 800px;
      height: 450px;
    }
  `;

  const renderedContent = (() => {
    const renderedDrawingControls = app !== undefined && (
      <Flex
        align="center"
        bottom={0}
        justify="center"
        left={0}
        pointerEvents="none"
        position="absolute"
        top={0}
        zIndex={2}>
        <Box
          background="gray.900"
          borderColor="whiteAlpha.500"
          borderLeft="none"
          borderWidth="1px"
          boxSizing="border-box"
          padding={4}
          pointerEvents="all">
          <DrawingControls app={app} />
        </Box>
      </Flex>
    );

    const renderedDrawing = (
      <Drawing
        onMount={(innerApp) => setApp(innerApp)}
        scale={1}
        playing={playing}
        video={video}
        setVideo={setVideo}
        videoBookmark={activeBookmark ? activeBookmark : null}
      />
    );

    const renderedActiveBookmark = activeBookmark !== undefined && (
      <VideoBookmarkShow
        video={video}
        setVideo={setVideo}
        bookmark={activeBookmark ? activeBookmark : null}
        setActiveBookmark={setActiveBookmark}
        scale={1}
        playing={playing}
        setCurrentTime={setCurrentTime}
        editingBookmark={editingBookmark}
        setEditingBookmark={setEditingBookmark}
      />
    );

    const renderedNavigationControls = (
      <Flex
        align="center"
        bottom={0}
        boxSizing="border-box"
        justify="center"
        left={0}
        position="absolute"
        right={0}
        zIndex={2}>
        <Flex
          align="center"
          background="gray.900"
          borderBottom="none"
          borderColor="whiteAlpha.500"
          borderWidth="1px"
          minWidth="50vw"
          p={4}
          pointerEvents="all">
          <Tooltip label={playing ? 'Pause' : 'Play'}>
            <Box mr="2">
              {!playing && (
                <IconButton
                  onClick={() => {
                    playVideo();
                    setEditingBookmark(false);
                    setActiveBookmark(null);
                  }}
                  icon={<PlayerPlayIcon />}
                  aria-label="Play"
                />
              )}
              {playing && <IconButton onClick={() => pauseVideo()} icon={<PlayerPauseIcon />} aria-label="Pause" />}
            </Box>
          </Tooltip>

          <Box mx="2">
            <TimeDisplay currentTime={currentTime} fullDuration={fullDuration} />
          </Box>

          <Box flexGrow={1} mx="2" minW="25vw">
            <TimeControl
              video={video}
              setPlaying={setPlaying}
              fullDuration={fullDuration}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              setActiveBookmark={setActiveBookmark}
            />
          </Box>

          <Box mx="2">
            <VideoVolume video={video} setCurrentVolume={setCurrentVolume} />
          </Box>

          {app && (
            <Box mx="2">
              <VideoBookmarkAdd
                key={video.id}
                app={app}
                disabled={!!activeBookmark || editingBookmark || playing}
                scale={1}
                video={video}
                setVideo={setVideo}
                videoTimes={videoTimes.current}
                setPlaying={setPlaying}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
                setEditingBookmark={setEditingBookmark}
              />
            </Box>
          )}

          <Tooltip label="Presentation mode">
            <Box ml="2">
              <IconButton
                onClick={() => setFullscreen(!fullscreen)}
                icon={<MaximizeIcon />}
                aria-label="Fullscreen video"
                ref={fullscreenTriggerRef}
              />
            </Box>
          </Tooltip>
        </Flex>
      </Flex>
    );
    return (
      <Flex direction="column" width="100%" height="calc(100vh - 5rem)" ref={fullscreenTargetRef}>
        <Flex flexGrow={1} flexShrink={1} overflow="hidden" position="relative">
          {renderedDrawingControls}
          {renderedNavigationControls}
          <Flex align="center" flexGrow={1} flexShrink={1} justifyContent="center" ref={overlayRef} overflow="hidden">
            <Box position="relative" css={overlayStyle} id="overlay" style={{ touchAction: 'none' }}>
              {renderedDrawing}
              {renderedActiveBookmark}
              <Box css={videoStyle} ref={videoContainerRef} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );
  })();
  return (
    <>
      <Flex>
        <Box width="100vw" bgColor="black">
          {renderedContent}
        </Box>
      </Flex>
    </>
  );
};

export default VideoPlayer;
