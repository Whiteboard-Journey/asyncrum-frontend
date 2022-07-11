// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Card,
    Dropdown,
    ButtonGroup,
    Button,
    Modal,
    ProgressBar,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// components
import PageTitle from '../../../components/PageTitle';
import { VerticalForm, FormInput } from '../../../components/';

// dummy data
import { emails } from './Data';

// images
import avatarImg from '../../../assets/images/users/avatar-2.jpg';

type LeftSideProps = {
    totalUnreadEmails: number,
    toggleComposeModal: () => void,
};

// left side panel
const LeftSide = (props: LeftSideProps) => {
    return (
        <>
            <div className="d-grid">
                <button type="button" className="btn btn-danger" onClick={props.toggleComposeModal}>
                    Compose
                </button>
            </div>

            <div className="email-menu-list mt-3">
                <Link to="/apps/email/inbox" className="text-danger fw-bold">
                    <i className="dripicons-inbox me-2"></i>Inbox
                    <span className="badge badge-danger-lighten float-end ms-2">{props.totalUnreadEmails}</span>
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-star me-2"></i>Starred
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-clock me-2"></i>Snoozed
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-document me-2"></i>Draft
                    <span className="badge badge-info-lighten float-end ms-2">32</span>
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-exit me-2"></i>Sent Mail
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-trash me-2"></i>Trash
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-tag me-2"></i>Important
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-warning me-2"></i>Spam
                </Link>
            </div>

            <div className="mt-4">
                <h6 className="text-uppercase">Labels</h6>
                <div className="email-menu-list labels-list mt-2">
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-info me-2"></i>Updates
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-warning me-2"></i>Friends
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-success me-2"></i>Family
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-primary me-2"></i>Social
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-danger me-2"></i>Important
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-secondary me-2"></i>
                        Promotions
                    </Link>
                </div>
            </div>

            <div className="mt-5">
                <h4>
                    <span className="badge rounded-pill p-1 px-2 badge-secondary-lighten ">FREE</span>
                </h4>
                <h6 className="text-uppercase mt-3">Storage</h6>
                <ProgressBar variant="success" now={46} className="my-2 progress-sm" />
                <p className="text-muted font-13 mb-0">7.02 GB (46%) of 15 GB used</p>
            </div>
        </>
    );
};

