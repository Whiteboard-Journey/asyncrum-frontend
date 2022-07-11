// @flow
import React from 'react';
import { Card, Table, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Channels = (): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                <Link to="#" className="p-0 float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
                </Link>
                <h4 className="header-title  mt-1 mb-3">Channels</h4>

                <Table responsive className="table table-sm table-centered mb-0 font-14">
                    <thead className="table-light">
                        <tr>
                            <th>Channel</th>
                            <th>Visits</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Direct</td>
                            <td>2,050</td>
                            <td>
                                <ProgressBar now={65} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Organic Search</td>
                            <td>1,405</td>
                            <td>
                                <ProgressBar now={45} style={{ height: '3px' }} variant="info" />
                            </td>
                        </tr>
                        <tr>
                            <td>Refferal</td>
                            <td>750</td>
                            <td>
                                <ProgressBar now={30} style={{ height: '3px' }} variant="warning" />
                            </td>
                        </tr>
                        <tr>
                            <td>Social</td>
                            <td>540</td>
                            <td>
                                <ProgressBar now={25} style={{ height: '3px' }} variant="danger" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Channels;
