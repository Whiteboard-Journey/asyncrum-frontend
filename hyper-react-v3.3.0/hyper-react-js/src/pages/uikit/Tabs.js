// @flow
import React from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

const TabsExample = (): React$Element<React$FragmentType> => {
    const tabContents = [
        {
            id: '1',
            title: 'Home',
            icon: 'mdi mdi-home-variant',
            text: 'Home - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '2',
            title: 'Profile',
            icon: 'mdi mdi-account-circle',
            text: 'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '3',
            title: 'Settings',
            icon: 'mdi mdi-cog-outline',
            text: 'Settings - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/tabs' },
                    { label: 'Tabs', path: '/ui/tabs', active: true },
                ]}
                title={'Tabs'}
            />

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Default Tabs</h4>
                            <p className="text-muted font-14 mb-3">Simple widget of tabbable panes of local content.</p>

                            <Tab.Container defaultActiveKey="Profile">
                                <Nav variant="tabs">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Nav.Item key={index}>
                                                <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-md-none',
                                                            'd-block',
                                                            'me-1'
                                                        )}></i>
                                                    <span className="d-none d-md-block">{tab.title}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        );
                                    })}
                                </Nav>

                                <Tab.Content>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Tab.Pane eventKey={tab.title} id={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        );
                                    })}
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>

                {/* tab justified */}
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Tabs Justified</h4>
                            <p className="text-muted font-14 mb-3">
                                If you want each NavItem to be the same size use <code>justify</code>.
                            </p>

                            <Tab.Container defaultActiveKey="Profile">
                                <Nav variant="pills" justify className="bg-nav-pills">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Nav.Item key={index}>
                                                <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-md-none',
                                                            'd-block',
                                                            'me-1'
                                                        )}></i>
                                                    <span className="d-none d-md-block">{tab.title}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        );
                                    })}
                                </Nav>

                                <Tab.Content>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Tab.Pane eventKey={tab.title} id={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        );
                                    })}
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* vertical tab */}
            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Tabs Vertical Left</h4>
                            <p className="text-muted font-14 mb-3">
                                You can stack your navigation by changing the flex item direction with the{' '}
                                <code>.flex-column</code> utility.
                            </p>

                            <Row>
                                <Tab.Container defaultActiveKey="Profile">
                                    <Col sm={3} className="mb-2 mb-sm-0">
                                        <Nav variant="pills" className="flex-column">
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <Nav.Item key={index}>
                                                        <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                            <i
                                                                className={classnames(
                                                                    tab.icon,
                                                                    'd-md-none',
                                                                    'd-block',
                                                                    'me-1'
                                                                )}></i>
                                                            <span className="d-none d-md-block">{tab.title}</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                );
                                            })}
                                        </Nav>
                                    </Col>

                                    <Col sm={9}>
                                        <Tab.Content>
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <Tab.Pane eventKey={tab.title} id={tab.id} key={index}>
                                                        <Row>
                                                            <Col sm="12">
                                                                <p className="mt-3">{tab.text}</p>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Pane>
                                                );
                                            })}
                                        </Tab.Content>
                                    </Col>
                                </Tab.Container>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Tabs Vertical Right</h4>
                            <p className="text-muted font-14 mb-3">
                                You can stack your navigation by changing the flex item direction with the{' '}
                                <code>.flex-column</code> utility.
                            </p>

                            <Row>
                                <Tab.Container defaultActiveKey="Profile">
                                    <Col sm={9}>
                                        <Tab.Content>
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <Tab.Pane eventKey={tab.title} id={tab.id} key={index}>
                                                        <Row>
                                                            <Col sm="12">
                                                                <p className="mt-3">{tab.text}</p>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Pane>
                                                );
                                            })}
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={3} className="mb-2 mb-sm-0">
                                        <Nav variant="pills" className="flex-column">
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <Nav.Item key={index}>
                                                        <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                            <i
                                                                className={classnames(
                                                                    tab.icon,
                                                                    'd-md-none',
                                                                    'd-block',
                                                                    'me-1'
                                                                )}></i>
                                                            <span className="d-none d-md-block">{tab.title}</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                );
                                            })}
                                        </Nav>
                                    </Col>
                                </Tab.Container>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Bordered Tabs */}
            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Tabs Bordered</h4>
                            <p className="text-muted font-14 mb-3">
                                The navigation item can have a simple bottom border as well. Just specify the class{' '}
                                <code>.nav-bordered</code>.
                            </p>

                            <Tab.Container defaultActiveKey="Profile">
                                <Nav variant="tabs" className="nav-bordered" as="ul">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Nav.Item key={index} as="li">
                                                <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-md-none',
                                                            'd-block',
                                                            'me-1'
                                                        )}></i>
                                                    <span className="d-none d-md-block">{tab.title}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        );
                                    })}
                                </Nav>

                                <Tab.Content>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Tab.Pane eventKey={tab.title} id={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        );
                                    })}
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>

                {/* tab justified */}
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Tabs Bordered Justified</h4>
                            <p className="text-muted font-14 mb-3">
                                The navigation item with a simple bottom border and justified.
                            </p>

                            <Tab.Container defaultActiveKey="Profile">
                                <Nav variant="tabs" justify className="nav-bordered" as="ul">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Nav.Item key={index} as="li">
                                                <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-md-none',
                                                            'd-block',
                                                            'me-1'
                                                        )}></i>
                                                    <span className="d-none d-md-block">{tab.title}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        );
                                    })}
                                </Nav>

                                <Tab.Content>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Tab.Pane eventKey={tab.title} id={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        );
                                    })}
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default TabsExample;
