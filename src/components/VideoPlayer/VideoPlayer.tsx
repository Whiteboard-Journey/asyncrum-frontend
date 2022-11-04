import { useRef, useEffect, useState, useCallback } from 'react';

import { css } from '@emotion/react';
import { Box, Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { TldrawApp } from '@krapi0314/tldraw';

import getRatioDimensions from './layout';
import { readRecord as readRecordAPI } from 'helpers';

import Drawing from './Drawing';
import DrawingControls from './DrawingControls';
import VideoBookmarkShow from './VideoBookmarkShow';
import TimeDisplay from './TimeDisplay';
import TimeControl from './TimeControl';
import VideoVolume from './VideoVolume';
import VideoBookmarkAdd from './VideoBookmarkAdd';

import type { Video } from './Video';
import type { VideoBookmark } from './VideoBookmark';

import {
  PlayerPlay as PlayerPlayIcon,
  PlayerPause as PlayerPauseIcon,
  Maximize as MaximizeIcon,
} from 'tabler-icons-react';

const VIDEO_WIDTH = 1280;
const VIDEO_HEIGHT = 720;
const DISPLAY_ASPECT_RATIO = '16:9';
const FRAME_RATE = 30;
const DEFAULT_VOLUME = 0.8;
const LONG_TIME = 24 * 60 * 60;

const overlayStyle = css`
  width: ${VIDEO_WIDTH}px;
  height: ${VIDEO_HEIGHT}px;
`;

const videoStyle = css`
  video {
    width: ${VIDEO_WIDTH}px;
    height: ${VIDEO_HEIGHT}px;
  }
`;

type Props = {
  id: number;
};

// const VideoPlayer = ({ video: HTMLVideoElement }: Props) => {
const VideoPlayer = ({ id }: Props) => {
  const [app, setApp] = useState<TldrawApp>();

  const [videoElemLoading, setVideoElemLoading] = useState<boolean>(true);
  const [videoPlayerLoading, setVideoPlayerLoading] = useState<boolean>(true);
  const [video, setVideo] = useState<Video>({} as Video);
  const [videoDimensions, setVideoDimensions] = useState<[number, number] | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [fullDuration, setFullDuration] = useState<number>(0);
  const [currentVolume, setCurrentVolume] = useState<number>(DEFAULT_VOLUME);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);

  const [bookmarks, setBookmarks] = useState<VideoBookmark[]>(video.bookmarks);
  const [editingBookmark, setEditingBookmark] = useState<boolean>(false);
  const [activeBookmark, setActiveBookmark] = useState<VideoBookmark | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const fullscreenTargetRef = useRef<HTMLDivElement | null>(null);
  const fullscreenTriggerRef = useRef<HTMLButtonElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const setupVideoElement = useCallback(async () => {
    const readRecordAPIResponse = await readRecordAPI(id);
    const videoData = readRecordAPIResponse.data;

    const el = document.createElement('video');
    el.src = videoData.recordUrl;

    setVideo({
      bookmarks: videoData.bookmarks
        ? videoData.bookmarks.map((b: any) => {
            return {
              ...b,
              drawing: JSON.parse(b.drawing),
              icon: b.emoji ? String.fromCodePoint(parseInt('0x' + b.emoji)) : '',
            };
          })
        : [],
      codedWidth: VIDEO_HEIGHT,
      codedHeight: VIDEO_WIDTH,
      displayAspectRatio: DISPLAY_ASPECT_RATIO,
      el: el,
      filePath: videoData.recordUrl,
      frameRate: FRAME_RATE,
      id: videoData.id,
      name: videoData.title,
      seeking: false,
      volume: DEFAULT_VOLUME,
    });
    setBookmarks(videoData.bookmarks);
    setVideoElemLoading(false);
  }, [id]);

  const getDuration = (url: string, setFullDuration: React.Dispatch<React.SetStateAction<number>>) => {
    var _player = new Audio(url);
    _player.addEventListener(
      'durationchange',
      function () {
        if (this.duration != Infinity) {
          var duration = this.duration;
          _player.remove();
          setFullDuration(duration);
        }
      },
      false
    );
    _player.load();
    _player.currentTime = LONG_TIME;
    _player.volume = 0;
    _player.play();
  };

  const setupVideoPlayer = useCallback(() => {
    if (videoContainerRef.current === null || video.el === undefined) {
      return;
    }
    videoContainerRef.current.innerHTML = '';
    videoContainerRef.current.appendChild(video.el);

    video.el.volume = video.volume;
    setCurrentVolume(video.el.volume);
    getDuration(video.el.src, setFullDuration);

    video.el.ontimeupdate = () => {
      setCurrentTime(video.el.currentTime);
    };

    setVideoPlayerLoading(false);
  }, [video]);

  useEffect(() => {
    if (overlayRef.current && video.displayAspectRatio) {
      const dimensions = getRatioDimensions(video.displayAspectRatio, overlayRef.current);
      setVideoDimensions(dimensions);
    }
  }, [video.displayAspectRatio]);

  useEffect(() => {
    if (videoElemLoading) {
      setupVideoElement();
    }
  }, []);

  useEffect(() => {
    if (videoPlayerLoading) {
      setupVideoPlayer();
    }
  }, [videoElemLoading]);

  useEffect(() => {
    if (overlayRef.current) {
      const dimensions = getRatioDimensions(video.displayAspectRatio, overlayRef.current);
      setVideoDimensions(dimensions);
    }
  }, []);

  const playVideo = () => {
    if (videoContainerRef.current === null) {
      return;
    }
    video.el.play();
    setPlaying(true);
  };

  const pauseVideo = () => {
    if (videoContainerRef.current === null) {
      return;
    }
    video.el.pause();
    setPlaying(false);
  };

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
        comments={activeBookmark?.comments!}
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
              fullDuration={fullDuration}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              setActiveBookmark={setActiveBookmark}
              pauseVideo={pauseVideo}
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
                currentTime={currentTime}
                setEditingBookmark={setEditingBookmark}
                setActiveBookmark={setActiveBookmark}
                pauseVideo={pauseVideo}
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
      {videoElemLoading ? (
        <p>loading</p>
      ) : (
        <Flex>
          <Box width="100vw" bgColor="black">
            {renderedContent}
          </Box>
        </Flex>
      )}
    </>
  );
};

export default VideoPlayer;
