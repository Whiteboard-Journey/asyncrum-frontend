// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

type StatisticsWidgetProps = {
    textClass?: string,
    bgclassName?: string,
    icon?: string,
    title: string,
    description: string,
    stats?: string,
    trend: {
        textClass?: string,
        icon?: string,
        value?: string,
        time?: string,
    },
};

/**
 * Statistics widget
 */
const StatisticsWidget = (props: StatisticsWidgetProps): React$Element<any> => {
    const textClass = props.textClass || 'text-muted';

    return (
        <Card className={classNames('widget-flat', props.bgclassName)}>
            <Card.Body>
                {props.icon && (
                    <div className="float-end">
                        <i className={classNames(props.icon, 'widget-icon')}></i>
                    </div>
                )}
                <h5 className={classNames('fw-normal', 'mt-0', textClass)} title={props.description}>
                    {props.title}
                </h5>
                <h3 className={classNames('mt-3', 'mb-3', props.textClass ? props.textClass : null)}>{props.stats}</h3>

                {props.trend && (
                    <p className={classNames('mb-0', textClass)}>
                        <span className={classNames(props.trend.textClass, 'me-2')}>
                            <i className={classNames(props.trend.icon)}></i> {props.trend.value}
                        </span>
                        <span className="text-nowrap">{props.trend.time}</span>
                    </p>
                )}
            </Card.Body>
        </Card>
    );
};

export default StatisticsWidget;
