// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

// component
import CardTitle from '../../../../components/CardTitle';

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
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-3"
                    title="Recent Leads"
                    menuItems={[{ label: 'Settings' }, { label: 'Action' }]}
                />

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
