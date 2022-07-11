// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

// components
import Timeline from '../../../components/Timeline';
import TimelineItem from '../../../components/TimelineItem';
import CardTitle from '../../../components/CardTitle';

const Activity = (): React$Element<any> => {
    return (
        <Card>
            <Card.Body className="pb-0">
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-2"
                    title="Recent Activity"
                    menuItems={[
                        { label: 'Sales Report' },
                        { label: 'Export Report' },
                        { label: 'Profit' },
                        { label: 'Action' },
                    ]}
                />
            </Card.Body>
            <SimpleBar style={{ maxHeight: '412px', width: '100%' }}>
                <Card.Body className="py-0">
                    <Timeline>
                        <TimelineItem>
                            <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-info fw-bold mb-1 d-block">
                                    You sold an item
                                </Link>
                                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">5 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">
                                    Product on the Bootstrap Market
                                </Link>
                                <small>
                                    Dave Gamache added <span className="fw-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-info fw-bold mb-1 d-block">
                                    Robert Delaney
                                </Link>
                                <small>
                                    Send you message
                                    <span className="fw-bold">"Are you there?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">
                                    Audrey Tobey
                                </Link>
                                <small>
                                    Uploaded a photo <span className="fw-bold">"Error.jpg"</span>{' '}
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>
                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">
                                    Product on the Bootstrap Market
                                </Link>
                                <small>
                                    Dave Gamache added <span className="fw-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-info fw-bold mb-1 d-block">
                                    Robert Delaney
                                </Link>
                                <small>
                                    Send you message
                                    <span className="fw-bold">"Are you there?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">
                                    Audrey Tobey
                                </Link>
                                <small>
                                    Uploaded a photo <span className="fw-bold">"Error.jpg"</span>{' '}
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </Card.Body>
            </SimpleBar>
        </Card>
    );
};

export default Activity;
