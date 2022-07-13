import { useState } from 'react';
import { Comment, Person, FeedPost } from './types';
import avatar3 from 'assets/images/users/avatar-1.jpg';

export default function useFeeds() {
    const [user] = useState<Person>({ id: 1, avatar: avatar3 });

    /*
     * toggle like on post
     */
    const toggleLike = (post: FeedPost) => {
        post.isLiked = !post.isLiked;
    };

    /*
     * toggle like on comment
     */
    const toggleLikeOnComment = (comment: Comment) => {
        comment.isLiked = !comment.isLiked;
    };

    return {
        user,
        toggleLike,
        toggleLikeOnComment,
    };
}
