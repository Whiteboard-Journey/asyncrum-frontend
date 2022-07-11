import React from 'react';
import classNames from 'classnames';

type MessageListProps = {
    className?: string;
    children: React.ReactNode;
};

/**
 * MessageList
 */
const MessageList = ({ className, children }: MessageListProps) => {
    return <div className={classNames('inbox-widget', className)}>{children}</div>;
};

export default MessageList;
