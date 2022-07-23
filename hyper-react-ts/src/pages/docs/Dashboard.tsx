import { Row, Col, Button, ButtonGroup, Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Whiteboard } from './types';
import { whiteboards } from './data';
import avatar1 from 'assets/images/users/avatar-6.jpg';
import avatar2 from 'assets/images/users/avatar-7.jpg';
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
                        <img src={avatar3} className="rounded-circle avatar-xs" alt="friend" />
                    </Link>

                    <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Michael Zenaty"
                        className="d-inline-block me-1"
                    >
                        <img src={avatar1} className="rounded-circle avatar-xs" alt="friend" />
                    </Link>

                    <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="James Anderson"
                        className="d-inline-block"
                    >
                        <img src={avatar2} className="rounded-circle avatar-xs" alt="friend" />
                    </Link>
                    {whiteboard.totalMembers - 3 > 0 && (
                        <Link to="#" className="d-inline-block text-muted fw-bold ms-2">
                            +{whiteboard.totalMembers - 3} more
                        </Link>
                    )}
                </div>
                <p className="text-muted text-end font-12 mt-3 mb-1">
                    Last modified by {whiteboard.lastModifiedBy}<br/>{whiteboard.lastModifiedTime}
                </p>
            </Card.Body>
        </Card>
    );
}

const Dashboard = () => {
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
            <Row>
                {whiteboards.map((whiteboard, i) => {
                    return (
                        <Col md={6} xxl={3} key={'wb-' + whiteboard.id}>
                            <WhiteboardCard whiteboard={whiteboard} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default Dashboard;