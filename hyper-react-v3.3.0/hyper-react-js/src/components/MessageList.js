// @flow
import React from 'react';
import classNames from 'classnames';

type MessageListProps = {
    tag: string,
    className?: string,
    children?: Object,
};

/**
 * MessageList
 */
const MessageList = (props: MessageListProps): React$Element<any> => {
    const children = props.children || null;
    const Tag = props.tag;

    return (
        <Tag className={classNames('inbox-widget', props.className)} {...props}>
            {children}
        </Tag>
    );
};

MessageList.defaultProps = {
    tag: 'div',
};

export default MessageList;
