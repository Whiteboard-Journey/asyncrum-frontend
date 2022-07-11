import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';
import { useToggle } from 'hooks';
import { useTask } from '../hooks';
import { ListTaskItem } from '../types';

const Task = ({ task, selectTask }: { task: ListTaskItem; selectTask: (task: ListTaskItem) => void }) => {
    const { completed, markCompleted } = useTask(task);

    return (
        <Row className="justify-content-sm-between mt-2">
            <Col sm={6} className="mb-2 mb-sm-0">
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id={`task-${task.id}`}
                        checked={completed}
                        onChange={(event) => markCompleted(event, selectTask)}
                    />
                    <label className="form-check-label" htmlFor={`task-${task.id}`} onClick={() => selectTask(task)}>
                        {task.title}
                    </label>
                </div>
            </Col>
            <Col sm={6}>
                <div className="d-flex justify-content-between">
                    <div>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Assigned to {task.assigned_to}</Tooltip>}>
                            <img
                                src={task.assignee_avatar}
                                alt=""
                                className="avatar-xs rounded-circle me-1"
                                id={`task-avatar-${task.id}`}
                            />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <ul className="list-inline font-13 text-end">
                            <li className="list-inline-item">
                                <i className="uil uil-schedule font-16 me-1"></i> {task.due_date}
                            </li>
                            <li className="list-inline-item ms-1">
                                <i className="uil uil-align-alt font-16 me-1"></i>{' '}
                                {task.checklists.filter((t) => t.completed).length} / {task.checklists.length}
                            </li>
                            <li className="list-inline-item ms-1">
                                <i className="uil uil-comment-message font-16 me-1"></i> {task.comments.length}
                            </li>
                            <li className="list-inline-item ms-2">
                                <span
                                    className={classNames(
                                        'badge',
                                        {
                                            'badge-danger-lighten': task.priority === 'High',
                                            'badge-info-lighten': task.priority === 'Medium',
                                            'badge-success-lighten': task.priority === 'Low',
                                        },
                                        'p-1'
                                    )}
                                >
                                    {task.priority}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

type TaskSectionProps = {
    title: string;
    tasks: Array<ListTaskItem>;
    selectTask: (task: ListTaskItem) => void;
};

const TaskSection = ({ title, tasks, selectTask }: TaskSectionProps) => {
    const [isCollapsed, toggleCollapse] = useToggle(true);

    const [taskList] = useState<ListTaskItem[]>(tasks);

    return (
        <>
            <h5 className="m-0 pb-2">
                <Link className="text-dark" to="#" onClick={toggleCollapse}>
                    <i
                        className={classNames(
                            'uil',
                            { 'uil-angle-down': isCollapsed, 'uil-angle-right': !isCollapsed },
                            'font-18'
                        )}
                    ></i>
                    {title} <span className="text-muted">({taskList.length})</span>
                </Link>
            </h5>
            <Collapse in={isCollapsed}>
                <Card className="mb-0">
                    <Card.Body className="pb-1 pt-2">
                        {taskList.map((task, index) => (
                            <Task selectTask={selectTask} task={task} key={index.toString()} />
                        ))}
                    </Card.Body>
                </Card>
            </Collapse>
        </>
    );
};

export default TaskSection;
