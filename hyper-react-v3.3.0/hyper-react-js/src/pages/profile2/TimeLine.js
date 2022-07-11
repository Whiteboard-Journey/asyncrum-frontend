// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// dummy data
import posts from './data';

// images
import avatar3 from '../../assets/images/users/avatar-1.jpg';

const FormPost = () => {
    return (
        <form action="#" className="comment-area-box">
            <textarea
                rows="3"
                className="form-control border-0 resize-none"
                placeholder="Write something...."></textarea>
            <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                <div>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="mdi mdi-account-circle"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="mdi mdi-map-marker"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="mdi mdi-camera"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="mdi mdi-emoticon-outline"></i>
                    </Link>
                </div>
                <button type="submit" className="btn btn-sm btn-dark waves-effect">
                    Post
                </button>
            </div>
        </form>
    );
};

const createMarkup = (text) => {
    return { __html: text };
};

const PostComment = ({ comment }) => {
    return (
        <div className="d-flex">
            <img className="me-2 rounded-circle" src={comment.author.avatar} alt="" height="32" />
            <div>
                <h5 className="mt-0">
                    {comment.author.name} <small className="text-muted">{comment.postedOn}</small>
                </h5>

                <p className="my-1" dangerouslySetInnerHTML={createMarkup(comment.content)}></p>

                {comment.replies ? (
                    <Link to="#" className="text-muted font-13 d-inline-block mt-2 mb-3">
                        <i className="mdi mdi-reply"></i> Reply
                    </Link>
                ) : null}

                {comment.replies && (
                    <>
                        {comment.replies.map((reply, index) => {
                            return <PostComment key={index} comment={reply} />;
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

const Post = ({ post, user }) => {
    return (
        <div className="border border-light rounded p-2 mb-3">
            <div className="d-flex">
                <img className="me-2 rounded-circle" src={post.author.avatar} alt="" height="32" />
                <div>
                    <h5 className="m-0">{post.author.name}</h5>
                    <p className="text-muted">
                        <small>{post.postedOn}</small>
                    </p>
                </div>
            </div>

            <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>

            {post.comments ? (
                <div className="mx-n2 p-2 mt-3 bg-light">
                    {post.comments.map((comment, index) => {
                        return <PostComment key={index} comment={comment}></PostComment>;
                    })}

                    {user && (
                        <div className="d-flex mt-2">
                            <Link to="#" className="pe-2">
                                <img src={user.avatar} height="32" className="rounded-circle" alt="" />
                            </Link>
                            <div className="w-100">
                                <input
                                    type="text"
                                    className="form-control border-0 form-control-sm"
                                    placeholder="Add comment"
                                />
                            </div>
                        </div>
                    )}
                </div>
            ) : null}

            {post.engagement ? (
                <div className="mt-2">
                    {post.comments ? null : (
                        <Link to="#" className="btn btn-sm btn-link text-muted">
                            <i className="mdi mdi-reply"></i> Reply
                        </Link>
                    )}
                    {post.isLiked ? (
                        <Link to="#" className="btn btn-sm btn-link text-danger">
                            <i className={classnames('mdi', 'mdi-heart')}></i> Likes ({post.totalLikes})
                        </Link>
                    ) : (
                        <Link to="#" className="btn btn-sm btn-link text-muted">
                            <i className="mdi mdi-heart-outline"></i> Like
                        </Link>
                    )}
                    <Link to="#" className="btn btn-sm btn-link text-muted">
                        <i className="mdi mdi-share-variant"></i> Share
                    </Link>
                </div>
            ) : null}
        </div>
    );
};

const LoadMore = () => {
    return (
        <div className="text-center mb-3">
            <Link to="#" className="text-danger">
                <i className="mdi mdi-spin mdi-loading me-1 font-16"></i> Load more
            </Link>
        </div>
    );
};

// Timeline
const TimeLine = (): React$Element<React$FragmentType> => {
    const [user] = useState({ id: 1, avatar: avatar3 });

    return (
        <>
            <div className="border rounded mt-2 mb-3">
                <FormPost />
            </div>
            {posts.map((post, index) => {
                return <Post post={post} key={index} user={user} />;
            })}

            <LoadMore></LoadMore>
        </>
    );
};

export default TimeLine;
