import { Card, Col, Dropdown, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Client } from './types';

type ClientDetailsProps = {
    clientsData: Array<Client>;
};

const ClientDetails = ({ clientsData }: ClientDetailsProps) => {
    return (
        <>
            {(clientsData || []).map((client, index) => {
                return (
                    <Col xxl={3} md={6} key={index.toString()}>
                        <Card>
                            <Card.Body>
                                <Dropdown align="end" className="float-end">
                                    <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0">
                                        <i className="mdi mdi-dots-horizontal"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>View Profile</Dropdown.Item>
                                        <Dropdown.Item>Project Info</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="text-center">
                                    <img
                                        src={client.avatar}
                                        alt=""
                                        className="rounded-circle avatar-md img-thumbnail"
                                    />
                                    <h4 className="mt-3 my-1">
                                        {client.name}{' '}
                                        {client.verifiedClient && (
                                            <i className="mdi mdi-check-decagram text-primary"></i>
                                        )}
                                    </h4>
                                    <p className="mb-0 text-muted">
                                        <i className="mdi mdi-email-outline me-1"></i>
                                        {client.emailId}
                                    </p>
                                    <hr className="bg-dark-lighten my-3" />
                                    <h5 className="mt-3 fw-semibold text-muted">
                                        Complete Total <b>{client.completedProject}</b> Project
                                    </h5>

                                    <Row className="mt-3">
                                        <Col xs={4}>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Message</Tooltip>}>
                                                <Link to="#" className="btn btn-light w-100">
                                                    <i className="mdi mdi-message-processing-outline"></i>
                                                </Link>
                                            </OverlayTrigger>
                                        </Col>
                                        <Col xs={4}>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Call</Tooltip>}>
                                                <Link to="#" className="btn btn-light w-100">
                                                    <i className="mdi mdi-phone"></i>
                                                </Link>
                                            </OverlayTrigger>
                                        </Col>
                                        <Col xs={4}>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Email</Tooltip>}>
                                                <Link to="#" className="btn btn-light w-100">
                                                    <i className="mdi mdi-email-outline"></i>
                                                </Link>
                                            </OverlayTrigger>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </>
    );
};

export default ClientDetails;
