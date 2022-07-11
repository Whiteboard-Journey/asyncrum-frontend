// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// component
import CardTitle from '../../../components/CardTitle';

// images
import avatar from '../../../assets/images/users/avatar-1.jpg';

const UserProfile = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Card>
                <Card.Body>
                    <CardTitle
                        containerClass="d-flex align-items-center justify-content-between"
                        title={
                            <>
                                <img className="d-flex align-self-start rounded me-2" src={avatar} alt="" height="48" />

                                <div className="w-100 overflow-hidden">
                                    <h5 className="mt-1 mb-0">Dominic Keller</h5>
                                    <p className="mb-1 mt-1 text-muted">California, USA</p>
                                </div>
                            </>
                        }
                        icon="mdi mdi-dots-horizontal"
                        menuItems={[{ label: 'Edit Profile' }, { label: 'Settings' }]}
                    />

                    <div className="list-group list-group-flush mt-2">
                        <Link to="#" className="list-group-item list-group-item-action text-primary border-0">
                            <i className="uil uil-images me-1"></i> News Feed
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-comment-alt-message me-1"></i> Messages
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-calendar-alt me-1"></i> Events
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-users-alt me-1"></i> Groups
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-copy me-1"></i> Pages
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default UserProfile;
