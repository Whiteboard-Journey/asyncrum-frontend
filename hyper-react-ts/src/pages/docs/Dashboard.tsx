import { Row, Col, Button, ButtonGroup, Card, Dropdown, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DailyStandup, Whiteboard } from './types';
import { useEffect, useState } from 'react';
import { useToggle } from 'hooks';
import axios from 'axios';
import config from 'config';
import { TDDocument, TDFile, TldrawApp } from '@krapi0314/tldraw';
import moment from 'moment';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useModal } from './hooks';
import { VideoRecorder } from 'components';

const whiteboardPageURL = '/apps/whiteboard?url=';

const onCreateWhiteboard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!)
    const title = (((event.target as HTMLFormElement).elements as {[key: string]: any})['title'].value);
    const description = (((event.target as HTMLFormElement).elements as {[key: string]: any})['description'].value);
    const scope = "TEAM";

    axios.post(`${config.API_URL + "/api/v1/whiteboards"}`, { title, description, scope }, { headers: { Authorization: 'Bearer ' + user.token }})
    .then((response) => {
        const preSignedURL = response.data.preSignedURL;
        const whiteboardID = response.data.id;
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
        uploadAxios.put(preSignedURL, formData).then(() => {
            axios.get(`${config.API_URL + "/api/v1/whiteboards/" + whiteboardID }`, { headers: { Authorization: 'Bearer ' + user.token }})
                .then((res) => {
                    window.location.href = whiteboardPageURL+res.data.whiteboardUrl+'&id='+whiteboardID;
                });
        });
    });
}

const onEditWhiteboard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!)
    const id = (((event.target as HTMLFormElement).elements as {[key: string]: any})['id'].value);
    const title = (((event.target as HTMLFormElement).elements as {[key: string]: any})['title'].value);
    const description = (((event.target as HTMLFormElement).elements as {[key: string]: any})['description'].value);
    const scope = "";

    axios.patch(`${config.API_URL + "/api/v1/whiteboards/" + id }`, { title, description, scope }, { headers: { Authorization: 'Bearer ' + user.token }})
        .then(() => window.location.reload());
}

const convertDatetime = (datetime: string) => {
    const convertedDatetime = new Date(datetime);
    convertedDatetime.setTime(convertedDatetime.getTime() - convertedDatetime.getTimezoneOffset()*60*1000);
    return moment(convertedDatetime).fromNow();
}

const onDeleteWhiteboard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!)
    const id = (((event.target as HTMLFormElement).elements as {[key: string]: any})['id'].value);

    axios.delete(`${config.API_URL + "/api/v1/whiteboards/" + id }`, { headers: { Authorization: 'Bearer ' + user.token }})
        .then(() => window.location.reload());
}

