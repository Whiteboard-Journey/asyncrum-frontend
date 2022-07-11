// @flow
import classNames from 'classnames';
import React from 'react';
import { Card } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

// component
import { FormInput } from '../../../../components';

type TeamMembersItems = {
    avatar: string,
    name: string,
    designation: string,
    experience: string,
};

type TeamMembersProps = {
    members: Array<TeamMembersItems>,
};

const TeamMembers = ({ members }: TeamMembersProps): React$Element<React$FragmentType> => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="header-title">Team Members</h4>
                    <FormInput name="select" type="select" className="form-select form-select-sm" key="select">
                        <option>Active</option>
                        <option>Offline</option>
                    </FormInput>
                </div>
            </Card.Body>
            <SimpleBar className="card-body py-0" style={{ maxHeight: '308px' }}>
                {(members || []).map((member, i) => {
                    return (
                        <div className={classNames('d-flex', 'align-items-start', i === 0 ? 'mt-0' : 'mt-3')} key={i}>
                            <img className="me-3 rounded-circle" src={member.avatar} width="40" alt="" />
                            <div className="w-100 overflow-hidden">
                                <h5 className="mt-0 mb-1 fw-semibold">{member.name}</h5>
                                <ul className="list-inline mb-0 font-13">
                                    <li className="list-inline-item">{member.designation}</li>
                                    <li className="list-inline-item text-muted">
                                        <i className="mdi mdi-circle-small"></i>
                                    </li>
                                    <li className="list-inline-item text-muted">{member.experience} Experience</li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </SimpleBar>
        </Card>
    );
};

export default TeamMembers;
