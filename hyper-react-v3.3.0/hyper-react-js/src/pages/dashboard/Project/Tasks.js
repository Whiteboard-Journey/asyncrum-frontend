// @flow
import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// component
import CardTitle from '../../../components/CardTitle';

const Tasks = (): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-2"
                    title="Tasks"
                    menuItems={[
                        { label: 'Weekly Report' },
                        { label: 'Monthly Report' },
                        { label: 'Action' },
                        { label: 'Settings' },
                    ]}
                />

                <p>
                    <b>107</b> Tasks completed out of 195
                </p>

                <Table responsive hover className="table-centered table-nowrap mb-0">
                    <tbody>
                        <tr>
                            <td>
                                <h5 className="font-14 my-1">
                                    <Link to="#" className="text-body">
                                        Coffee detail page - Main Page
                                    </Link>
                                </h5>
                                <span className="text-muted font-13">Due in 3 days</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Status</span> <br />
                                <span className="badge badge-warning-lighten">In-progress</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Assigned to</span>
                                <h5 className="font-14 mt-1 fw-normal">Logan R. Cohn</h5>
                            </td>
                            <td>
                                <span className="text-muted font-13">Total time spend</span>
                                <h5 className="font-14 mt-1 fw-normal">3h 20min</h5>
                            </td>
                            <td className="table-action" style={{ width: '90px' }}>
                                <Link to="#" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-pencil"></i>
                                </Link>
                                <Link to="#" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-delete"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 my-1">
                                    <Link to="#" className="text-body">
                                        Drinking bottle graphics
                                    </Link>
                                </h5>
                                <span className="text-muted font-13">Due in 27 days</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Status</span> <br />
                                <span className="badge badge-danger-lighten">Outdated</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Assigned to</span>
                                <h5 className="font-14 mt-1 fw-normal">Jerry F. Powell</h5>
                            </td>
                            <td>
                                <span className="text-muted font-13">Total time spend</span>
                                <h5 className="font-14 mt-1 fw-normal">12h 21min</h5>
                            </td>
                            <td className="table-action" style={{ width: '90px' }}>
                                <Link to="#" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-pencil"></i>
                                </Link>
                                <Link to="#" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-delete"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 my-1">
                                    <Link to="#" className="text-body">
                                        App design and development
                                    </Link>
                                </h5>
                                <span className="text-muted font-13">Due in 7 days</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Status</span> <br />
                                <span className="badge badge-success-lighten">Completed</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Assigned to</span>
                                <h5 className="font-14 mt-1 fw-normal">Scot M. Smith</h5>
                            </td>
                            <td>
                                <span className="text-muted font-13">Total time spend</span>
                                <h5 className="font-14 mt-1 fw-normal">78h 05min</h5>
                            </td>
                            <td className="table-action" style={{ width: '90px' }}>
                                <Link to="#" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-pencil"></i>
                                </Link>
                                <Link to="#" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-delete"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 my-1">
                                    <Link to="#" className="text-body">
                                        Poster illustation design
                                    </Link>
                                </h5>
                                <span className="text-muted font-13">Due in 5 days</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Status</span> <br />
                                <span className="badge badge-warning-lighten">In-progress</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Assigned to</span>
                                <h5 className="font-14 mt-1 fw-normal">John P. Ritter</h5>
                            </td>
                            <td>
                                <span className="text-muted font-13">Total time spend</span>
                                <h5 className="font-14 mt-1 fw-normal">26h 58min</h5>
                            </td>
                            <td className="table-action" style={{ width: '90px' }}>
                                <Link to="#" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-pencil"></i>
                                </Link>
                                <Link to="#" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-delete"></i>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Tasks;
