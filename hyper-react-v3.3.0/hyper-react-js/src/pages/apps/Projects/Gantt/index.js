// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import Gantt from 'frappe-gantt/src/';

// components
import PageTitle from '../../../../components/PageTitle';

// dummy data
import { projects as projectsData, tasks as tasksData } from './data';

const Project = ({ project, onSelectProject, selectedProject }) => {
    return (
        <Link to="#" className="text-body" onClick={(e) => onSelectProject(project)}>
            <div
                className={classNames('d-flex', 'p-2', {
                    'bg-light': selectedProject && selectedProject.id === project.id,
                })}>
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
                            })}>
                            {project.status}
                        </span>
                    </h5>
                    <p className="mt-1 mb-0 text-muted">ID: {project.id}</p>
                </div>
            </div>
        </Link>
    );
};

const ProjectGannt = (): React$Element<React$FragmentType> => {
    const [projects] = useState([...projectsData]);
    const [selectedProject, setSelectedProject] = useState(projectsData[1]);
    const [mode, setMode] = useState('Week');
    const [gantt, setGantt] = useState(null);

    const modes = ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'];

    useEffect(() => {
        // create gantt
        const gantt = new Gantt('#tasks-gantt', [...tasksData], {
            view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
            bar_height: 20,
            padding: 18,
            view_mode: 'Week',
            custom_popup_html(task) {
                return (
                    '<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">' +
                    '<div class="arrow"></div><div class="popover-body">' +
                    `<h5>${task.name}</h5><p class="mb-2">Expected to finish by ${task.end}</p>` +
                    '<div class="progress mb-2" style="height: 10px;">' +
                    `<div class="progress-bar" role="progressbar" style="width: ${task.progress}%;" aria-valuenow="${task.progress}"` +
                    ` aria-valuemin="0" aria-valuemax="100">${task.progress}%</div>` +
                    '</div></div></div>'
                );
            },
        });
        setGantt(gantt);
    }, []);

    /**
     * On mode change
     * @param {*} mode
     */
    const changeMode = (mode) => {
        setMode(mode);
        if (gantt) {
            gantt.change_view_mode(mode);
        }
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Projects', path: '/apps/projects' },
                    { label: 'Gantt', path: '/apps/projects/gantt', active: true },
                ]}
                title={'Project Calendar'}
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
                                            {projects.map((project, idx) => {
                                                return (
                                                    <Project
                                                        project={project}
                                                        key={idx}
                                                        selectedProject={selectedProject}
                                                        onSelectProject={(p) => setSelectedProject(p)}></Project>
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
                                            {modes.map((m, idx) => {
                                                return (
                                                    <Button
                                                        variant="primary"
                                                        size={'sm'}
                                                        key={idx}
                                                        onClick={() => changeMode(m)}
                                                        active={mode === m}>
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

export default ProjectGannt;
