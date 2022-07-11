// @flow
import React from 'react';
import { Row, Col, Card, Button, ButtonGroup, Dropdown, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';

// images
import avatar1 from '../../../assets/images/users/avatar-6.jpg';
import avatar2 from '../../../assets/images/users/avatar-7.jpg';
import avatar3 from '../../../assets/images/users/avatar-8.jpg';
import projectImg1 from '../../../assets/images/projects/project-1.jpg';
import projectImg2 from '../../../assets/images/projects/project-2.jpg';
import projectImg3 from '../../../assets/images/projects/project-3.jpg';
import projectImg4 from '../../../assets/images/projects/project-4.jpg';

// single project
const SingleProject = (props) => {
    const project = props.project || {};

    return (
        <Card className="d-block">
            {project.image && (
                <>
                    <img className="card-img-top" src={project.image} alt="" />
                    <div className="card-img-overlay">
                        <div
                            className={classNames(
                                'badge',
                                {
                                    'bg-success': project.state === 'Finished',
                                    'bg-secondary': project.state === 'Ongoing',
                                    'bg-warning': project.state === 'Planned',
                                },
                                'p-1'
                            )}>
                            {project.state}
                        </div>
                    </div>
                </>
            )}

            <Card.Body className={project.image ? 'position-relative' : ''}>
                {!project.image && (
                    <Dropdown className="card-widgets" align="end">
                        <Dropdown.Toggle
                            variant="link"
                            tag="a"
                            className="card-drop arrow-none cursor-pointer p-0 shadow-none">
                            <i className="dripicons-dots-3"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <i className="mdi mdi-pencil me-1"></i>Edit
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="mdi mdi-delete me-1"></i>Delete
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="mdi mdi-email-outline me-1"></i>Invite
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="mdi mdi-exit-to-app me-1"></i>Leave
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}

                <h4 className="mt-0">
                    <Link to="/apps/projects/details" className="text-title">
                        {project.title}
                    </Link>
                </h4>

                {!project.image && (
                    <div
                        className={classNames('badge', {
                            'bg-success': project.state === 'Finished',
                            'bg-secondary': project.state === 'Ongoing',
                            'bg-warning': project.state === 'Planned',
                        })}>
                        {project.state}
                    </div>
                )}

                {project.shortDesc && (
                    <p className="text-muted font-13 my-3">
                        {project.shortDesc}...
                        <Link to="#" className="fw-bold text-muted">
                            view more
                        </Link>
                    </p>
                )}

                <p className="mb-1">
                    <span className="pe-2 text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-format-list-bulleted-type text-muted me-1"></i>
                        <b>{project.totalTasks}</b> Tasks
                    </span>
                    <span className="text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-comment-multiple-outline text-muted me-1"></i>
                        <b>{project.totalComments}</b> Comments
                    </span>
                </p>
                <div>
                    <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mat Helme"
                        className="d-inline-block me-1">
                        <img src={avatar3} className="rounded-circle avatar-xs" alt="friend" />
                    </Link>

                    <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Michael Zenaty"
                        className="d-inline-block me-1">
                        <img src={avatar1} className="rounded-circle avatar-xs" alt="friend" />
                    </Link>

                    <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="James Anderson"
                        className="d-inline-block">
                        <img src={avatar2} className="rounded-circle avatar-xs" alt="friend" />
                    </Link>
                    {project.totalMembers - 3 > 0 && (
                        <Link to="#" className="d-inline-block text-muted fw-bold ms-2">
                            +{project.totalMembers - 3} more
                        </Link>
                    )}
                </div>

                {project.image && (
                    <>
                        <p className="mt-3 mb-2 fw-bold">
                            Progress <span className="float-end">{project.progress}%</span>
                        </p>
                        {project.progress < 30 && <ProgressBar now={project.progress} className="progress-sm" />}
                        {project.progress > 30 && project.progress < 100 && (
                            <ProgressBar now={project.progress} className="progress-sm" />
                        )}
                        {project.progress === 100 && <ProgressBar now={project.progress} className="progress-sm" />}
                    </>
                )}
            </Card.Body>

            {!project.image && (
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                        <p className="mb-2 fw-bold">
                            Progress <span className="float-end">{project.progress}%</span>
                        </p>

                        {project.progress < 30 && <ProgressBar now={project.progress} className="progress-sm" />}
                        {project.progress > 30 && project.progress < 100 && (
                            <ProgressBar now={project.progress} className="progress-sm" />
                        )}
                        {project.progress === 100 && <ProgressBar now={project.progress} className="progress-sm" />}
                    </li>
                </ul>
            )}
        </Card>
    );
};

const Projects = (): React$Element<React$FragmentType> => {
    const projects = [
        {
            id: 1,
            title: 'Ubold v3.0 - Redesign',
            state: 'Finished',
            shortDesc: 'With supporting text below as a natural lead-in to additional contenposuere erat a ante',
            totalTasks: 21,
            totalComments: 741,
            totalMembers: 10,
            progress: 100,
        },
        {
            id: 2,
            title: 'Minton v3.0 - Redesign',
            state: 'Ongoing',
            shortDesc:
                'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
            totalTasks: 81,
            totalComments: 103,
            totalMembers: 6,
            progress: 21,
        },
        {
            id: 3,
            title: 'Hyper v2.1 - Angular and Django',
            state: 'Ongoing',
            shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid',
            totalTasks: 12,
            totalComments: 48,
            totalMembers: 2,
            progress: 66,
        },
        {
            id: 4,
            title: 'Hyper v2.1 - React, Webpack',
            state: 'Finished',
            shortDesc: "Some quick example text to build on the card title and make up the bulk of the card's content",
            totalTasks: 50,
            totalComments: 1024,
            totalMembers: 5,
            progress: 100,
        },
        {
            id: 5,
            title: 'Hyper 2.2 - Vue.Js and Laravel',
            state: 'Ongoing',
            image: projectImg1,
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 45,
        },
        {
            id: 6,
            title: 'Hyper 2.3 - Rails, NodeJs, Mean',
            state: 'Planned',
            image: projectImg2,
            totalTasks: 11,
            totalComments: 201,
            totalMembers: 5,
            progress: 100,
        },
        {
            id: 7,
            title: 'Hyper - Landing page and UI Kit',
            state: 'Planned',
            image: projectImg3,
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 45,
        },
        {
            id: 8,
            title: 'Hyper 3.0 - Scoping',
            state: 'Finished',
            image: projectImg4,
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 45,
        },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Projects', path: '/apps/projects/list' },
                    { label: 'Project List', path: '/apps/projects/list', active: true },
                ]}
                title={'Projects'}
            />

            <Row className="mb-2">
                <Col sm={4}>
                    <Button variant="danger" className="rounded-pill mb-3">
                        <i className="mdi mdi-plus"></i> Create Project
                    </Button>
                </Col>
                <Col sm={8}>
                    <div className="text-sm-end">
                        <div className="btn-group mb-3">
                            <Button variant="primary">All</Button>
                        </div>
                        <ButtonGroup className="mb-3 ms-1">
                            <Button variant="light">Ongoing</Button>
                            <Button variant="light">Finished</Button>
                        </ButtonGroup>

                        <ButtonGroup className="mb-3 ms-2 d-none d-sm-inline-block">
                            <Button variant="secondary">
                                <i className="dripicons-view-apps"></i>
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="mb-3 d-none d-sm-inline-block">
                            <Button variant="link" className="text-muted">
                                <i className="dripicons-checklist"></i>
                            </Button>
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>

            <Row>
                {projects.map((project, i) => {
                    return (
                        <Col md={6} xxl={3} key={'proj-' + project.id}>
                            <SingleProject project={project} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default Projects;
