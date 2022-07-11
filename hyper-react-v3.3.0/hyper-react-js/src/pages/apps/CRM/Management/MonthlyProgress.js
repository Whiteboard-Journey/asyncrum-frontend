// @flow
import classNames from 'classnames';
import React from 'react';
import { Badge, Card, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// component
import CardTitle from '../../../../components/CardTitle';

type MonthlyProgressItems = {
    avatar: string,
    name: string,
    emailId: string,
    projectName: string,
    status: string,
};

type MonthlyProgressProps = {
    progressDetails: Array<MonthlyProgressItems>,
};

const MonthlyProgress = ({ progressDetails }: MonthlyProgressProps): React$Element<React$FragmentType> => {
    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between"
                    title="Monthly Progress"
                    menuItems={[
                        { label: 'Today' },
                        { label: 'Yesterday' },
                        { label: 'Last Week' },
                        { label: 'Last Month' },
                    ]}
                />
                <Table responsive className="table-centered table-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(progressDetails || []).map((progress, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={progress.avatar}
                                                    alt=""
                                                    className="rounded-circle"
                                                    width="31"
                                                />
                                            </div>
                                            <div className="flex-grow-1 ms-2">{progress.name}</div>
                                        </div>
                                    </td>
                                    <td>{progress.emailId}</td>
                                    <td>{progress.projectName}</td>
                                    <td>
                                        <Badge
                                            className={classNames({
                                                'bg-primary-lighten text-primary': progress.status === 'In Progress',
                                                'bg-success-lighten text-success': progress.status === 'Completed',
                                                'bg-warning-lighten text-warning': progress.status === 'Pending',
                                            })}>
                                            {progress.status}
                                        </Badge>
                                    </td>
                                    <td>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="font-18 text-info me-2">
                                                <i className="uil uil-pen"></i>
                                            </Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="font-18 text-danger">
                                                <i className="uil uil-trash"></i>
                                            </Link>
                                        </OverlayTrigger>
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

export default MonthlyProgress;
