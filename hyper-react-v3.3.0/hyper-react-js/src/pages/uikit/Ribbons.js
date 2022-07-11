// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

const Ribbon1 = ({ label, color, direction }) => {
    return (
        <Card className="ribbon-box">
            <Card.Body>
                <div
                    className={classNames(
                        'ribbon',
                        'ribbon-' + color,
                        { 'bg-dark text-light': color === 'dark' },
                        direction === 'left' ? 'float-start' : 'float-end'
                    )}>
                    <i className="mdi mdi-access-point me-1"></i> {label}
                </div>
                <h5 className={classNames('text-' + color, 'mt-0', direction === 'left' ? 'float-end' : 'float-start')}>
                    {label} Header
                </h5>
                <div className="ribbon-content">
                    <p className="mb-0">
                        Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In
                        egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac,
                        commodo dapibus odio.
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
};

const Ribbon2 = ({ label, color }) => {
    return (
        <Card className="ribbon-box">
            <Card.Body>
                <div className={classNames('ribbon-two', 'ribbon-two-' + color)}>
                    <span className={classNames(color === 'dark' ? 'text-light bg-dark' : null)}>{label}</span>
                </div>
                <p className="mb-0">
                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In
                    egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                    dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie ullamcorper ornare.
                </p>
            </Card.Body>
        </Card>
    );
};

const Ribbons = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/ribbons' },
                    { label: 'Base UI', path: '/ui/ribbons' },
                    { label: 'Ribbons', path: '/ui/ribbons', active: true },
                ]}
                title={'Ribbons'}
            />

            <Row>
                <Col xxl={4} md={6}>
                    <Ribbon1 label="Primary" color="primary" direction="left" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon1 label="Success" color="success" direction="right" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon1 label="Info" color="info" direction="right" />
                </Col>
            </Row>

            <Row>
                <Col xxl={4} md={6}>
                    <Ribbon1 label="Warning" color="warning" direction="left" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon1 label="Danger" color="danger" direction="right" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon1 label="Dark" color="dark" direction="right" />
                </Col>
            </Row>

            <Row>
                <Col xxl={4} md={6}>
                    <Ribbon1 label="Secondary" color="secondary" direction="left" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon2 label="Primary" color="primary" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon2 label="Success" color="success" />
                </Col>
            </Row>

            <Row>
                <Col xxl={4} md={6}>
                    <Ribbon2 label="Info" color="info" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon2 label="Warning" color="warning" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon2 label="Dark" color="dark" />
                </Col>
            </Row>

            <Row>
                <Col xxl={4} md={6}>
                    <Ribbon2 label="Danger" color="danger" />
                </Col>
                <Col xxl={4} md={6}>
                    <Ribbon2 label="Secondary" color="secondary" />
                </Col>
            </Row>
        </>
    );
};

export default Ribbons;
