import { Video } from "components/VideoPlayer/Video";

export type DailyStandup = {
  id: number[];
  author: string;
  title: string;
  profileImageUrl: string;
  createdDate: string;
  camRecordFileUrl: string;
  screenRecordFileUrl: string;
  seen: boolean;
  video: Video;
};

export type Whiteboard = {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  lastModifiedDate: string;
  scope: string;
  author: string;
  authorProfileImageUrl: string;
  whiteboardFileUrl: string;
};

export type WhiteboardCardProps = {
  whiteboard: Whiteboard;
  onEditWhiteboard: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onDeleteWhiteboard: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export type WhiteboardPaginationProps = {
  whiteboardPageNumber: number;
  numberOfWhiteboards: number;
  onPageNumberClick: (e: React.MouseEvent<HTMLElement>) => void;
};
