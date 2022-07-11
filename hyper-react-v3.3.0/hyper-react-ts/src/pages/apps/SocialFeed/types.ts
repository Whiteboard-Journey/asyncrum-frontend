export type Person = {
    id?: number;
    name?: string;
    avatar?: string;
    status?: string;
};

export type Comment = {
    id: number;
    author: Person;
    content: string;
    isLiked?: boolean;
    postedOn: string;
    replies?: Comment[];
};

export type FeedPost = {
    id: number;
    title?: string;
    author: Person;
    postedOn: string;
    scope?: string;
    content: string;
    totalLikes?: string;
    totalComments?: string;
    totalView?: string;
    isLiked?: boolean;
    comments?: Comment[];
};

export type Topic = {
    id?: number;
    title?: string;
    description?: string;
};
