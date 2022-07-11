// @flow
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//components
import { FormInput } from '../components/';

/* Chat Item Avatar */
const ChatItemAvatar = ({ userAvatar, postedOn }) => {
    return (
        <>
            <div className="chat-avatar">
                <img src={userAvatar} alt={userAvatar} />
                <i>{postedOn}</i>
            </div>
        </>
    );
};

/* Chat Item Text */
const ChatItemText = ({ userName, text }) => {
    return (
        <>
            <div className="conversation-text">
                <div className="ctext-wrap">
                    <i>{userName}</i>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

/* Chat Item */
const chatItemDefaultProps = {
    placement: '',
    children: PropTypes.object,
    className: '',
};

const ChatItem = ({ children, placement, className }) => {
    return <li className={classNames('clearfix', { odd: placement === 'left' }, className)}>{children}</li>;
};

ChatItem.defaultProps = chatItemDefaultProps;

/**
 * ChatForm
 */

/**
 * Renders the ChatForm
 */
const ChatForm = (props) => {
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            newMessage: yup.string().required('Please enter your messsage'),
        })
    );

    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
    } = methods;

    /**
     * Handle valid form submission
     */
    const handleValidMessageSubmit = (event, values) => {
        const message = values.target[0].value;
        props.onNewMessagesPosted(message);
        reset();
    };

    return (
        <>
            <form
                name="chat-form"
                id="chat-form"
                onSubmit={handleSubmit(handleValidMessageSubmit)}
                className="needs-validation m-3">
                <Row>
                    <Col>
                        <FormInput
                            type="text"
                            name="newMessage"
                            className="form-control chat-input"
                            placeholder="Enter your text"
                            register={register}
                            key="newMessage"
                            errors={errors}
                            control={control}
                        />
                    </Col>
                    <Col className="col-auto">
                        <button type="submit" className="btn btn-danger chat-send waves-effect waves-light">
                            Send
                        </button>
                    </Col>
                </Row>
            </form>
        </>
    );
};

/**
 * ChatList
 */

type MessageItem = {
    id: number,
    userPic?: string,
    userName: string,
    text: string,
    postedOn: string,
};

type ChatListProps = {
    className?: string,
    messages: Array<MessageItem>,
};

type ChatListState = {
    messages: Array<MessageItem>,
};

/**
 * Renders the ChatList
 */
const ChatList = (props: ChatListProps, state: ChatListState): React$Element<any> => {
    const [messages, setMessages] = useState(props.messages);

    /**
     * Handle new message posted
     */
    const handleNewMessagePosted = (message: string) => {
        // save new message
        setMessages(
            messages.concat({
                id: messages.length + 1,
                userName: 'Geneva',
                text: message,
                postedOn: '10:00',
            })
        );
    };

    return (
        <>
            <Card className="mb-0">
                <Card.Body className="p-0">
                    <div className="px-3 pt-3">
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                                <i className="mdi mdi-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Refresh</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <h4 className="header-title mb-3">Chat</h4>
                    </div>

                    <div className="chat-conversation">
                        {/* chat messages */}
                        <SimpleBar style={{ maxHeight: '350px', width: '100%' }}>
                            <ul className={classNames('conversation-list', props.className, 'px-3')}>
                                {messages.map((message, i) => {
                                    return (
                                        <ChatItem key={i} placement={i > 0 ? (i % 2 === 0 ? '' : 'left') : 'right'}>
                                            {message.userPic && (
                                                <ChatItemAvatar
                                                    userAvatar={message.userPic}
                                                    postedOn={message.postedOn}
                                                />
                                            )}
                                            <ChatItemText userName={message.userName} text={message.text} />
                                        </ChatItem>
                                    );
                                })}
                            </ul>
                        </SimpleBar>

                        {/* chat form */}
                        <ChatForm onNewMessagesPosted={handleNewMessagePosted} />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ChatList;
