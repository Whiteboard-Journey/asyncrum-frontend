import { Video } from './Video';
import { APICore } from 'helpers/api/apiCore';

const api = new APICore();
const user = api.getLoggedInUser();

export type VideoBookmarkIcon = {
  native: string;
};

export type VideoBookmarkCoordinates = {
  x: number;
  y: number;
};

export type VideoBookmark = {
  id: string;
  author: string;
  icon: string;
  content: string;
  time: number;
  position: VideoBookmarkCoordinates | null;
  drawing: object | null;
  scale: number;
  video_id: string;
};

export function create(
  video: Video,
  icon: string,
  content: string,
  time: number,
  scale: number,
  drawing: object
): VideoBookmark {
  return {
    content,
    drawing: JSON.parse(JSON.stringify(drawing)),
    id: '',
    icon: icon,
    position: null,
    scale,
    time,
    video_id: video.id,
    author: user.fullname,
  };
}
