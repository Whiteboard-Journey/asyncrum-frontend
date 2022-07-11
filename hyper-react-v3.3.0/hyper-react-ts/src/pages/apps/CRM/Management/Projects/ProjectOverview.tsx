import { Link } from 'react-router-dom';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import { CardTitle } from 'components';
import { Project } from '../types';
import useProjectOverview from './useProjectOverview';

const ProjectOverview = ({ project }: { project: Project }) => {
    const displayCount = 2;
    const { modifiedTeamMembers } = useProjectOverview(project, displayCount);

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex justify-content-between mb-3"
                    title={
                        <>
                            <div className="flex-shrink-0">
                                <div className="avatar-sm">
                                    <span
                                        className={classNames(
                                            'avatar-title',
                                            'bg-' + project.variant + '-lighten',
                                            'text-' + project.variant,
                                            'rounded'
                                        )}
                                    >
                                        <i className={classNames(project.icon, 'font-24')} />
                                    </span>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <Link to="#" className="font-16 fw-bold text-secondary">
                                    {project.title}{' '}
                                    <i className="mdi mdi-checkbox-marked-circle-outline text-success"></i>
                                </Link>
                                <p className="text-muted mb-0">{project.subTitle}</p>
                            </div>
                        </>
                    }
                    menuItems={[
                        { label: 'Edit', icon: 'uil uil-pen' },
                        { label: 'Remove', icon: 'uil uil-trash', variant: 'text-danger' },
                    ]}
                />
                <Badge bg="light" pill className="badge-lg text-secondary me-1">
                    Work in Progress
                </Badge>
                <span className="font-12 fw-semibold text-muted">
                    <i className="mdi mdi-clock-time-four me-1"></i>
                    {project.hours} Hours
                </span>

                <Row className="mt-2">
                    <Col xs={6}>
                        <p className="text-muted fw-semibold mb-1">Tasks</p>
                        <h3 className="my-0 text-muted fw-normal">{project.task}</h3>
                    </Col>
                    <Col xs={6} className="text-end">
                        <p className="text-muted fw-semibold mb-1">Assign to</p>
                        <div className="multi-user">
                            {(modifiedTeamMembers || []).map((assign, index) => {
                                return (
                                    <Link to="#" className="d-inline-block" key={index.toString()}>
                                        <img src={assign.avatar} alt="" className="rounded-circle avatar-xs" />
                                    </Link>
                                );
                            })}
                            {project.assignTo.length > modifiedTeamMembers.length && (
                                <Link to="#" className="d-inline-block ms-n2">
                                    <div className="avatar-xs">
                                        <span className="avatar-title bg-primary rounded-circle">
                                            {project.assignTo.length - displayCount}+
                                        </span>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ProjectOverview;
