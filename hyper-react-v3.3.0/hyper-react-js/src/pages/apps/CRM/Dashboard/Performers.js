// @flow
import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// component
import CardTitle from '../../../../components/CardTitle';

type PerformersProps = {
    topPerformanceData: {
        id: number,
        name: string,
        position: string,
        leads: number,
        deals: number,
        tasks: number,
    }[],
};

const Performers = ({ topPerformanceData }: PerformersProps): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-2"
                    title="Top Performing"
                    menuItems={[{ label: 'Settings' }, { label: 'Action' }]}
                />

                <Table hover responsive striped size="sm" className="table-centered mb-0 table-nowrap">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Leads</th>
                            <th>Deals</th>
                            <th>Tasks</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(topPerformanceData || []).map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <h5 className="font-15 mb-1 fw-normal">{item.name}</h5>
                                        <span className="text-muted font-13">{item.position}</span>
                                    </td>
                                    <td>{item.leads}</td>
                                    <td>{item.deals}</td>
                                    <td>{item.tasks}</td>
                                    <td className="table-action">
                                        <Link to="#" className="action-icon">
                                            {' '}
                                            <i className="mdi mdi-eye"></i>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Performers;
