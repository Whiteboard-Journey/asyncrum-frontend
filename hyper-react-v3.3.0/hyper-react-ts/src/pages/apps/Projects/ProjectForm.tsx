import { useState } from 'react';
import { Row, Col, Card, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { PageTitle, HyperDatepicker, FileUploader, FormInput } from 'components';
import { Link } from 'react-router-dom';
import { useProjectForm } from './hooks';

const ProjectForm = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    const {
        teamMembers,
        selectedTeamMembers,
        handleSubmit,
        register,
        control,
        errors,
        handleValidSubmit,
        selectTeamMembers,
    } = useProjectForm();

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
                                                                    key={index.toString()}
                                                                    placement="top"
                                                                    overlay={<Tooltip>{member.name}</Tooltip>}
                                                                >
                                                                    <Link
                                                                        to="#"
                                                                        title={member.name}
                                                                        data-original-title="James Anderson"
                                                                        className="d-inline-block me-1"
                                                                    >
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
                                                    <FileUploader />
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
