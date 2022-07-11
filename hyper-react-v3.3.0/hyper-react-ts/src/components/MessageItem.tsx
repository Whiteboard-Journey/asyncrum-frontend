import React from 'react';
import classNames from 'classnames';

type MessageItemProps = {
    className?: string;
    children: React.ReactNode;
};

const MessageItem = ({ className, children }: MessageItemProps) => {
    return <div className={classNames('inbox-item', className)}>{children}</div>;
};

export default MessageItem;
