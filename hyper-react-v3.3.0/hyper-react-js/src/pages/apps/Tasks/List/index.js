// @flow
import React, { useState } from 'react';
import { Row, Col, Dropdown, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import TaskSection from './Section';
import Task from './Task';

// dummy data
import { todayTasks, upcomingTasks, otherTasks } from './Data';

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
    isSortDropdownOpen: boolean,
    otherTasks: Array<TaskItems>,
    selectedTask: TaskItems,
    todayTasks: Array<TaskItems>,
    upcomingTasks: Array<TaskItems>,
};
// Task List
const TaskList = (state: TaskSectionState): React$Element<React$FragmentType> => {
    const [todayTask] = useState([...todayTasks]);
    const [upcomingTask] = useState([...upcomingTasks]);
    const [otherTask] = useState([...otherTasks]);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(todayTasks[0]);

    /**
     * Toggle sort
     */
    const toggleSortDropDown = () => {
        setIsSortDropdownOpen(!isSortDropdownOpen);
    };
    /**
     * Selects the task
     * @param {*} taks
     */
    const selectTask = (task) => {
        setSelectedTask(task);
    };

    return (
        <>
            <Row>
                <Col xl={8}>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <div className="app-search">
                                <InputGroup>
                                    <Form.Control placeholder="Search..." />
                                    <span className="mdi mdi-magnify search-icon"></span>
                                    <Dropdown
                                        addonType="append"
                                        isOpen={isSortDropdownOpen}
                                        toggle={toggleSortDropDown}
                                        align="end">
                                        <Dropdown.Toggle variant="secondary">
                                            <i className="uil uil-sort-amount-down"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Due Date</Dropdown.Item>
                                            <Dropdown.Item>Added Date</Dropdown.Item>
                                            <Dropdown.Item>Assignee</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </InputGroup>
                            </div>
                        </div>
                        <h4 className="page-title">
                            Tasks{' '}
                            <Link to="#" className="btn btn-success btn-sm ms-3">
                                Add New
                            </Link>
                        </h4>
                    </div>

                    {/* tasks */}
                    <div className="mt-2">
                        <TaskSection title="Today" tasks={todayTask} selectTask={selectTask}></TaskSection>
                    </div>
                    <div className="mt-4">
                        <TaskSection title="Upcoming" tasks={upcomingTask} selectTask={selectTask}></TaskSection>
                    </div>
                    <div className="mt-4 mb-4">
                        <TaskSection title="Other" tasks={otherTask} selectTask={selectTask}></TaskSection>
                    </div>
                </Col>

                <Col>
                    <Task {...selectedTask} />
                </Col>
            </Row>
        </>
    );
};

export default TaskList;
