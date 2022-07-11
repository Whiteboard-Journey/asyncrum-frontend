import React from 'react';
import classNames from 'classnames';

type TimelineProps = {
    tag?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

const TimelineItem = ({ className, children, tag = 'div' }: TimelineProps) => {
    const Tag: React.ElementType = tag;

    return <Tag className={classNames('timeline-item', className)}>{children}</Tag>;
};

export default TimelineItem;
