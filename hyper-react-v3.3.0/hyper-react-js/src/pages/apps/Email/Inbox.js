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
import classNames from 'classnames';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import PageTitle from '../../../components/PageTitle';
import { VerticalForm, FormInput } from '../../../components/';

// dafault data
import { emails as mails } from './Data';

// left side panel
const LeftSide = (props) => {
    return (
        <>
            <div className="d-grid">
                <button type="button" className="btn btn-danger" onClick={props.toggleComposeModal}>
                    Compose
                </button>
            </div>

            <div className="email-menu-list mt-3">
                <Link to="/apps/email/inbox" className="text-danger fw-bold" onClick={props.showAllEmails}>
                    <i className="dripicons-inbox me-2"></i>Inbox
                    <span className="badge badge-danger-lighten float-end ms-2">{props.totalUnreadEmails}</span>
                </Link>
                <Link to="/apps/email/inbox" onClick={props.showStarredEmails}>
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
                    <span className="badge rounded-pill p-1 px-2 badge-secondary-lighten">FREE</span>
                </h4>
                <h6 className="text-uppercase mt-3">Storage</h6>
                <ProgressBar variant="success" now={46} className="my-2 progress-sm" />
                <p className="text-muted font-13 mb-0">7.02 GB (46%) of 15 GB used</p>
            </div>
        </>
    );
};

// emails list
const EmailsList = (props) => {
    const emails = props.emails || [];

    return (
        <>
            <ul className="email-list">
                {emails.map((email, idx) => {
                    return (
                        <li className={classNames({ unread: !email.is_read })} key={idx}>
                            <div className="email-sender-info">
                                <div className="checkbox-wrapper-mail">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id={'mail' + email.id} />
                                        <label className="form-check-label" htmlFor={'mail' + email.id}></label>
                                    </div>
                                </div>
                                <span
                                    className={classNames('star-toggle', 'mdi', 'mdi-star-outline', {
                                        'text-warning': email.is_important,
                                    })}></span>
                                <Link to="/apps/email/details" className="email-title">
                                    {email.from_name}
                                    {email.number_of_reply > 1 && <span> ({email.number_of_reply})</span>}
                                </Link>
                            </div>
                            <div className="email-content">
                                <Link to="/apps/email/details" className="email-subject">
                                    {email.subject}
                                </Link>
                                <div className="email-date">{email.time}</div>
                            </div>
                            <div className="email-action-icons">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="mdi mdi-archive email-action-icons-item"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="mdi mdi-delete email-action-icons-item"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="mdi mdi-email-open email-action-icons-item"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="mdi mdi-clock email-action-icons-item"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

// Inbox
const Inbox = (): React$Element<React$FragmentType> => {
    const [emails, setEmails] = useState(mails.slice(0, 20));
    const [totalEmails] = useState(mails.length);
    const [pageSize] = useState(20);
    const [page, setPage] = useState(1);
    const [startIndex, setStartIndex] = useState(1);
    const [endIndex, setEndIndex] = useState(20);
    const [totalPages] = useState(mails.length / 20);
    const [totalUnreadEmails] = useState(mails.filter((e) => e.is_read === false).length);
    const [composeModal, setComposeModal] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    /*
     * form validation schema
     */
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
     * Gets the next page
     */
    const getNextPage = () => {
        var nextPage = page + 1;
        if (nextPage > totalEmails / pageSize) {
            nextPage = totalEmails / pageSize;
        }
        var startIdx = nextPage * pageSize - pageSize + 1;
        var endIdx = nextPage * pageSize;
        setPage(nextPage);
        setStartIndex(startIdx);
        setEndIndex(endIdx);
        setEmails(mails.slice(startIdx, endIdx));
    };

    /**
     * Gets the prev page
     */
    const getPrevPage = () => {
        var prevPage = page - 1;
        if (prevPage === 0) prevPage = 1;
        var startIdx = prevPage * pageSize - pageSize + 1;
        var endIdx = prevPage * pageSize;
        setPage(prevPage);
        setStartIndex(startIdx);
        setEndIndex(endIndex);
        setEmails(mails.slice(startIdx, endIdx));
    };

    /**
     * Shows the starred emails only
     */
    const showAllEmails = () => {
        setEmails(mails.slice(0, 20));
    };

    /**
     * Shows the starred emails only
     */
    const showStarredEmails = () => {
        setEmails(mails.filter((e) => e.is_important).slice(0, 20));
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
                    { label: 'Email', path: '/apps/email/inbox' },
                    { label: 'Inbox', path: '/apps/email/inbox', active: true },
                ]}
                title={'Inbox'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="page-aside-left">
                                <LeftSide
                                    totalUnreadEmails={totalUnreadEmails}
                                    showAllEmails={showAllEmails}
                                    showStarredEmails={showStarredEmails}
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
                                    <OverlayTrigger key="bottm" placement="bottom" overlay={<Tooltip>Delete</Tooltip>}>
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
                                    <EmailsList emails={emails} />
                                </div>

                                <Row>
                                    <Col sm={7} className="mt-1">
                                        Showing {startIndex} - {endIndex} of {totalEmails}
                                    </Col>
                                    <Col sm={5}>
                                        <ButtonGroup className="float-end">
                                            {page === 1 ? (
                                                <Button variant="light" className="btn-sm" disabled>
                                                    <i className="mdi mdi-chevron-left"></i>
                                                </Button>
                                            ) : (
                                                <Button variant="info" className="btn-sm" onClick={getPrevPage}>
                                                    <i className="mdi mdi-chevron-left"></i>
                                                </Button>
                                            )}

                                            {page < totalPages ? (
                                                <Button variant="info" className="btn-sm" onClick={getNextPage}>
                                                    <i className="mdi mdi-chevron-right"></i>
                                                </Button>
                                            ) : (
                                                <Button variant="light" className="btn-sm" disabled>
                                                    <i className="mdi mdi-chevron-right"></i>
                                                </Button>
                                            )}
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
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
                                        wrapperClassName="react-draft-wrapper border border-1 rounded-1"
                                        editorStyle={{ minHeight: '150px' }}
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

export default Inbox;
