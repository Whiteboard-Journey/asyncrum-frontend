// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../../../components/PageTitle';
import CardTitle from '../../../../components/CardTitle';

import TeamMembers from './TeamMembers';
import Comments from './Comments';
import ProgressChart from './ProgressChart';
import Files from './Files';

const ProjectDetail = (): React$Element<React$FragmentType> => {
    const project = {
        title: 'App design and development',
        shortDesc:
            'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
        state: 'Ongoing',
        totalTasks: 81,
        totalComments: 103,
        totalMembers: 6,
        startDate: '17 March 2018',
        startTime: '1:00 PM',
        endDate: '22 December 2018',
        endTime: '1:00 PM',
        totalBudget: '$15,800',
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Projects', path: '/apps/projects' },
                    {
                        label: 'Project Details',
                        path: '/apps/projects/detail',
                        active: true,
                    },
                ]}
                title={'Project Details'}
            />

            <Row>
                <Col xxl={8} lg={6}>
                    <Card className="d-block">
                        <Card.Body>
                            <CardTitle
                                containerClass="d-flex justify-content-between align-items-center mb-2"
                                icon="dripicons-dots-3"
                                title={<h3>{project.title}</h3>}
                                menuItems={[
                                    { label: 'Edit', icon: 'mdi mdi-pencil' },
                                    { label: 'Delete', icon: 'mdi mdi-delete' },
                                    { label: 'Invite', icon: 'mdi mdi-email-outline' },
                                    { label: 'Leave', icon: 'mdi mdi-exit-to-app' },
                                ]}
                            />
                            <div
                                className={classNames(
                                    'badge',
                                    {
                                        'bg-success': project.state === 'Finished',
                                        'bg-secondary': project.state === 'Ongoing',
                                        'bg-warning': project.state === 'Planned',
                                    },
                                    'text-light',
                                    'mb-3'
                                )}>
                                {project.state}
                            </div>

                            <h5>Project Overview:</h5>

                            <p className="text-muted mb-2">
                                With supporting text below as a natural lead-in to additional contenposuere erat a ante.
                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique?
                                Tempore, quos delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo
                                rerum? Lorem ipsum dolor sit amet.
                            </p>

                            <p className="text-muted mb-4">
                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique?
                                Tempore, quos delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo
                                rerum? Lorem ipsum dolor sit amet. With supporting text below as a natural lead-in to
                                additional contenposuere erat a ante.
                            </p>

                            <Row>
                                <Col md={4}>
                                    <div className="mb-4">
                                        <h5>Start Date</h5>
                                        <p>
                                            {project.startDate}{' '}
                                            <small className="text-muted">{project.startTime}</small>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="mb-4">
                                        <h5>End Date</h5>
                                        <p>
                                            {project.endDate} <small className="text-muted">{project.endTime}</small>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="mb-4">
                                        <h5>Budget</h5>
                                        <p>{project.totalBudget}</p>
                                    </div>
                                </Col>
                            </Row>

                            <TeamMembers />
                        </Card.Body>
                    </Card>

                    <Comments />
                </Col>

                <Col xl={4} lg={6}>
                    <ProgressChart />
                    <Files />
                </Col>
            </Row>
        </>
    );
};

export default ProjectDetail;
