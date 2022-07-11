// @flow
import React from 'react';
import { Row, Col, Card, Breadcrumb } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const Example = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Example</h4>
                    <p className="text-muted font-14">
                        Indicate the current page’s location within a navigational hierarchy that automatically adds
                        separators via CSS. Please read the official{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Bootstrap
                        </a>{' '}
                        documentation for more options.
                    </p>

                    <Breadcrumb>
                        <Breadcrumb.Item active>Home</Breadcrumb.Item>
                    </Breadcrumb>

                    <Breadcrumb>
                        <Breadcrumb.Item href="/ui/breadcrumb">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Library</Breadcrumb.Item>
                    </Breadcrumb>

                    <Breadcrumb>
                        <Breadcrumb.Item href="/ui/breadcrumb">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/ui/breadcrumb">Library</Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </Card.Body>
            </Card>
        </>
    );
};

const WithIcons = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">With Icons</h4>
                    <p className="text-muted font-14">
                        Optionally you can also specify the icon with your breadcrumb item.
                    </p>

                    <Breadcrumb className="bg-light-lighten ps-2">
                        <Breadcrumb.Item active>
                            <i className="uil-home-alt"></i> Home
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <Breadcrumb className="bg-light-lighten ps-2">
                        <Breadcrumb.Item href="/ui/breadcrumb">
                            <i className="uil-home-alt"></i> Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Library</Breadcrumb.Item>
                    </Breadcrumb>

                    <Breadcrumb className="bg-light-lighten ps-2">
                        <Breadcrumb.Item href="/ui/breadcrumb">
                            <i className="uil-home-alt"></i> Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/ui/breadcrumb">Library</Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </Card.Body>
            </Card>
        </>
    );
};

const Breadcrumbs = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/breadcrumb' },
                    { label: 'Breadcrumb', path: '/ui/breadcrumb', active: true },
                ]}
                title={'Breadcrumb'}
            />
            <Row>
                <Col xl={6}>
                    <Example />
                </Col>

                <Col xl={6}>
                    <WithIcons />
                </Col>
            </Row>
        </>
    );
};

export default Breadcrumbs;
