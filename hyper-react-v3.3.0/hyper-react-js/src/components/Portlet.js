// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Card, Collapse } from 'react-bootstrap';

type PortletProps = {
    className?: string,
    children?: any,
};

type PortletState = {
    collapse?: boolean,
    loading?: boolean,
    hidden?: boolean,
};

/**
 * Portlet
 */
const Portlet = (props: PortletProps, state: PortletState): React$Element<any> => {
    const children = props.children || null;

    const [collapse, setCollapse] = useState(true);
    const [loading, setLoading] = useState(false);
    const [hidden, setHidden] = useState(false);

    /**
     * Toggle the body
     */
    const toggleContent = () => {
        setCollapse(!collapse);
    };

    /**
     * Reload the content
     */
    const reloadContent = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500 + 300 * (Math.random() * 5));
    };

    /**
     * remove the portlet
     */
    const remove = () => {
        setHidden(true);
    };

    return (
        <>
            {!hidden ? (
                <Card className={classNames(props.className)}>
                    {loading && (
                        <div className="card-disabled">
                            <div className="card-portlets-loader"></div>
                        </div>
                    )}

                    <Card.Body>
                        <div className="card-widgets">
                            <Link to="#" className={classNames(props.className)} onClick={reloadContent}>
                                <i className="mdi mdi-refresh"></i>
                            </Link>
                            <Link to="#" className={classNames(props.className)} onClick={toggleContent}>
                                <i
                                    className={classNames('mdi', {
                                        'mdi-minus': collapse,
                                        'mdi-plus': !collapse,
                                    })}></i>
                            </Link>
                            <Link to="#" className={classNames(props.className)} onClick={remove}>
                                <i className="mdi mdi-close"></i>
                            </Link>
                        </div>

                        <Card.Title tag="h5" className="mb-0">
                            Card title
                        </Card.Title>

                        <Collapse in={collapse} className="pt-3">
                            {children}
                        </Collapse>
                    </Card.Body>
                </Card>
            ) : null}
        </>
    );
};

export default Portlet;
