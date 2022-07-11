// @flow
import React from 'react';
import classNames from 'classnames';

type TimelineProps = {
    tag: string,
    className?: string,
    children?: any,
};

/**
 * TimelineItem
 */
const TimelineItem = (props: TimelineProps): React$Element<any> => {
    const children = props.children || null;
    const Tag = props.tag;

    return (
        <Tag className={classNames('timeline-item', props.className)} {...props}>
            {children}
        </Tag>
    );
};

TimelineItem.defaultProps = {
    tag: 'div',
};

export default TimelineItem;
