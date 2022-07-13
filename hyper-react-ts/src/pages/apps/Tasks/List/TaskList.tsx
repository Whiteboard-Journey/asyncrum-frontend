import { Row, Col, Dropdown, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTaskList } from '../hooks';
import TaskSection from './Section';
import Task from './Task';

const TaskList = () => {
    const { todayTask, upcomingTask, otherTask, selectedTask, selectTask } = useTaskList();
    return (
        <Row>
            <Col xl={8}>
                <div className="page-title-box">
                    <div className="page-title-right">
                        <div className="app-search">
                            <InputGroup>
                                <Form.Control placeholder="Search..." />
                                <span className="mdi mdi-magnify search-icon"></span>
                                <Dropdown align="end">
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
    );
};

export { TaskList };
