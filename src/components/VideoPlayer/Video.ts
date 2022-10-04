/* eslint-disable @typescript-eslint/ban-ts-comment */
import { v4 as uuidv4 } from 'uuid';

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

export async function createFromAPIResponse(response: VideoAPIResponse): Promise<Video> {
  // video element

  const { id, title, url, name, profileImageUrl, bookmarks } = response;

  const el = document.createElement('video');
  el.src = response.url;


  return {
    bookmarks,
    codedHeight: 1080,
    codedWidth: 1920,
    displayAspectRatio: "16:9",
    el,
    filePath: url,
    frameRate: 30,
    id,
    name: title,
    seeking: false,
    volume: 0.8,
  };
}
