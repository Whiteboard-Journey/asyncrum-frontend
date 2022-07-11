import React from 'react';
import { Card } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import { useChatList } from './hooks';
import ChatForm from './ChatForm';
import { CardTitle } from 'components';

export type Message = {
    id: number;
    userPic?: string;
    userName: string;
    text: string;
    postedOn: string;
};

/* Chat Item */
const ChatItemAvatar = ({ userAvatar, postedOn }: { userAvatar: string; postedOn: string }) => {
    return (
        <div className="chat-avatar">
            <img src={userAvatar} alt={userAvatar} />
            <i>{postedOn}</i>
        </div>
    );
};

const ChatItemText = ({ userName, text }: { userName: string; text: string }) => {
    return (
        <div className="conversation-text">
            <div className="ctext-wrap">
                <i>{userName}</i>
                <p>{text}</p>
            </div>
        </div>
    );
};

const ChatItem = ({
    children,
    placement,
    className,
}: {
    children: React.ReactNode;
    placement: string;
    className?: string;
}) => {
    return <li className={classNames('clearfix', { odd: placement === 'left' }, className)}>{children}</li>;
};

/**
 * ChatList
 */
type ChatListProps = {
    className?: string;
    chatMessages: Message[];
};

const ChatList = ({ chatMessages, className }: ChatListProps) => {
    const { messages, handleNewMessagePosted } = useChatList(chatMessages);

    return (
        <Card className="mb-0">
            <Card.Body className="p-0">
                <div className="px-3 pt-3">
                    <CardTitle
                        containerClass="d-flex align-items-center justify-content-between mb-2"
                        title="Chat"
                        menuItems={[{ label: 'Refresh' }, { label: 'Settings' }]}
                    />
                </div>

                <div className="chat-conversation">
                    {/* chat messages */}
                    <SimpleBar style={{ maxHeight: '322px', width: '100%' }}>
                        <ul className={classNames('conversation-list', className, 'px-3')}>
                            {(messages || []).map((message, index) => {
                                return (
                                    <ChatItem
                                        key={index.toString()}
                                        placement={index > 0 ? (index % 2 === 0 ? '' : 'left') : 'right'}
                                    >
                                        {message.userPic && (
                                            <ChatItemAvatar userAvatar={message.userPic} postedOn={message.postedOn} />
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
    );
};

export { ChatList };
