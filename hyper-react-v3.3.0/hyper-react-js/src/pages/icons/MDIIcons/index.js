// @flow
import classNames from 'classnames';
import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';

// component
import PageTitle from '../../../components/PageTitle';

// data
import { MDIICONS_LIST } from './data';

const MDIIcons = (): React$Element<React$FragmentType> => {
    const newIcons = MDIICONS_LIST.filter((icon) => icon.version === '6.5.95');
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/ui/icons/mdi' },
                    { label: 'Mdi Icons', path: '/ui/icons/mdi', active: true },
                ]}
                title={'Material Design Icons'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">
                                New Icons{' '}
                                <Badge bg="" className="badge-danger-lighten">
                                    6.5.95
                                </Badge>
                            </h4>
                            <Row className="icons-list-demo">
                                {(newIcons || []).map((icon, index) => {
                                    return (
                                        <Col xl={3} lg={4} sm={6} key={index}>
                                            <i className={classNames('mdi mdi-' + icon.name)}></i>
                                            <span>mdi-{icon.name}</span>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">All Icons</h4>
                            <Row className="icons-list-demo">
                                {(MDIICONS_LIST || []).map((icon, index) => {
                                    return (
                                        <Col xl={3} lg={4} sm={6} key={index}>
                                            <i className={classNames('mdi mdi-' + icon.name)}></i>
                                            <span>mdi-{icon.name}</span>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Size</h4>
                            <Row className="icons-list-demo">
                                {[18, 24, 36, 48].map((size, index) => {
                                    return (
                                        <Col xl={3} lg={4} sm={6} key={index}>
                                            <i className={classNames('mdi mdi-' + size + 'px', 'mdi-account')}></i>
                                            <span>mdi-{size}px</span>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Rotate</h4>
                            <Row className="icons-list-demo">
                                {[45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
                                    return (
                                        <Col xl={3} lg={4} sm={6} key={index}>
                                            <i className={classNames('mdi mdi-rotate-' + angle, 'mdi-account')}></i>
                                            <span>mdi-rotate-{angle}</span>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default MDIIcons;
