import React from 'react';
import classNames from 'classnames';

type TimelineProps = {
    tag?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

const Timeline = ({ className, children, tag = 'div' }: TimelineProps) => {
    const Tag: React.ElementType = tag;

    return <Tag className={classNames('timeline-alt', 'py-0', className)}>{children}</Tag>;
};

export default Timeline;
