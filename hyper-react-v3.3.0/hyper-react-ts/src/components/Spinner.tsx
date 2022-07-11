import React from 'react';
import classNames from 'classnames';

type SpinnerProps = {
    tag?: React.ElementType;
    className?: string;
    size?: 'lg' | 'md' | 'sm';
    type?: 'bordered' | 'grow';
    color?: string;
    children?: React.ReactNode;
};

const Spinner = ({ tag = 'div', type = 'bordered', className, color, size, children }: SpinnerProps) => {
    const Tag: React.ElementType = tag || 'div';

    return (
        <Tag
            role="status"
            className={classNames(
                {
                    'spinner-border': type === 'bordered',
                    'spinner-grow': type === 'grow',
                },
                color ? `text-${color}` : `text-secondary`,
                { [`avatar-${size}`]: size },
                className
            )}
        >
            {children}
        </Tag>
    );
};

export default Spinner;
