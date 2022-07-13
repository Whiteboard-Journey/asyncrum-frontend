import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Card, Collapse } from 'react-bootstrap';
import { useToggle } from 'hooks';
import usePortlet from './usePortlet';

type PortletProps = {
    className?: string;
    children: React.ReactElement;
};

const Portlet = ({ className, children }: PortletProps) => {
    const [collapse, toggleContent] = useToggle(true);
    const [isHidden, , remove] = useToggle();

    const [loading, reloadContent] = usePortlet();
    return (
        <>
            {!isHidden ? (
                <Card className={classNames(className)}>
                    {loading && (
                        <div className="card-disabled">
                            <div className="card-portlets-loader"></div>
                        </div>
                    )}

                    <Card.Body>
                        <div className="card-widgets">
                            <Link to="#" className={classNames(className)} onClick={reloadContent}>
                                <i className="mdi mdi-refresh"></i>
                            </Link>
                            <Link to="#" className={classNames(className)} onClick={toggleContent}>
                                <i
                                    className={classNames('mdi', {
                                        'mdi-minus': collapse,
                                        'mdi-plus': !collapse,
                                    })}
                                ></i>
                            </Link>
                            <Link to="#" className={classNames(className)} onClick={remove}>
                                <i className="mdi mdi-close"></i>
                            </Link>
                        </div>

                        <Card.Title as="h5" className="mb-0">
                            Card title
                        </Card.Title>

                        <Collapse in={collapse}>
                            <div>
                                <div className="pt-3">{children}</div>
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            ) : null}
        </>
    );
};

export default Portlet;
