// @flow
import React from 'react';
import { Alert, Badge, Card, OverlayTrigger, Tooltip, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import CardTitle from '../../../../components/CardTitle';

const ProjectSummary = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Card>
                <Card.Body>
                    <CardTitle
                        containerClass="d-flex align-items-center justify-content-between"
                        title="Project Summary"
                        menuItems={[{ label: 'Refresh Report' }, { label: 'Export Report' }]}
                    />
                    <Alert variant="warning" className="mt-2">
                        <i className="uil-folder-heart me-1 h4 align-middle"></i> <b>38</b> Total Admin & Client
                        Projects
                    </Alert>

                    <div className="d-flex align-items-center border border-light rounded p-2 mb-2">
                        <div className="flex-shrink-0 me-2">
                            <i className="mdi mdi-account-group widget-icon rounded-circle"></i>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="fw-semibold my-0">Project Discssion</h5>
                            <p className="mb-0">6 Person</p>
                        </div>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                            <Link to="#" className="text-muted">
                                <i className="mdi mdi-information-outline h4  my-0"></i>
                            </Link>
                        </OverlayTrigger>
                    </div>

                    <div className="d-flex align-items-center border border-light rounded p-2 mb-2">
                        <div className="flex-shrink-0 me-2">
                            <i className="mdi mdi-progress-pencil widget-icon rounded-circle bg-warning-lighten text-warning"></i>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="fw-semibold my-0">In Progress</h5>
                            <p className="mb-0">16 Projects</p>
                        </div>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                            <Link to="#" className="text-muted">
                                <i className="mdi mdi-information-outline h4  my-0"></i>
                            </Link>
                        </OverlayTrigger>
                    </div>

                    <div className="d-flex align-items-center border border-light rounded p-2 mb-2">
                        <div className="flex-shrink-0 me-2">
                            <i className="mdi mdi-checkbox-marked-circle-outline widget-icon rounded-circle bg-danger-lighten text-danger"></i>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="fw-semibold my-0">Completed Projects</h5>
                            <p className="mb-0">24</p>
                        </div>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                            <Link to="#" className="text-muted">
                                <i className="mdi mdi-information-outline h4  my-0"></i>
                            </Link>
                        </OverlayTrigger>
                    </div>

                    <div className="d-flex align-items-center border border-light rounded p-2">
                        <div className="flex-shrink-0 me-2">
                            <i className="mdi mdi-send widget-icon rounded-circle bg-success-lighten text-success"></i>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="fw-semibold my-0">Delivery Projects</h5>
                            <p className="mb-0">20</p>
                        </div>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                            <Link to="#" className="text-muted">
                                <i className="mdi mdi-information-outline h4  my-0"></i>
                            </Link>
                        </OverlayTrigger>
                    </div>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <h4 className="fw-semibold mt-0 mb-3">
                        On Time Completed Rate
                        <Badge bg="primary-lighten" className="text-primary fw ms-sm-1">
                            <i className="mdi mdi-trending-up me-1"></i>59%
                        </Badge>
                    </h4>
                    <h5 className="float-end mt-0">65%</h5>
                    <h5 className="fw-normal mt-0">Completed Projects</h5>
                    <ProgressBar now="65" style={{ height: 3 }} />
                </Card.Body>
            </Card>
        </>
    );
};

export default ProjectSummary;
