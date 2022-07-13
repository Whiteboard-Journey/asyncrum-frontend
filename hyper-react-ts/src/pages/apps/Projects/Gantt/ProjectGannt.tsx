import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import { PageTitle } from 'components';
import { GanttProjectItem } from '../types';
import { projects } from './data';
import { useProjectGannt } from '../hooks';

type ProjectProps = {
    project: GanttProjectItem;
    onSelectProject: (p: GanttProjectItem) => void;
    selectedProject: GanttProjectItem;
};

const Project = ({ project, onSelectProject, selectedProject }: ProjectProps) => {
    return (
        <Link to="#" className="text-body" onClick={(e) => onSelectProject(project)}>
            <div
                className={classNames('d-flex', 'p-2', {
                    'bg-light': selectedProject && selectedProject.id === project.id,
                })}
            >
                <div className="avatar-sm">
                    {project.status === 'On-Track' && (
                        <span className="avatar-title bg-success-lighten rounded-circle text-success">
                            <i className={classNames(project.icon, 'font-24')}></i>
                        </span>
                    )}

                    {project.status === 'Locked' && (
                        <span className="avatar-title bg-warning-lighten rounded-circle text-warning">
                            <i className={classNames(project.icon, 'font-24')}></i>
                        </span>
                    )}

                    {project.status === 'Delayed' && (
                        <span className="avatar-title bg-danger-lighten rounded-circle text-danger">
                            <i className={classNames(project.icon, 'font-24')}></i>
                        </span>
                    )}
                </div>
                <div className="ms-2">
                    <h5 className="mt-0 mb-0">
                        {project.name}
                        <span
                            className={classNames('badge', 'ms-1', {
                                'badge-success-lighten': project.status === 'On-Track',
                                'badge-warning-lighten': project.status === 'Locked',
                                'badge-danger-lighten': project.status === 'Delayed',
                            })}
                        >
                            {project.status}
                        </span>
                    </h5>
                    <p className="mt-1 mb-0 text-muted">ID: {project.id}</p>
                </div>
            </div>
        </Link>
    );
};

const ProjectGannt = () => {
    const { selectedProject, mode, modes, onSelectProject, changeMode } = useProjectGannt();

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Projects', path: '/apps/projects/gantt' },
                    { label: 'Gantt', path: '/apps/projects/gantt', active: true },
                ]}
                title={'Gantt'}
            />

            <Card>
                <Card.Body>
                    <Row>
                        <Col xxl={3} lg={4}>
                            <div className="pe-xl-3">
                                <h5 className="mt-0 mb-3">Projects</h5>
                                <div className="app-search">
                                    <form>
                                        <div className="mb-2 position-relative">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="search by name..."
                                            />
                                            <span className="mdi mdi-magnify search-icon"></span>
                                        </div>
                                    </form>
                                </div>

                                <Row>
                                    <Col>
                                        <SimpleBar style={{ maxHeight: '535px', width: '100%' }}>
                                            {projects.map((project, index) => {
                                                return (
                                                    <Project
                                                        project={project}
                                                        key={index.toString()}
                                                        selectedProject={selectedProject}
                                                        onSelectProject={(p: GanttProjectItem) => onSelectProject(p)}
                                                    ></Project>
                                                );
                                            })}
                                        </SimpleBar>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col xxl={9} lg={8} className="mt-4 mt-xl-0">
                            <div className="ps-xl-3">
                                <Row>
                                    <Col className="col-auto">
                                        <Link to="#" className="btn btn-success btn-sm mb-2">
                                            Add New Task
                                        </Link>
                                    </Col>
                                    <Col className="text-sm-end">
                                        <ButtonGroup>
                                            {modes.map((m, index) => {
                                                return (
                                                    <Button
                                                        variant="primary"
                                                        size={'sm'}
                                                        key={index.toString()}
                                                        onClick={() => changeMode(m)}
                                                        active={mode === m}
                                                    >
                                                        {m}
                                                    </Button>
                                                );
                                            })}
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mt-3">
                                        <svg id="tasks-gantt"></svg>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export { ProjectGannt };