// EmailDetail
const EmailDetail = (): React$Element<React$FragmentType> => {
    const [totalUnreadEmails] = useState(emails.filter((e) => e.is_read === false).length);
    const [email] = useState({
        avatar: avatarImg,
        subject: 'Your elite author Graphic Optimization reward is ready!',
        from_name: 'Steven Smith',
        from_email: 'jonathan@domain.com',
        recieved_on: 'Jul 24, 2019, 5:17 AM',
        attachments: [
            { id: 1, name: 'Hyper-admin-design.zip', size: '2.3MB', ext: '.zip' },
            { id: 2, name: 'Dashboard-design.jpg', size: '0.3MB', ext: '.jpg' },
            { id: 3, name: 'Admin-bug-report.mp4', size: '4.1MB', ext: '.mp4' },
        ],
    });
    const [composeModal, setComposeModal] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const schemaResolver = yupResolver(
        yup.object().shape({
            to: yup.string().required('Please specify to email'),
            subject: yup.string().required('Please specify subject'),
        })
    );

    /**
     * Toggles the compose modal
     */
    const toggleComposeModal = () => {
        setComposeModal(!composeModal);
    };

    /**
     * Handles the save
     * @param {*} event
     * @param {*} values
     */
    const handleEmailSave = (event, values) => {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log({ ...values, body });
        toggleComposeModal();
    };

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates) => {
        setEditorState(editorStates);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Email', path: '/apps/email/details' },
                    { label: 'Email Read', path: '/apps/email/details', active: true },
                ]}
                title={'Email Read'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="page-aside-left">
                                <LeftSide
                                    totalUnreadEmails={totalUnreadEmails}
                                    toggleComposeModal={toggleComposeModal}
                                />
                            </div>

                            <div className="page-aside-right">
                                <ButtonGroup className="me-1 my-1">
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip>Archived</Tooltip>}>
                                        <Button variant="secondary">
                                            <i className="mdi mdi-archive font-16"></i>
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip>Spam</Tooltip>}>
                                        <Button variant="secondary">
                                            <i className="mdi mdi-alert-octagon font-16"></i>
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip>Delete</Tooltip>}>
                                        <Button variant="secondary">
                                            <i className="mdi mdi-delete-variant font-16"></i>
                                        </Button>
                                    </OverlayTrigger>
                                </ButtonGroup>

                                <ButtonGroup as={Dropdown} className="d-inline-block me-1 my-1">
                                    <Dropdown.Toggle variant="secondary" className="arrow-none">
                                        <i className="mdi mdi-folder font-16"></i>
                                        <i className="mdi mdi-chevron-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <span className="dropdown-header">Move to:</span>
                                        <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item>
                                    </Dropdown.Menu>
                                </ButtonGroup>

                                <ButtonGroup as={Dropdown} className="d-inline-block me-1 my-1">
                                    <Dropdown.Toggle variant="secondary" className="arrow-none">
                                        <i className="mdi mdi-label font-16"></i>
                                        <i className="mdi mdi-chevron-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <span className="dropdown-header">Label as:</span>
                                        <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item>
                                    </Dropdown.Menu>
                                </ButtonGroup>

                                <ButtonGroup as={Dropdown} className="d-inline-block me-1 my-1">
                                    <Dropdown.Toggle variant="secondary" className="arrow-none">
                                        <i className="mdi mdi-dots-horizontal font-16"></i> More
                                        <i className="mdi mdi-chevron-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <span className="dropdown-header">More Options :</span>
                                        <Dropdown.Item>Mark as Unread</Dropdown.Item>
                                        <Dropdown.Item>Add to Tasks</Dropdown.Item>
                                        <Dropdown.Item>Add Star</Dropdown.Item>
                                        <Dropdown.Item>Mute</Dropdown.Item>
                                    </Dropdown.Menu>
                                </ButtonGroup>

                                <div className="mt-3">
                                    <h5 className="font-18">Your elite author Graphic Optimization reward is ready!</h5>
                                    <hr />

                                    <div className="d-flex mb-3 mt-1">
                                        <img
                                            className="d-flex me-2 rounded-circle"
                                            src={email.avatar}
                                            alt={email.from_name}
                                            height="32"
                                        />
                                        <div className="w-100 overflow-hidden">
                                            <small className="float-end">{email.recieved_on}</small>
                                            <h6 className="m-0 font-14">{email.from_name}</h6>
                                            <small className="text-muted">From: {email.from_email}</small>
                                        </div>
                                    </div>

                                    <p>Hi Coderthemes!</p>
                                    <p>
                                        Clicking ‘Order Service’ on the right-hand side of the above page will present
                                        you with an order page. This service has the following Briefing Guidelines that
                                        will need to be filled before placing your order:
                                    </p>

                                    <ol>
                                        <li>Your design preferences (Color, style, shapes, Fonts, others) </li>
                                        <li>Tell me, why is your item different? </li>
                                        <li>
                                            Do you want to bring up a specific feature of your item? If yes, please tell
                                            me{' '}
                                        </li>
                                        <li>
                                            Do you have any preference or specific thing you would like to change or
                                            improve on your item page?{' '}
                                        </li>
                                        <li>
                                            Do you want to include your item's or your provider's logo on the page? if
                                            yes, please send it to me in vector format (Ai or EPS){' '}
                                        </li>
                                        <li>Please provide me with the copy or text to display</li>
                                    </ol>

                                    <p>
                                        Filling in this form with the above information will ensure that they will be
                                        able to start work quickly.
                                    </p>
                                    <p>
                                        You can complete your order by putting your coupon code into the Promotional
                                        code box and clicking ‘Apply Coupon’.
                                    </p>
                                    <p>
                                        <b>Best,</b> <br /> Graphic Studio
                                    </p>
                                    <hr />

                                    <h5 className="mb-3">Attachments</h5>
                                    <Row>
                                        {email.attachments.map((f, idx) => {
                                            return (
                                                <Col xl={4} key={idx}>
                                                    <Card className="mb-1 shadow-none border">
                                                        <div className="p-2">
                                                            <Row className="align-items-center">
                                                                <Col className="col-auto">
                                                                    <div className="avatar-sm">
                                                                        <span className="avatar-title bg-primary-lighten text-primary rounded">
                                                                            {f.ext}
                                                                        </span>
                                                                    </div>
                                                                </Col>
                                                                <Col className="col ps-0">
                                                                    <Link
                                                                        to="#"
                                                                        className="text-muted font-weight-bold">
                                                                        {f.name}
                                                                    </Link>
                                                                    <p className="mb-0">{f.size}</p>
                                                                </Col>
                                                                <Col className="col-auto">
                                                                    <Link
                                                                        to="#"
                                                                        className="btn btn-link btn-lg text-muted">
                                                                        <i className="dripicons-download"></i>
                                                                    </Link>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            );
                                        })}
                                    </Row>

                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-secondary me-2">
                                            <i className="mdi mdi-reply me-1"></i> Reply
                                        </Link>
                                        <Link to="#" className="btn btn-light">
                                            Forward <i className="mdi mdi-forward ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* compose email modal */}
            <Modal show={composeModal} onHide={toggleComposeModal}>
                <Modal.Header closeButton onHide={toggleComposeModal} className="modal-colored-header bg-primary">
                    <Modal.Title className="m-0">New Message</Modal.Title>
                </Modal.Header>
                <div className="p-1">
                    <Modal.Body className="px-3 pt-3 pb-0">
                        <VerticalForm onSubmit={handleEmailSave} resolver={schemaResolver}>
                            <FormInput
                                label="To"
                                type="email"
                                name="to"
                                placeholder="example@email.com"
                                containerClass={'mb-2'}
                            />
                            <FormInput
                                label="Subject"
                                type="text"
                                name="subject"
                                placeholder="Your subject"
                                containerClass={'mb-2'}
                            />
                            <Row className="mb-3">
                                <Col>
                                    <label className="form-label">Message</label>
                                    <Editor
                                        editorState={editorState}
                                        onEditorStateChange={onEditorStateChange}
                                        toolbarClassName="draft-toolbar"
                                        wrapperClassName="react-draft-wrapper  border border-1 rounded-1"
                                        editorStyle={{ minHeight: '200px' }}
                                        toolbar={{
                                            options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link'],
                                            inline: { inDropdown: true },
                                            list: { inDropdown: true },
                                            textAlign: { inDropdown: true },
                                            link: { inDropdown: true },
                                        }}
                                    />
                                </Col>
                            </Row>
                            <div className="pb-3">
                                <Button variant="primary" type="submit" className="me-1">
                                    <i className="mdi mdi-send me-1"></i> Send Message
                                </Button>
                                <Button variant="light" onClick={toggleComposeModal}>
                                    Cancel
                                </Button>
                            </div>
                        </VerticalForm>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};

export default EmailDetail;
