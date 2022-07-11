// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// component
import CardTitle from '../../../../components/CardTitle';

type ChecklistsItems = {
    id: number,
    title: string,
    completed: boolean,
};

type TaskProps = {
    task: {
        id: number,
        title: string,
        assigned_to: string,
        assignee_avatar: string,
        due_date: string,
        completed: boolean,
        priority: string,
        stage: string,
        checklists: Array<ChecklistsItems>,
    },
};

const Task = ({ task }: TaskProps): React$Element<React$FragmentType> => {
    return (
        <>
            <Card>
                <Card.Body>
                    <CardTitle
                        containerClass="d-flex align-items-center justify-content-between"
                        title={
                            <div className="form-check float-start">
                                <input type="checkbox" className="form-check-input" id="completedCheck" />
                                <label className="form-check-label" htmlFor="completedCheck">
                                    Mark as completed
                                </label>
                            </div>
                        }
                        icon="mdi mdi-dots-horizontal"
                        menuItems={[
                            { label: 'Attachment', icon: 'uil uil-file-upload' },
                            { label: 'Edit', icon: 'uil uil-edit' },
                            { label: 'Mark as Duplicate', icon: 'uil uil-file-copy-alt' },
                            {
                                label: 'Delete',
                                icon: 'uil uil-trash-alt',
                                variant: 'text-danger',
                                hasDivider: true,
                            },
                        ]}
                    />
                    <div className="clearfix"></div>
                    <Row>
                        <Col>
                            <h3 className="mt-3">{task.title}</h3>

                            <Row>
                                <Col>
                                    <p className="mt-2 mb-1 text-muted fw-bold font-12 text-uppercase">Assigned To</p>
                                    <div className="d-flex">
                                        <img
                                            src={task.assignee_avatar}
                                            alt={task.assigned_to}
                                            className="rounded-circle me-2"
                                            height="24"
                                        />
                                        <div>
                                            <h5 className="mt-1 font-14">{task.assigned_to}</h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <p className="mt-2 mb-1 text-muted fw-bold font-12 text-uppercase">Due Date</p>
                                    <div className="d-flex">
                                        <i className="uil uil-schedule font-18 text-success me-1"></i>
                                        <div>
                                            <h5 className="mt-1 font-14">{task.due_date}</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <h5 className="mt-3">Overview:</h5>

                            <p className="text-muted mb-4">
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer. Some quick example text to build on the
                                card title and make up the bulk of the card's content. Some quick example text to build
                                on the card title and make up.
                            </p>

                            <h5 className="mt-4 mb-2 font-16">Checklists/Sub-tasks</h5>

                            {task.checklists.map((checklist, index) => (
                                <div className="form-check mt-1" key={index}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`checklist-${checklist.id}`}
                                        defaultChecked={checklist.completed}
                                    />
                                    <label
                                        className={classNames('form-check-label', {
                                            strikethrough: checklist.completed,
                                        })}
                                        htmlFor={`checklist-${checklist.id}`}>
                                        {checklist.title}
                                    </label>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default Task;
