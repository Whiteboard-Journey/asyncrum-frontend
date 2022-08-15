export type DailyStandup = {
    id: number;
    author: string;
    profileImageUrl: string;
    lastModifiedDate: string;
    camRecordFileUrl: string;
    screenRecordFileUrl: string;
    seen: boolean;
}

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
}