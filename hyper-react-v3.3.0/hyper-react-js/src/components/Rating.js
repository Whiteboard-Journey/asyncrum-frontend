// @flow
import React from 'react';
import classNames from 'classnames';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type RatingProps = {
    tag: string,
    className?: string,
    value?: number,
};

/**
 * Rating
 */
const Rating = (props: RatingProps): React$Element<any> => {
    const rating = Math.floor(props.value || 0);
    const emptyStars = Math.floor(rating < 5 ? 5 - rating : 0);
    const Tag = props.tag;

    return (
        <>
            <Tag className={classNames('font-16', props.className)} {...props} id="rating-container">
                {[...Array(rating)].map((x, i) => (
                    <OverlayTrigger
                        key={i}
                        placement="right"
                        overlay={<Tooltip id="button-tooltip">{props.value || 0}</Tooltip>}>
                        <span className="text-warning mdi mdi-star"></span>
                    </OverlayTrigger>
                ))}
                {[...Array(emptyStars)].map((x, i) => (
                    <OverlayTrigger
                        key={i}
                        placement="right"
                        overlay={<Tooltip id="button-tooltip">{props.value || 0}</Tooltip>}>
                        <span className="text-warning mdi mdi-star-outline"></span>
                    </OverlayTrigger>
                ))}
            </Tag>
        </>
    );
};

Rating.defaultProps = {
    tag: 'p',
};

export default Rating;
