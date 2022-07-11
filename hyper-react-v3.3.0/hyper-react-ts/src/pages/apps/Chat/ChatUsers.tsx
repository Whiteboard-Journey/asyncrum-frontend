import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classnames from 'classnames';
import SimpleBar from 'simplebar-react';
import { ChatUser } from './types';
import { useChatUsers } from './hooks';

type ChatUsersProps = {
    onUserSelect: (value: ChatUser) => void;
};

const ChatUsers = ({ onUserSelect }: ChatUsersProps) => {
    const groupFilters = ['All', 'Favourties', 'Friends'];
    const { user, selectedUser, selectedGroup, filterUsers, search, activateUser } = useChatUsers(onUserSelect);

    return (
        <Card>
            <Card.Body className="p-0">
                <ul className="nav nav-tabs nav-bordered">
                    {groupFilters.map((group, index) => {
                        return (
                            <li key={index} className="nav-item" onClick={() => filterUsers(group)}>
                                <Link
                                    to="#"
                                    className={classnames('nav-link', 'py-2', {
                                        active: selectedGroup === group,
                                    })}
                                >
                                    {group}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="tab-content">
                    <div className="tab-pane show active">
                        <div className="app-search p-3">
                            <div className="form-group position-relative">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="People, groups & messages..."
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => search(e.target.value)}
                                />
                                <span className="mdi mdi-magnify search-icon"></span>
                            </div>
                        </div>

                        <SimpleBar className="px-3" style={{ maxHeight: '550px', width: '100%' }}>
                            {user.map((user, index) => {
                                return (
                                    <Link
                                        to="#"
                                        key={index}
                                        className="text-body"
                                        onClick={(e) => {
                                            activateUser(user);
                                        }}
                                    >
                                        <div
                                            className={classnames('d-flex', 'align-items-start', 'mt-1', 'p-2', {
                                                'bg-light': user.id === selectedUser.id,
                                            })}
                                        >
                                            <img src={user.avatar} className="me-2 rounded-circle" height="48" alt="" />

                                            <div className="w-100 overflow-hidden">
                                                <h5 className="mt-0 mb-0 font-14">
                                                    <span className="float-end text-muted font-12">
                                                        {user.lastMessageOn}
                                                    </span>
                                                    {user.name}
                                                </h5>
                                                <p className="mt-1 mb-0 text-muted font-14">
                                                    <span className="w-25 float-end text-end">
                                                        {user.totalUnread && (
                                                            <span className="badge badge-danger-lighten">
                                                                {user.totalUnread}
                                                            </span>
                                                        )}
                                                    </span>
                                                    <span className="w-75">{user.lastMessage}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </SimpleBar>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ChatUsers;