const DailyStandupCard = ({ dailyStandup }: {dailyStandup: DailyStandup}) => {
    const cam_w = 320, cam_h = 240, screen_w = 960, screen_h = 540
    const { isOpen: isViewOpen, size, className, scroll, toggleModal: toggleView, openModalWithClass } =
        useModal();

    return (
        <Card className="d-block me-3">
            <Card.Body onClick={() => {openModalWithClass('modal-full-width')}} style={{cursor:'pointer'}}>
                <div className={(dailyStandup.seen ? "opacity-25" : "") + " text-center"}>
                    <img src={dailyStandup.profileImageUrl} className="rounded-circle avatar-lg" alt={dailyStandup.author} referrerPolicy="no-referrer" />
                </div>
                <h4 className={(dailyStandup.seen ? "text-light" : "") + " text-center font-weight-bold mt-2"}>
                    {dailyStandup.author}
                </h4>
                <p className={(dailyStandup.seen ? "text-light" : "text-muted") + " text-center font-12 mb-1"}>
                    {convertDatetime(dailyStandup.createdDate)}
                </p>
                <Modal show={isViewOpen} onHide={toggleView} dialogClassName={className} size={size} scrollable={scroll}>
                    <Modal.Body>
                        <Modal.Header onHide={toggleView} closeButton>
                            <h4 className="modal-title">{dailyStandup.author + " - " + convertDatetime(dailyStandup.createdDate)}</h4>
                        </Modal.Header>
                        <video src={dailyStandup.camRecordFileUrl} controls autoPlay playsInline width={cam_w} height={cam_h} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
                        <video src={dailyStandup.screenRecordFileUrl} controls autoPlay playsInline width={screen_w} height={screen_h} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
}

const WhiteboardCard = ({ whiteboard }: {whiteboard: Whiteboard}) => {
    const [isEditOpen, toggleEdit] = useToggle();
    const [isDeleteOpen, toggleDelete] = useToggle();
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

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
                        <Dropdown.Item onClick={toggleEdit}>Edit</Dropdown.Item>
                            <Modal show={isEditOpen} onHide={toggleEdit}>
                                <Modal.Body>
                                    <Modal.Header onHide={toggleEdit} closeButton>
                                        <h4 className="modal-title">Edit Whiteboard Information</h4>
                                    </Modal.Header>
                                    <form className="ps-3 pe-3" onSubmit={onEditWhiteboard}>
                                        <input type="hidden" id="id" value={whiteboard.id} />
                                        <div className="mt-3 mb-3">
                                            <label htmlFor="title" className="form-label">
                                                Title
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="title"
                                                maxLength={255}
                                                required
                                                placeholder={whiteboard.title}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">
                                                Description
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="description"
                                                maxLength={255}
                                                required
                                                placeholder={whiteboard.description}
                                            />
                                        </div>

                                        <div className="mb-3 text-center">
                                            <button className="btn btn-primary" type="submit">
                                                Edit
                                            </button>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        <Dropdown.Item>Duplicate</Dropdown.Item>
                        <Dropdown.Item className='text-danger' onClick={toggleDelete}>Delete</Dropdown.Item>
                            <Modal show={isDeleteOpen} onHide={toggleDelete}>
                                <Modal.Body>
                                    <Modal.Header onHide={toggleDelete} closeButton>
                                        <h4 className="modal-title">Delete {whiteboard.title}</h4>
                                    </Modal.Header>
                                    <p className="mt-4 mb-4 text-center font-weight-bolds">Are you sure you want to delete this whiteboard permanently?</p>
                                    <form className="ps-3 pe-3" onSubmit={onDeleteWhiteboard}>
                                        <input type="hidden" id="id" value={whiteboard.id} />
                                        <div className="mb-3 text-center">
                                            <button className="btn btn-danger" type="submit">
                                                Delete
                                            </button>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                    </Dropdown.Menu>
                </Dropdown>
                <h4 className="mt-0">
                    <Link to={whiteboardPageURL + whiteboard.whiteboardFileUrl + '&id=' + whiteboard.id} className="text-title">
                        {whiteboard.title.length > 25 ? whiteboard.title.slice(0, 25) + " ..." : whiteboard.title}
                    </Link>
                </h4>
                {whiteboard.description && (
                    <p className="font-13 my-3">
                        { isReadMore ? 
                            whiteboard.description.slice(0, 35) :
                        whiteboard.description }
                        { whiteboard.description.length > 35 ?
                            (<span onClick={toggleReadMore} className="fw-bold text-info" role="button">
                                { isReadMore ? " ...read more" : " show less" }
                            </span>) : ""
                        }
                    </p>
                )}
                <div>
                    <span className="font-13">Author: </span>
                    <OverlayTrigger
                        placement={'bottom'}
                        overlay={
                            <Tooltip>{whiteboard.author}</Tooltip>
                        }
                    >
                        <img src={whiteboard.authorProfileImageUrl} className="rounded-circle avatar-xs" alt={whiteboard.author} />
                    </OverlayTrigger>
                </div>
                <p className="text-muted text-end font-12 mt-3 mb-1">
                    Last modified: {convertDatetime(whiteboard.lastModifiedDate)}
                </p>
            </Card.Body>
        </Card>
    );
}

