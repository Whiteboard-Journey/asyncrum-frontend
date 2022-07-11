// @flow
import React from 'react';
import { Row, Col, Card, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

const buttons = [
    {
        name: 'Primary',
        color: 'primary',
    },
    {
        name: 'Secondary',
        color: 'secondary',
    },
    {
        name: 'Success',
        color: 'success',
    },
    {
        name: 'Danger',
        color: 'danger',
    },
    {
        name: 'Warning',
        color: 'warning',
    },
    {
        name: 'Info',
        color: 'info',
    },
    {
        name: 'Light',
        color: 'light',
    },
    {
        name: 'Dark',
        color: 'dark',
    },
];

const DefaultButtons = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Default Buttons</h4>
                <p className="text-muted font-14">
                    Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or{' '}
                    <code>&lt;input&gt;</code> element.
                </p>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button key={index} variant={button.color}>
                                {button.name}
                            </Button>
                        );
                    })}
                    <Button variant="link">Link</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

const OutlineButtons = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Button Outline</h4>
                <p className="text-muted font-14">
                    Use a classes <code>.btn-outline-**</code> to quickly create a bordered buttons.
                </p>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button key={index} variant={'outline-' + button.color}>
                                {button.name}
                            </Button>
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    );
};

const RoundedButtons = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Button-Rounded</h4>
                <p className="text-muted font-14">
                    Add <code>.btn-rounded</code> to default button to get rounded corners.
                </p>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button key={index} variant={button.color} className="btn-rounded">
                                {button.name}
                            </Button>
                        );
                    })}
                    <Button variant="link" className="btn-rounded">
                        Link
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

const OutlineRoundedButtons = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Button Outline Rounded</h4>
                <p className="text-muted font-14">
                    Use a classes <code>.btn-outline-**</code> to quickly create a bordered buttons.
                </p>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button key={index} variant={'outline-' + button.color} className="btn-rounded">
                                {button.name}
                            </Button>
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    );
};

const ButtonSizes = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Button-Sizes</h4>
                <p className="text-muted font-14">
                    Add <code>.btn-lg</code>, <code>.btn-sm</code> for additional sizes.
                </p>

                <div className="button-list">
                    <Button size="lg" variant="primary">
                        Large
                    </Button>
                    <Button variant="info">Normal</Button>
                    <Button size="sm" variant="success">
                        Small
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

const DisabledButton = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Button-Disabled</h4>
                <p className="text-muted font-14">
                    Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code> buttons.
                </p>

                <div className="button-list">
                    <Button disabled variant="info">
                        Info
                    </Button>
                    <Button disabled variant="success">
                        Success
                    </Button>
                    <Button disabled variant="danger">
                        Danger
                    </Button>
                    <Button disabled variant="dark">
                        Dark
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

const BlockButton = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Block Level Buttons</h4>
                <p className="text-muted font-14">
                    Create block level buttons by adding class <code>.d-grid</code> to parent div.
                </p>

                <div className="button-list">
                    <div className="d-grid">
                        <Button variant="primary">Block Button</Button>
                        <Button variant="info">Block Button</Button>
                        <Button variant="success">Block Button</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

const IconButtons = () => {
    const icons = [
        'mdi-heart-outline',
        'mdi-window-close',
        'mdi-music',
        'mdi-star',
        'mdi mdi-thumb-up-outline',
        'mdi mdi-keyboard',
        'mdi mdi-wrench',
        'mdi-star-outline',
        'mdi-heart',
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Icon Button</h4>
                <p className="text-muted font-14">Icon only button.</p>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button key={index} variant={button.color} className="btn-icon">
                                <i className={classNames('mdi', icons[index], 'ms-1', 'me-1')}></i>
                            </Button>
                        );
                    })}

                    <br />
                    <Button type="button" variant="light">
                        <i className="mdi mdi-heart me-1"></i> <span>Like</span>
                    </Button>
                    <Button type="button" variant="warning">
                        <i className="mdi mdi-rocket me-1"></i> <span>Launch</span>
                    </Button>
                    <Button type="button" variant="info">
                        <i className="mdi mdi-cloud me-1"></i> <span>Cloud Hosting</span>
                    </Button>

                    <br />
                    <Button type="button" variant="outline-success">
                        <i className="uil-money-withdrawal"></i> Money
                    </Button>
                    <Button type="button" variant="outline-primary">
                        <i className="uil-paypal"></i> PayPal
                    </Button>
                    <Button type="button" variant="outline-danger">
                        <i className="uil-cog"></i> Settings
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

const ButtonGroups = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Button Group</h4>
                <p className="text-muted font-14">
                    Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.
                </p>

                <ButtonGroup className="mb-2">
                    <Button variant="light">Left</Button>
                    <Button variant="light">Middle</Button>
                    <Button variant="light">Right</Button>
                </ButtonGroup>

                <br />

                <ButtonGroup className="mb-2 me-1">
                    <Button variant="light">1</Button>
                    <Button variant="light">2</Button>
                    <Button variant="light">3</Button>
                    <Button variant="light">4</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2 me-1">
                    <Button variant="light">5</Button>
                    <Button variant="light">6</Button>
                    <Button variant="light">7</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2">
                    <Button variant="light">8</Button>
                </ButtonGroup>

                <br />

                <ButtonGroup className="mb-2">
                    <Button variant="light">1</Button>
                    <Button variant="primary">2</Button>
                    <Button variant="light">3</Button>
                    <DropdownButton as={ButtonGroup} title="Dropdown" variant="light">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>

                <Row>
                    <Col md={3}>
                        <ButtonGroup vertical>
                            <Button variant="light">Top</Button>
                            <Button variant="light">Middle</Button>
                            <Button variant="light">Bottom</Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={3}>
                        <ButtonGroup vertical>
                            <Button variant="light">Button 1</Button>
                            <Button variant="light">Button 2</Button>
                            <DropdownButton as={ButtonGroup} title="Button 3" variant="light">
                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const Buttons = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/buttons' },
                    { label: 'Buttons', path: '/ui/buttons', active: true },
                ]}
                title={'Buttons'}
            />

            <Row>
                <Col xl={6}>
                    <DefaultButtons />
                </Col>

                <Col xl={6}>
                    <RoundedButtons />
                </Col>

                <Col xl={6}>
                    <OutlineButtons />
                </Col>

                <Col xl={6}>
                    <OutlineRoundedButtons />
                </Col>

                <Col xl={6}>
                    <ButtonSizes />
                </Col>

                <Col xl={6}>
                    <DisabledButton />
                </Col>

                <Col xl={6}>
                    <IconButtons />
                </Col>

                <Col xl={6}>
                    <BlockButton />
                </Col>

                <Col xl={6}>
                    <ButtonGroups />
                </Col>
            </Row>
        </>
    );
};

export default Buttons;
