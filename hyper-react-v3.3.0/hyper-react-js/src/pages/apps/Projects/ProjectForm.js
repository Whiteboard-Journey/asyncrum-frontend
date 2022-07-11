// @flow
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Card, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typeahead } from 'react-bootstrap-typeahead';

// components
import PageTitle from '../../../components/PageTitle';
import HyperDatepicker from '../../../components/Datepicker';
import FileUploader from '../../../components/FileUploader';
import { FormInput } from '../../../components/';

// images
import avatar1 from '../../../assets/images/users/avatar-6.jpg';
import avatar2 from '../../../assets/images/users/avatar-7.jpg';
import avatar3 from '../../../assets/images/users/avatar-8.jpg';
import avatar4 from '../../../assets/images/users/avatar-9.jpg';
import avatar5 from '../../../assets/images/users/avatar-10.jpg';
import avatar6 from '../../../assets/images/users/avatar-4.jpg';
import avatar7 from '../../../assets/images/users/avatar-5.jpg';
import avatar8 from '../../../assets/images/users/avatar-1.jpg';
import { Link } from 'react-router-dom';

const ProjectForm = (): React$Element<React$FragmentType> => {
    const [, setAvatar] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [teamMembers] = useState([
        { value: 'Shreyu N', name: 'Shreyu N', image: avatar2 },
        { value: 'Greeva N', name: 'Greeva N', image: avatar5 },
        { value: 'Dhyanu B', name: 'Dhyanu B', image: avatar4 },
        { value: 'Mannat B', name: 'Mannat B', image: avatar6 },
        { value: 'Katu S', name: 'Katu S', image: avatar7 },
        { value: 'Nik N', name: 'Nik N', image: avatar1 },
        { value: 'Rik N', name: 'Rik N', image: avatar8 },
    ]);
    const [selectedTeamMembers, setSelectedTeamMembers] = useState([
        { value: 'Shreyu N', name: 'Shreyu N', image: avatar1 },
        { value: 'Greeva N', name: 'Greeva N', image: avatar2 },
        { value: 'Dhyanu B', name: 'Dhyanu B', image: avatar3 },
    ]);

    /*
     *  add selected team members
     */
    const selectTeamMembers = (e) => {
        if (e.length !== 0) {
            const isAlreadySelected = selectedTeamMembers.filter((x) => x['name'] === e[0].name);
            if (isAlreadySelected && isAlreadySelected.length === 0) {
                setSelectedTeamMembers([...selectedTeamMembers, e[0]]);
            }
        }
    };

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter Project Name'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    /**
     * Handle the form submission
     */
    const handleValidSubmit = (e, values) => {
        console.log({ ...values });
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Projects', path: '/apps/projects' },
                    { label: 'Create Project', path: '/apps/projects/new', active: true },
                ]}
                title={'Create Project'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <form onSubmit={handleSubmit(handleValidSubmit)}>
                                        <Row>
                                            <Col xl={6}>
                                                <FormInput
                                                    name="name"
                                                    label="Name"
                                                    placeholder="Enter project name"
                                                    containerClass={'mb-3'}
                                                    register={register}
                                                    key="name"
                                                    errors={errors}
                                                    control={control}
                                                />

                                                <FormInput
                                                    name="overview"
                                                    label="Overview"
                                                    placeholder="Enter some brief about project.."
                                                    type="textarea"
                                                    rows="5"
                                                    containerClass={'mb-3'}
                                                    register={register}
                                                    key="overview"
                                                    errors={errors}
                                                    control={control}
                                                />

                                                <Form.Group className="mb-3 position-relative">
                                                    <Form.Label>Start Date</Form.Label>
                                                    <HyperDatepicker
                                                        className="form-control"
                                                        value={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                    />
                                                </Form.Group>

                                                <FormInput
                                                    name="budget"
                                                    label="Budget"
                                                    placeholder="Enter project budget"
                                                    type="number"
                                                    containerClass={'mb-3'}
                                                    register={register}
                                                    key="budget"
                                                    errors={errors}
                                                    control={control}
                                                />

                                                <Form.Group className="mb-3">
                                                    <Form.Label>Team Members</Form.Label>
                                                    <Typeahead
                                                        id="select3"
                                                        labelKey="name"
                                                        multiple={false}
                                                        options={teamMembers}
                                                        placeholder="select Team Member..."
                                                        onChange={selectTeamMembers}
                                                    />
                                                    <div className="mt-2">
                                                        {selectedTeamMembers.map((member, index) => {
                                                            return (
                                                                <OverlayTrigger
                                                                    key={index}
                                                                    placement="top"
                                                                    overlay={<Tooltip>{member.name}</Tooltip>}>
                                                                    <Link
                                                                        to="#"
                                                                        title={member.name}
                                                                        data-original-title="James Anderson"
                                                                        className="d-inline-block me-1">
                                                                        <img
                                                                            src={member.image}
                                                                            className="rounded-circle avatar-xs"
                                                                            alt="friend"
                                                                        />
                                                                    </Link>
                                                                </OverlayTrigger>
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Group className="mb-3 mt-3 mt-xl-0">
                                                    <Form.Label>Avatar</Form.Label>
                                                    <p className="text-muted font-14">
                                                        Recommended thumbnail size 800x400 (px).
                                                    </p>
                                                    <FileUploader onFileUpload={(files) => setAvatar(files)} />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label>Due Date</Form.Label>
                                                    <HyperDatepicker
                                                        className="form-control"
                                                        value={endDate}
                                                        onChange={(date) => setEndDate(date)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="mt-2">
                                            <Col>
                                                <Button type="submit" variant="success">
                                                    Submit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProjectForm;
