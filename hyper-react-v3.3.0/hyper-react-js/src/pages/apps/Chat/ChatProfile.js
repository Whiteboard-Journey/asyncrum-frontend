// @flow
import React from 'react';
import { Card, Dropdown, Button } from 'react-bootstrap';

type ChatProfileProps = {
    selectedUser: {
        id: number,
        name: string,
        avatar: string,
        lastMessage: string,
        totalUnread?: number,
        lastMessageOn: string,
        email: string,
        phone: string,
        location: string,
        languages: string,
        groups: string,
    },
};

// ChatProfile
const ChatProfile = ({ selectedUser }: ChatProfileProps): React$Element<React$FragmentType> => {
    const user = selectedUser || {};
    const groups = user.groups ? user.groups.split(',') : [];

    return (
        <>
            {user && (
                <Card>
                    <Card.Body>
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>View Full</Dropdown.Item>
                                <Dropdown.Item>Edit Contact Info</Dropdown.Item>
                                <Dropdown.Item>Remove</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="mt-3 text-center">
                            <img src={user.avatar} alt="" className="img-thumbnail avatar-lg rounded-circle" />
                            <h4>{user.name}</h4>
                            <Button className="btn-sm mt-1" color="primary">
                                <i className="uil uil-envelope-add me-1"></i>Send Email
                            </Button>
                            <p className="text-muted mt-2 font-14">
                                Last Interacted: <strong>{user.lastMessageOn}</strong>
                            </p>
                        </div>

                        <div className="mt-3">
                            <hr className="" />

                            <p className="mt-4 mb-1">
                                <strong>
                                    <i className="uil uil-at"></i> Email:
                                </strong>
                            </p>
                            <p>{user.email}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-phone"></i> Phone Number:
                                </strong>
                            </p>
                            <p>{user.phone}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-location"></i> Location:
                                </strong>
                            </p>
                            <p>{user.location}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-globe"></i> Languages:
                                </strong>
                            </p>
                            <p>{user.languages}</p>

                            <p className="mt-3 mb-2">
                                <strong>
                                    <i className="uil uil-users-alt"></i> Groups:
                                </strong>
                            </p>

                            <p>
                                {groups.map((group, index) => {
                                    return (
                                        <span key={index} className="badge badge-success-lighten p-1 font-14 me-1">
                                            {group}
                                        </span>
                                    );
                                })}
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </>
    );
};

export default ChatProfile;
