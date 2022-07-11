// @flow
import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';

type LeadsProps = {
    recentLeads: {
        id: number,
        name: string,
        email: string,
        profile: string,
        status: string,
    }[],
};

const Leads = ({ recentLeads }: LeadsProps): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mb-4">Recent Leads</h4>

                {(recentLeads || []).map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames('d-flex', 'align-items-start', {
                                'mt-3': index !== recentLeads.length,
                            })}>
                            <img
                                className="me-3 rounded-circle"
                                src={item.profile}
                                width="40"
                                alt="Generic placeholder"
                            />
                            <div className="w-100 overflow-hidden">
                                <span
                                    className={classNames('badge', 'float-end', {
                                        'badge-warning-lighten': item.status === 'Cold',
                                        'badge-danger-lighten': item.status === 'Lost',
                                        'badge-success-lighten': item.status === 'Won',
                                    })}>
                                    {item.status} lead
                                </span>
                                <h5 className="mt-0 mb-1">{item.name}</h5>
                                <span className="font-13">{item.email}</span>
                            </div>
                        </div>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default Leads;
