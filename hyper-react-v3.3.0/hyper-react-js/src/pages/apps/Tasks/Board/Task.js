// @flow
import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type TaskItemProps = {
    task: {
        id: number,
        title: string,
        status: string,
        priority: string,
        userAvatar: string,
        project: string,
        totalComments: number,
        totalSubTasks: number,
        user: string,
        dueDate: string,
    },
};

// task item
const TaskItem = (props: TaskItemProps): React$Element<any> => {
    const task = props.task || {};

    return (
        <Card className="mb-0">
            <Card.Body className="p-3">
                <small className="float-end text-muted">{task.dueDate}</small>
                <span
                    className={classNames('badge', {
                        'bg-danger': task.priority === 'High',
                        'bg-secondary': task.priority === 'Medium',
                        'bg-success': task.priority === 'Low',
                    })}>
                    {task.priority}
                </span>

                <h5 className="mt-2 mb-2">
                    <Link to="#" className="text-body">
                        {task.title}
                    </Link>
                </h5>

                <p className="mb-0">
                    <span className="pe-2 text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-briefcase-outline text-muted"></i> {task.project}
                    </span>
                    <span className="text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-comment-multiple-outline text-muted"></i> <b>{task.totalComments}</b>{' '}
                        Comments
                    </span>
                </p>

                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle
                        variant="link"
                        className="text-muted card-drop arrow-none cursor-pointer p-0 shadow-none">
                        <i className="mdi mdi-dots-vertical font-18"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className="mdi mdi-pencil me-1"></i>Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="mdi mdi-delete me-1"></i>Delete
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="mdi mdi-plus-circle-outline me-1"></i>Add People
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="mdi mdi-exit-to-app me-1"></i>Leave
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <p className="mb-0">
                    <img src={task.userAvatar} alt={task.user} className="avatar-xs rounded-circle me-1" />
                    <span className="align-middle">{task.user}</span>
                </p>
            </Card.Body>
        </Card>
    );
};

export default TaskItem;
