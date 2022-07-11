// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//components
import CardTitle from './CardTitle';

import MessageList from './MessageList';
import MessageItem from './MessageItem';

// images
import profileImg from '../assets/images/users/avatar-2.jpg';
import avatar1 from '../assets/images/users/avatar-3.jpg';
import avatar2 from '../assets/images/users/avatar-4.jpg';
import avatar3 from '../assets/images/users/avatar-5.jpg';
import avatar6 from '../assets/images/users/avatar-6.jpg';

const Messages = (): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-3"
                    title="Messages"
                    menuItems={[{ label: 'Settings' }, { label: 'Action' }]}
                />

                <MessageList>
                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={profileImg} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-text">I've finished it! See you so...</p>
                        <p className="inbox-item-date">
                            <Link to="#" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </Link>
                        </p>
                    </MessageItem>

                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={avatar1} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Stillnotdavid</p>
                        <p className="inbox-item-text">This theme is awesome!</p>
                        <p className="inbox-item-date">
                            <Link to="#" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </Link>
                        </p>
                    </MessageItem>

                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={avatar2} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Kurafire</p>
                        <p className="inbox-item-text">Nice to meet you</p>
                        <p className="inbox-item-date">
                            <Link to="#" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </Link>
                        </p>
                    </MessageItem>

                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={avatar3} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Shahedk</p>
                        <p className="inbox-item-text">Hey! there I'm available...</p>
                        <p className="inbox-item-date">
                            <Link to="#" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </Link>
                        </p>
                    </MessageItem>

                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={avatar6} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Adhamdannaway</p>
                        <p className="inbox-item-text">This theme is awesome!</p>
                        <p className="inbox-item-date">
                            <Link to="#" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </Link>
                        </p>
                    </MessageItem>
                </MessageList>
            </Card.Body>
        </Card>
    );
};

export default Messages;
