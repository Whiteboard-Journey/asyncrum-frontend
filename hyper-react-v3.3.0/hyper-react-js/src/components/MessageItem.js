// @flow
import React from 'react';
import classNames from 'classnames';

type MessageItemProps = {
    tag: string,
    className?: string,
    children?: Object,
};

/**
 * MessageItem
 */
const MessageItem = (props: MessageItemProps): React$Element<any> => {
    const children = props.children || null;
    const Tag = props.tag;

    return (
        <Tag className={classNames('inbox-item', props.className)} {...props}>
            {children}
        </Tag>
    );
};

MessageItem.defaultProps = {
    tag: 'div',
};

export default MessageItem;
