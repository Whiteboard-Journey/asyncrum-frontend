import { Link } from 'react-router-dom';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import SimpleBar from 'simplebar-react';
import { FormInput, Loader } from 'components';
import { ChatMessage, ChatUser } from './types';
import { useChatArea } from './hooks';

type UserMessageProps = {
    message: ChatMessage;
    toUser: ChatUser;
};

const UserMessage = ({ message, toUser }: UserMessageProps) => {
    return (
        <li className={classnames('clearfix', { odd: message.from.id === toUser.id })}>
            <div className="chat-avatar">
                <img src={message.from.avatar} className="rounded" alt="" />
                <i>{message.sendOn}</i>
            </div>

            <div className="conversation-text">
                <div className="ctext-wrap">
                    <i>{message.from.name}</i>
                    {message.message.type === 'text' && <p>{message.message.value.text}</p>}
                </div>
                {message.message.type === 'file' && (
                    <Card className="mt-2 mb-1 shadow-none border text-start">
                        <div className="p-2">
                            <Row className="align-items-center">
                                <Col className="col-auto">
                                    <div className="avatar-sm">
                                        <span className="avatar-title rounded">
                                            <i className="uil uil-file-upload-alt font-20"></i>
                                        </span>
                                    </div>
                                </Col>
                                <Col className="ps-0">
                                    <Link to="#" className="text-muted fw-bold">
                                        {message.message.value.file}
                                    </Link>
                                    <p className="mb-0">{message.message.value.size}</p>
                                </Col>
                                <Col className="col-auto">
                                    <Link to="#" className="btn btn-link btn-lg text-muted">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                )}
            </div>

            <Dropdown className="conversation-actions" align="end">
                <Dropdown.Toggle variant="link" className="btn btn-sm btn-link arrow-none shadow-none">
                    <i className="uil uil-ellipsis-v"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Copy Messaget</Dropdown.Item>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>
    );
};

type ChatAreaProps = {
    selectedUser: ChatUser;
};

const ChatArea = ({ selectedUser }: ChatAreaProps) => {
    const { loading, toUser, userMessages, handleSubmit, register, control, errors, sendChatMessage } =
        useChatArea(selectedUser);

    return (
        <Card>
            <Card.Body className="position-relative px-0 pb-0">
                {loading && <Loader />}

                <SimpleBar style={{ height: '538px', width: '100%' }}>
                    <ul className="conversation-list px-3">
                        {userMessages.map((message, index) => {
                            return <UserMessage key={index.toString()} message={message} toUser={toUser} />;
                        })}
                    </ul>
                </SimpleBar>

                <Row className="px-3 pb-3">
                    <Col>
                        <div className="mt-2 bg-light p-3 rounded">
                            <form noValidate name="chat-form" id="chat-form" onSubmit={handleSubmit(sendChatMessage)}>
                                <div className="row">
                                    <div className="col mb-2 mb-sm-0">
                                        <FormInput
                                            type="text"
                                            name="newMessage"
                                            className="border-0"
                                            placeholder="Enter your text"
                                            register={register}
                                            key="newMessage"
                                            errors={errors}
                                            control={control}
                                        />
                                    </div>
                                    <div className="col-sm-auto">
                                        <div className="btn-group">
                                            <Link to="#" className="btn btn-light">
                                                <i className="uil uil-paperclip"></i>
                                            </Link>
                                            <Link to="#" className="btn btn-light">
                                                {' '}
                                                <i className="uil uil-smile"></i>{' '}
                                            </Link>
                                            <button type="submit" className="btn btn-success chat-send btn-block">
                                                <i className="uil uil-message"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ChatArea;
