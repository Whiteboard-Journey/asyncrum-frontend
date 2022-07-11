// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Tab, Nav, Dropdown } from 'react-bootstrap';
import classnames from 'classnames';

// dummy data
import posts from './data';

// images
import avatar3 from '../../../assets/images/users/avatar-1.jpg';

// form post
const FormPost = () => {
    return (
        <form action="#" className="comment-area-box">
            <textarea
                rows="4"
                className="form-control border-0 resize-none"
                placeholder="Write something...."></textarea>
            <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                <div>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="uil uil-scenery"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="uil uil-location"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="uil uil-paperclip"></i>
                    </Link>
                </div>
                <button type="submit" className="btn btn-sm btn-success">
                    <i className="uil uil-message me-1"></i>Post
                </button>
            </div>
        </form>
    );
};

const createMarkup = (text) => {
    return { __html: text };
};

// post comment
const PostComment = ({ comment, isActionAllowed, toggleLikeOnComment }) => {
    return (
        <div className="mt-3">
            <div className="d-flex">
                <img className="me-2 rounded" src={comment.author.avatar} alt="" height="32" />
                <div>
                    <h5 className="m-0">{comment.author.name} </h5>
                    <p className="text-muted mb-0">
                        <small>{comment.postedOn}</small>
                    </p>

                    <p className="my-1" dangerouslySetInnerHTML={createMarkup(comment.content)}></p>

                    {isActionAllowed && (
                        <div>
                            <Link
                                to="#"
                                className="btn btn-sm btn-link text-muted p-0"
                                onClick={() => toggleLikeOnComment(comment)}>
                                <i
                                    className={classnames('uil', 'uil-heart', 'me-1', {
                                        'text-danger': comment.isLiked,
                                    })}></i>{' '}
                                Like
                            </Link>
                            <Link to="#" className="btn btn-sm btn-link text-muted p-0 ps-2">
                                <i className="uil uil-comments-alt me-1"></i> Reply
                            </Link>
                        </div>
                    )}

                    {comment.replies && (
                        <>
                            {comment.replies.map((reply, index) => {
                                return (
                                    <PostComment
                                        key={index}
                                        comment={reply}
                                        isActionAllowed={false}
                                        toggleLikeOnComment={toggleLikeOnComment}
                                    />
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// post
const Post = ({ post, user, toggleLike, toggleLikeOnComment }) => {
    return (
        <Card>
            <Card.Body className="pb-1">
                <div className="d-flex">
                    <img className="me-2 rounded" src={post.author.avatar} alt="" height="32" />
                    <div className="w-100">
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle
                                variant="link"
                                className="card-drop arrow-none cursor-pointer p-0 shadow-none">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>Edit</Dropdown.Item>
                                <Dropdown.Item>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <h5 className="m-0">{post.author.name}</h5>
                        <p className="text-muted">
                            <small>
                                {post.postedOn} <span className="mx-1">⚬</span>
                                <span>{post.scope}</span>
                            </small>
                        </p>
                    </div>
                </div>

                <hr className="m-0" />

                <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>

                <hr className="m-0" />

                <div className="my-1">
                    <Link to="#" className="btn btn-sm btn-link text-muted ps-0" onClick={() => toggleLike(post)}>
                        <i
                            className={classnames('mdi', 'mdi-heart', {
                                'text-danger': post.isLiked,
                            })}></i>{' '}
                        {post.totalLikes} Likes
                    </Link>
                    <Link to="#" className="btn btn-sm btn-link text-muted">
                        <i className="uil uil-comments-alt me-1"></i>
                        {post.totalComments} Comments
                    </Link>
                    <Link to="#" className="btn btn-sm btn-link text-muted">
                        <i className="uil uil-share-alt me-1"></i>
                        Share
                    </Link>
                </div>

                <hr className="m-0" />

                <div className="mt-3">
                    {post.comments.map((comment, index) => {
                        return (
                            <PostComment
                                key={index}
                                comment={comment}
                                isActionAllowed={true}
                                toggleLikeOnComment={toggleLikeOnComment}></PostComment>
                        );
                    })}
                </div>

                <hr />

                {user && (
                    <div className="d-flex mb-2">
                        <img src={user.avatar} height="32" className="align-self-start rounded me-2" alt="" />
                        <div className="w-100">
                            <input
                                type="text"
                                className="form-control border-0 form-control-sm"
                                placeholder="Write a comment"
                            />
                        </div>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

// load more
const LoadMore = () => {
    return (
        <div className="text-center mb-3">
            <Link to="#" className="text-danger">
                <i className="mdi mdi-spin mdi-loading me-1 font-16"></i> Load more
            </Link>
        </div>
    );
};

// feeds
const Feeds = (): React$Element<React$FragmentType> => {
    const [user] = useState({ id: 1, avatar: avatar3 });

    /*
     * toggle like on post
     */
    const toggleLike = (post) => {
        post.isLiked = !post.isLiked;
    };

    /*
     * toggle like on comment
     */
    const toggleLikeOnComment = (comment) => {
        comment.isLiked = !comment.isLiked;
    };

    return (
        <>
            <Tab.Container defaultActiveKey="post">
                <Card>
                    <Card.Body className="p-0">
                        <Nav variant="tabs" className="nav nav-tabs nav-bordered" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="#" eventKey="post">
                                    <i className="mdi mdi-pencil-box-multiple font-18 d-md-none d-block"></i>
                                    <span className="d-none d-md-block">Create Post</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#" eventKey="video">
                                    <i className="mdi mdi-image font-18 d-md-none d-block"></i>
                                    <span className="d-none d-md-block">Photos/Videos</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#" eventKey="story">
                                    <i className="mdi mdi-book-open-variant font-18 d-md-none d-block"></i>
                                    <span className="d-none d-md-block">Story</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="post" className="p-3">
                                <div className="border rounded">
                                    <FormPost />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="video" className="p-3">
                                <div className="border rounded">
                                    <FormPost />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="story" className="p-3">
                                <div className="border rounded">
                                    <FormPost />
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Card.Body>
                </Card>
            </Tab.Container>

            {posts.map((post, index) => {
                return (
                    <Post
                        post={post}
                        key={index}
                        user={user}
                        toggleLike={toggleLike}
                        toggleLikeOnComment={toggleLikeOnComment}
                    />
                );
            })}

            <LoadMore></LoadMore>
        </>
    );
};

export default Feeds;