const Dashboard = () => {
    const [whiteboards, setWhiteboards] = useState<Whiteboard[]>([]);
    const [whiteboardLoading, setWhiteboardLoading] = useState<Boolean>(true);
    const [isCreateWhiteboardOpen, toggleCreateWhiteboard] = useToggle();
    const { isOpen: isRecordOpen, size, className, scroll, toggleModal: toggleRecord, openModalWithClass } =
        useModal();
    const [dailyStandups, setDailyStandups] = useState<DailyStandup[]>([]);
    const [dailyStandupLoading, setDailyStandupLoading] = useState<Boolean>(true);
    
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
        let dailyStandups: DailyStandup[] = [];
        axios.get(config.API_URL+"/api/v1/records?scope=team&pageIndex=0&topId=0", { headers: { Authorization: 'Bearer ' + user.token }})
        .then(res => {
            // res.data.records.filter(record => record.type === "daily standups")
            for (const record of res.data.records) {
                if (dailyStandups.at(-1)?.author === record.author.fullname
                && dailyStandups.at(-1)?.title.slice(0, 13) === record.title.slice(0, 13)) {
                    if (record.title.slice(-6) === "screen") {
                        dailyStandups.at(-1)!.screenRecordFileUrl = record.recordFileUrl;
                    } else {
                        dailyStandups.at(-1)!.camRecordFileUrl = record.recordFileUrl;
                    }
                } else {
                    if (record.title.slice(-6) === "screen") {
                        dailyStandups.push({
                            id: record.id,
                            author: record.author.fullname,
                            title: record.title,
                            profileImageUrl: record.author.profileImageUrl,
                            createdDate: record.createdDate,
                            camRecordFileUrl: "",
                            screenRecordFileUrl: record.recordFileUrl,
                            seen: false,
                        });
                    } else {
                        dailyStandups.push({
                            id: record.id,
                            author: record.author.fullname,
                            title: record.title,
                            profileImageUrl: record.author.profileImageUrl,
                            createdDate: record.createdDate,
                            camRecordFileUrl: record.recordFileUrl,
                            screenRecordFileUrl: "",
                            seen: false,
                        });
                    }
                }
            }
            setDailyStandups(dailyStandups);
            setDailyStandupLoading(false);
        });
    }, []);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
        let whiteboards: Whiteboard[] = [];
        axios.get(config.API_URL+"/api/v1/whiteboards?scope=team&pageIndex=0&topId=0", { headers: { Authorization: 'Bearer ' + user.token }})
        .then(res => {
            // res.data.records.filter(record => record.type === "daily standups")
            for (const whiteboard of res.data.whiteboards) {
                whiteboards.push({
                    id: whiteboard.id,
                    title: whiteboard.title,
                    description: whiteboard.description,
                    createdDate: whiteboard.createdDate,
                    lastModifiedDate: whiteboard.lastModifiedDate,
                    scope: whiteboard.scope,
                    author: whiteboard.author.fullname,
                    authorProfileImageUrl: whiteboard.author.profileImageUrl,
                    whiteboardFileUrl: whiteboard.whiteboardFileUrl,
                });
            }
            setWhiteboards(whiteboards);
            setWhiteboardLoading(false);
        });
    }, []);

    return(
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Daily Standups</h4>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                <Button onClick={() => {openModalWithClass('modal-full-width')}}><i className="mdi mdi-plus"></i> Record</Button>
                    <Modal show={isRecordOpen} onHide={toggleRecord} dialogClassName={className} size={size} scrollable={scroll}>
                        <Modal.Body>
                            <Modal.Header onHide={toggleRecord} closeButton>
                                <h4 className="modal-title">Record</h4>
                            </Modal.Header>
                            <VideoRecorder />
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
            <Row>
                {!dailyStandupLoading && 
                <Carousel 
                additionalTransfrom={0}
                arrows
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 6,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
            >
                    {dailyStandups.map((dailyStandup: DailyStandup, i: number) => {
                        return (
                        <div>
                            <DailyStandupCard dailyStandup={dailyStandup} />
                        </div>
                        );
                    })}
                </Carousel>
                }
            </Row>
            <hr />
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
                    <Button onClick={toggleCreateWhiteboard}><i className="mdi mdi-plus"></i> Create Whiteboard</Button>
                    <Modal show={isCreateWhiteboardOpen} onHide={toggleCreateWhiteboard}>
                        <Modal.Body>
                            <Modal.Header onHide={toggleCreateWhiteboard} closeButton>
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
                                        maxLength={255}
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
                                        maxLength={255}
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
            {!whiteboardLoading && 
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