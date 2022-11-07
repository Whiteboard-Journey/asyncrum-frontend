import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import { useChatList } from './hooks';
import { useMoment } from '../../pages/docs/hooks';
import ChatForm from './ChatForm';
import { CardTitle } from 'components';
import type { Comment } from '../VideoPlayer/Comment';

export type Message = {
  id: number;
  userPic?: string;
  userName: string;
  text: string;
  postedOn: string;
};

/* Chat Item */
const ChatItemAvatar = ({ userAvatar, postedOn }: { userAvatar: string; postedOn: string }) => {
  const { getTimeFromNow } = useMoment();

  return (
    <div className="chat-avatar">
      <img src={userAvatar} alt={userAvatar} />
      <i>{getTimeFromNow(postedOn)}</i>
    </div>
  );
};

const ChatItemVideo = ({
  userName,
  videoUrl,
  index,
  playIndex,
  onEnded,
}: {
  userName: string;
  videoUrl: string;
  index: number;
  playIndex: number;
  onEnded: (index: number) => void;
}) => {
  return (
    <div className="conversation-text">
      <div className="ctext-wrap">
        <i>{userName}</i>
        <video
          src={videoUrl}
          autoPlay={playIndex === index ? true : false}
          width="200px"
          height="150px"
          onEnded={() => onEnded(index + 1)}
          controls={true}
        />
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
  chatMessages: Comment[];
};

const ChatList = ({ chatMessages, className }: ChatListProps) => {
  const { messages } = useChatList(chatMessages);
  const [playIndex, setPlayIndex] = useState<number>(0);

  const playNextVideo = (index: number) => {
    setPlayIndex(index);
  };

  return (
    <Card className="mb-0 bg-transparent">
      <Card.Body className="p-0">
        <div className="px-3 pt-3">
          <CardTitle
            containerClass="d-flex align-items-center justify-content-between mb-2"
            title="Thread"
            menuItems={[{ label: 'Refresh' }, { label: 'Settings' }]}
          />
        </div>

        <div className="chat-conversation">
          {/* chat messages */}
          <SimpleBar style={{ maxHeight: '322px', width: '100%' }}>
            <ul className={classNames('conversation-list', className, 'px-3')}>
              {(messages || []).map((message, index) => {
                return (
                  <ChatItem key={index.toString()} placement={index > 0 ? (index % 2 === 0 ? '' : 'left') : 'right'}>
                    {message.profileImageUrl && (
                      <ChatItemAvatar userAvatar={message.profileImageUrl} postedOn={message.createdDate} />
                    )}
                    <ChatItemVideo
                      key={playIndex}
                      userName={message.author}
                      videoUrl={message.commentFileUrl}
                      index={index}
                      playIndex={playIndex}
                      onEnded={playNextVideo}
                    />
                  </ChatItem>
                );
              })}
            </ul>
          </SimpleBar>

          {/* chat form */}
          <ChatForm />
        </div>
      </Card.Body>
    </Card>
  );
};

export { ChatList };
