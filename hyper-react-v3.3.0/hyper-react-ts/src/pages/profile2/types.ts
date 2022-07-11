import { FeedPost } from '../apps/SocialFeed/types';

export type Project = {
    id: number;
    clientProfile: string;
    client: string;
    name: string;
    startDate: string;
    dueDate: string;
    status: string;
};

export type TimelinePost = FeedPost & {
    engagement: boolean;
};
