// @flow
import React from 'react';
import { Card, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mb-3">Top Performing</h4>

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
