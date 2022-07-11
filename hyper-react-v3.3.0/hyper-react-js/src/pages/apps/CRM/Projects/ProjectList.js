// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

// component
import CardTitle from '../../../../components/CardTitle';
import { VerticalForm, FormInput } from '../../../../components/';

type Project = {
    title: string,
    task: string,
    created_on: string,
    members: string[],
};

type ProjectListProps = {
    projectList: Project[],
};

const AddNew = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title as="h5">Add New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm>
                    <FormInput
                        type="text"
                        label="Project Name"
                        name="projectName"
                        placeholder="Add project name..."
                        containerClass={'mb-3'}
                    />
                    <FormInput label="Add Task" name="select" type="select" containerClass={'mb-3'}>
                        <option>Add a task...</option>
                        <option value="1">Landing Page</option>
                        <option value="2">Admin Dashboards</option>
                        <option value="3">Admin Pages</option>
                        <option value="4">UX/UI Design</option>
                        <option value="5">Client Work</option>
                        <option value="6">Other Work</option>
                    </FormInput>

                    <div className="mb-3">
                        <label htmlFor="AssignTask" className="form-label">
                            Assign Task
                        </label>
                        <Select
                            placeholder="Choose..."
                            isMulti={true}
                            options={[
                                {
                                    label: 'UX Designer',
                                    options: [
                                        { value: 'AD', label: 'Andrea' },
                                        { value: 'DL', label: 'Danielle' },
                                        { value: 'JH', label: 'John' },
                                    ],
                                },
                                {
                                    label: 'Developer',
                                    options: [
                                        { value: 'ST', label: 'Steven' },
                                        { value: 'MC', label: 'Michael' },
                                    ],
                                },
                                {
                                    label: 'UX Designer',
                                    options: [
                                        { value: 'SR', label: 'Sharon' },
                                        { value: 'TM', label: 'Timothy' },
                                        { value: 'FD', label: 'Frederick' },
                                        { value: 'HN', label: 'Henry' },
                                    ],
                                },
                            ]}
                            className="react-select"
                            classNamePrefix="react-select"></Select>
                    </div>

                    <FormInput
                        type="textarea"
                        label="Description"
                        name="description"
                        rows="4"
                        containerClass={'mb-3'}
                    />
                </VerticalForm>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Task
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const ProjectList = ({ projectList }: ProjectListProps): React$Element<React$FragmentType> => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row>
                {(projectList || []).map((project, index) => {
                    return (
                        <Col key={index.toString()} sm={6} xl={3} className="mb-3">
                            <Card className="mb-0 h-100">
                                <Card.Body>
                                    <CardTitle
                                        containerClass="d-flex align-items-center justify-content-between"
                                        title={
                                            <div>
                                                <h4 className="header-title">{project.title}</h4>
                                                <h5
                                                    className="text-muted fw-normal mt-0 text-truncate"
                                                    title="Campaign Sent">
                                                    {project.task}
                                                </h5>
                                            </div>
                                        }
                                        icon="mdi mdi-dots-horizontal"
                                        menuItems={[
                                            { label: 'Add Card', icon: 'mdi mdi-plus-circle' },
                                            { label: 'Copy List', icon: 'mdi mdi-content-copy' },
                                            { label: 'Edit', icon: 'mdi mdi-square-edit-outline' },
                                            {
                                                label: 'Delete',
                                                icon: 'mdi mdi-trash-can-outline',
                                                variant: 'text-danger',
                                                hasDivider: true,
                                            },
                                        ]}
                                    />

                                    <div className="d-flex align-items-center mt-3">
                                        <div className="flex-shrink-0">
                                            <h5 className="font-13 text-muted my-0">
                                                <i className="mdi mdi-clock-outline"></i> {project.created_on}
                                            </h5>
                                        </div>
                                        <div className="flex-grow-1 ms-2"></div>
                                        <div className="text-end multi-user">
                                            {(project.members || []).map((member, index) => {
                                                return (
                                                    <Link key={index.toString()} to="#" className="d-inline-block">
                                                        <img
                                                            src={member}
                                                            className="rounded-circle avatar-xs"
                                                            alt="friend"
                                                        />
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
                <Col sm={6} xl={3} className="mb-3">
                    <Card className="mb-0 h-100">
                        <Card.Body>
                            <div className="border-dashed border-2 border h-100 w-100 rounded d-flex align-items-center justify-content-center">
                                <Link
                                    to="#"
                                    onClick={handleShow}
                                    className="text-center text-muted p-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    <i className="mdi mdi-plus h3 my-0"></i>{' '}
                                    <h4 className="font-16 mt-1 mb-0 d-block">Add New Project</h4>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <AddNew show={show} handleClose={handleClose} />
        </>
    );
};

export default ProjectList;
