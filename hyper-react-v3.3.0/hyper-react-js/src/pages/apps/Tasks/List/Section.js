// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';

const Task = (props) => {
    const { task, selectTask }: any = props;

    const [completed, setCompleted] = useState(task.stage === 'Done');

    /*
     * mark completd on selected task
     */
    const markCompleted = (e) => {
        setCompleted(e.target.checked);
        selectTask(task);
    };

    return (
        <Row className="justify-content-sm-between mt-2">
            <Col sm={6} className="mb-2 mb-sm-0">
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id={`task-${task.id}`}
                        checked={completed}
                        onChange={markCompleted}
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
                                    )}>
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

type ChecklistsItems = {
    id: number,
    title: string,
    completed: boolean,
};

type AttachmentsItems = {
    id: number,
    filename: string,
    size: string,
};

type CommentsItems = {
    id: number,
    author: string,
    text: string,
    posted_on: string,
    author_avatar: string,
};

type TaskItems = {
    id: number,
    title: string,
    assigned_to: string,
    assignee_avatar: string,
    due_date: string,
    completed: boolean,
    priority: string,
    stage: string,
    checklists: Array<ChecklistsItems>,
    description: string,
    attachments: Array<AttachmentsItems>,
    comments: Array<CommentsItems>,
};

type TaskSectionState = {
    title: string,
    tasks: Array<TaskItems>,
    selectTask: any,
};

const TaskSection = ({ title, tasks, selectTask }: TaskSectionState): React$Element<React$FragmentType> => {
    const [collapse, setCollapse] = useState(true);
    const [taskList] = useState(tasks);

    /*
     * toggle task-dropdown
     */
    const toggleTask = () => setCollapse(!collapse);

    return (
        <>
            <h5 className="m-0 pb-2">
                <Link className="text-dark" to="#" onClick={toggleTask}>
                    <i
                        className={classNames(
                            'uil',
                            { 'uil-angle-down': collapse, 'uil-angle-right': !collapse },
                            'font-18'
                        )}></i>
                    {title} <span className="text-muted">({taskList.length})</span>
                </Link>
            </h5>
            <Collapse in={collapse}>
                <Card className="mb-0">
                    <Card.Body className="pb-1 pt-2">
                        {taskList.map((task, idx) => (
                            <Task selectTask={selectTask} task={task} key={idx} />
                        ))}
                    </Card.Body>
                </Card>
            </Collapse>
        </>
    );
};

export default TaskSection;
