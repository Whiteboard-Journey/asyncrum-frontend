// @flow
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import avatar1 from '../../../../assets/images/users/avatar-6.jpg';
import avatar2 from '../../../../assets/images/users/avatar-7.jpg';
import avatar3 from '../../../../assets/images/users/avatar-8.jpg';
import avatar4 from '../../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../../assets/images/users/avatar-3.jpg';

const TeamMembers = (): React$Element<any> => {
    return (
        <>
            <h5>Team Members:</h5>
            <OverlayTrigger placement="top" overlay={<Tooltip>James Anderson</Tooltip>}>
                <Link to="#" className="d-inline-block me-1">
                    <img src={avatar1} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </Link>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip>Mat Helme</Tooltip>}>
                <Link to="#" className="d-inline-block me-1">
                    <img src={avatar2} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </Link>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
                <Link to="#" className="d-inline-block me-1">
                    <img src={avatar3} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </Link>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
                <Link to="#" className="d-inline-block me-1">
                    <img src={avatar4} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </Link>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
                <Link to="#" className="d-inline-block me-1">
                    <img src={avatar5} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </Link>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
                <Link to="#" className="d-inline-block">
                    <img src={avatar6} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </Link>
            </OverlayTrigger>
        </>
    );
};

export default TeamMembers;
