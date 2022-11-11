export type DailyStandup = {
  id: number[];
  author: string;
  title: string;
  profileImageUrl: string;
  createdDate: string;
  camRecordFileUrl: string;
  screenRecordFileUrl: string;
  screenRecordId: number;
  seen: boolean;
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

export type Meeting = {
  teamId: number;
  id: number;
  meetingName: string;
  createDate: string;
  lastModifiedDate: string;
  status: boolean;
  meetingFileUrl: string;
  participants: string[];
}

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
