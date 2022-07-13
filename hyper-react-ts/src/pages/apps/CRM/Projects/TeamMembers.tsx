import { Card } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import { FormInput } from 'components';
import { TeamMember } from './types';

type TeamMembersProps = {
    members: Array<TeamMember>;
};

const TeamMembers = ({ members }: TeamMembersProps) => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="header-title mb-0">Team Members</h4>
                    <FormInput name="select" type="select" className="form-select form-select-sm" key="select">
                        <option>Active</option>
                        <option>Offline</option>
                    </FormInput>
                </div>
            </Card.Body>
            <SimpleBar className="card-body py-0" style={{ maxHeight: '308px' }}>
                {(members || []).map((member, index) => {
                    return (
                        <div
                            className={classNames('d-flex', 'align-items-start', index === 0 ? 'mt-0' : 'mt-3')}
                            key={index.toString()}
                        >
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
