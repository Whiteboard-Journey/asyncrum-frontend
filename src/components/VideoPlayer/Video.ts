import type { VideoBookmark } from './VideoBookmark';

export type Video = {
  bookmarks: VideoBookmark[];
  codedWidth: number;
  codedHeight: number;
  displayAspectRatio: string;
  el: HTMLVideoElement;
  filePath: string;
  frameRate: number;
  id: string;
  name: string;
  seeking: boolean;
  volume: number;
};

type AudioStreamMetadata = {
  codec_type: 'audio';
};

type VideoStreamMetadata = {
  avg_frame_rate: string;
  codec_type: 'video';
  coded_height: number;
  coded_width: number;
  display_aspect_ratio: string;
  index: number;
};

type VideoAPIResponse = {
  id: string;
  title: string;
  url: string;
  name: string;
  profileImageUrl: string;
  bookmarks: VideoBookmark[];
}

export type VideoMetadata = {
  streams: Array<VideoStreamMetadata | AudioStreamMetadata>;
};