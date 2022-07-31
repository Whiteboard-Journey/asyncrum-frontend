import { Row, Col, Button, ButtonGroup, Card, Dropdown, Alert, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Whiteboard } from './types';
import { useEffect } from 'react';
import { useReadAllWhiteboard } from "./hooks";
import avatar3 from 'assets/images/users/avatar-8.jpg';
import { useToggle } from 'hooks';
import axios from 'axios';
import config from 'config';
import { TDDocument, TDFile, TldrawApp } from '@tldraw/tldraw'

const whiteboardPageURL = '/apps/whiteboard?url=';

const onCreateWhiteboard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = JSON.parse(sessionStorage.getItem('hyper_user')!)
    const title = (((event.target as HTMLFormElement).elements as {[key: string]: any})['title'].value);
    const description = (((event.target as HTMLFormElement).elements as {[key: string]: any})['description'].value);
    const scope = "";
    axios.post(`${config.API_URL + "/api/v1/whiteboards"}`, { title, description, scope}, { headers: { Authorization: 'Bearer ' + user.token }})
    .then((response) => {
        const preSignedURL = response.data.preSignedURL;
        const document: TDDocument = {
            id: "doc",
            name: "New Document",
            version: TldrawApp.version,
            pages: {
                page: {
                    id: "page",
                    name: "Page 1",
                    childIndex: 1,
                    shapes: {},
                    bindings: {}
                }
            },
            pageStates: {
                page: {
                    id: "page",
                    selectedIds: [],
                    camera: {
                        point: [0, 0],
                        zoom: 1
                    }
                }
            },
            assets: {}
        };

        const file: TDFile = {
            name: document.name || 'New Document',
            fileHandle: null,
            document,
            assets: {},
        };
        
        const json = JSON.stringify(file, null, 2)
        
        const blob = new Blob([json], {
            type: 'application/vnd.Tldraw+json',
        })
        
        const fileToUpload = new File([blob], title)

        const formData = new FormData();
        formData.append("data", fileToUpload);
        const uploadAxios = axios.create({ transformRequest: [(data: any, headers: any) => {
            delete headers.common.Authorization;
            headers['content-type'] = 'application/octet-stream';
            return formData;
        }] });
        uploadAxios.put(preSignedURL, formData).then((res) => console.log(res));
        // window.location.replace(whiteboardPageURL);
    });
}

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
                    <Link to={whiteboardPageURL + whiteboard.whiteboardFileUrl + '&title=' + whiteboard.title} className="text-title">
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

    const [isStandardOpen, toggleStandard] = useToggle();

    useEffect(() => {
        onDashboardLoad();
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
                    <Button onClick={toggleStandard}><i className="mdi mdi-plus"></i> Create Whiteboard</Button>
                    <Modal show={isStandardOpen} onHide={toggleStandard}>
                        <Modal.Body>
                            <Modal.Header onHide={toggleStandard} closeButton>
                                <h4 className="modal-title">Create a new whiteboard</h4>
                            </Modal.Header>
                            <form className="ps-3 pe-3" onSubmit={onCreateWhiteboard}>
                                <div className="mt-3 mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="title"
                                        required
                                        placeholder="Untitled"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <input
                                        className="form-control"
                                        type="textarea"
                                        id="description"
                                        required
                                        placeholder="Description"
                                    />
                                </div>

                                <div className="mb-3 text-center">
                                    <button className="btn btn-primary" type="submit">
                                        Create
                                    </button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
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