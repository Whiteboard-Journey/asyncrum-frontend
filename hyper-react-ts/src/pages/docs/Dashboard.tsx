import { Row, Col, Button, ButtonGroup, Card, Dropdown, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Whiteboard } from './types';
import { useEffect } from 'react';
import { useReadAllWhiteboard } from "./hooks";
import avatar3 from 'assets/images/users/avatar-8.jpg';

const WhiteboardCard = ({ whiteboard }: {whiteboard: Whiteboard}) => {
    return (
        <Card className="d-block">
            <Card.Body>
                <Dropdown className="card-widgets" align="end">
                    <Dropdown.Toggle
                        variant="link"
                        as="a"
                        className="card-drop arrow-none cursor-pointer p-0 shadow-none"
                    >
                        <i className="dripicons-dots-3"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Share</Dropdown.Item>
                        <Dropdown.Item>Rename</Dropdown.Item>
                        <Dropdown.Item>Duplicate</Dropdown.Item>
                        <Dropdown.Item>Board details</Dropdown.Item>
                        <Dropdown.Item>Copy link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h4 className="mt-0">
                    <Link to="/apps/projects/details" className="text-title">
                        {whiteboard.title}
                    </Link>
                </h4>
                {whiteboard.description && (
                    <p className="font-13 my-3">
                        {whiteboard.description}...
                        <Link to="#" className="fw-bold text-muted">
                            view more
                        </Link>
                    </p>
                )}
                <div>
                    <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mat Helme"
                        className="d-inline-block me-1"
                    >
                        <span className="font-13">Author: </span>
                        <img src={avatar3} className="rounded-circle avatar-xs" alt="friend" />
                    </Link>
                </div>
                <p className="text-muted text-end font-12 mt-3 mb-1">
                    Last modified: {whiteboard.lastModifiedDate}
                </p>
            </Card.Body>
        </Card>
    );
}

const Dashboard = () => {
    const { loading, whiteboards, error, onDashboardLoad } = useReadAllWhiteboard();

    useEffect(() => {
        onDashboardLoad();
        console.log(loading, whiteboards, error, onDashboardLoad);
    });

    return(
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Whiteboards</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
            <Row className="mb-2">
                <Col sm={4}>
                    <Link to="/apps/whiteboard">
                        <Button variant="primary" className="rounded-pill mb-3">
                            <i className="mdi mdi-plus"></i> Create Whiteboard
                        </Button>
                    </Link>
                </Col>
                <Col sm={8}>
                    <div className="text-sm-end">
                        <div className="btn-group mb-3">
                            <Button variant="primary">All</Button>
                        </div>
                        <ButtonGroup className="mb-3 ms-1">
                            <Button variant="light">Owned by me</Button>
                            <Button variant="light">Not owned by me</Button>
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>
            {error && (
                <Alert variant="danger" className="my-2">
                    {error}
                </Alert>
            )}
            {!loading && 
            <Row>
                {whiteboards.map((whiteboard: Whiteboard, i: number) => {
                    return (
                        <Col md={6} xxl={3} key={'wb-' + whiteboard.id}>
                            <WhiteboardCard whiteboard={whiteboard} />
                        </Col>
                    );
                })}
            </Row>
            }
        </>
    );
}

export default Dashboard;