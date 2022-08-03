export type DailyStandup = {
    id: number;
    author: string;
    profileImageUrl: string;
    lastModifiedDate: string;
    recordFileUrl: string;
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
    whiteboardFileUrl: string;
}