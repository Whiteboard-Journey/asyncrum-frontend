// @flow
import React from 'react';
import { Row, Col, Card, Dropdown, DropdownButton, SplitButton, ButtonGroup } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const colors = [
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
        name: 'Info',
        color: 'info',
    },
    {
        name: 'Warning',
        color: 'warning',
    },
    {
        name: 'Danger',
        color: 'danger',
    },
];

const SingleButtonDropdown = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Single button dropdowns</h4>
                <p className="text-muted font-14">
                    You can use <code>DropdownButton</code> to create a simple dropdown. Also, you can use prop{' '}
                    <code>as</code> to create custom element typeof dropdown.
                </p>

                <Row>
                    <Col className="col-auto">
                        <DropdownButton variant="light" title="Dropdown button">
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col className="col-auto">
                        <DropdownButton variant="secondary" as="a" title="Dropdown link">
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const DropdownMenuAlignment = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Menu alignment</h4>
                <p className="text-muted font-14">
                    Passing <code>right</code> to the <code>menuAligh</code> prop on the
                    <code> DropdownButton</code> to right align the dropdown menu.
                </p>

                <DropdownButton variant="light" align="end" title="Right-aligned menut">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </DropdownButton>
            </Card.Body>
        </Card>
    );
};

const ColorVariantButtonDropdown = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Variant</h4>
                    <p className="text-muted font-14 mb-3">
                        The best part is you can do this with any button variant, too:
                    </p>

                    {colors.map((color, index) => {
                        return (
                            <Dropdown key={index} as={ButtonGroup} className="me-1">
                                <Dropdown.Toggle variant={color.color}>{color.name}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        );
                    })}
                </Card.Body>
            </Card>
        </>
    );
};

const AnimatedButtonDropdown = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Animated Dropdown</h4>
                    <p className="text-muted font-14">
                        Add <code>.dropdown-menu-animated</code> to a <code>Dropdown.Menu</code> to have animated
                        dropdown menu.
                    </p>
                    <Dropdown>
                        <Dropdown.Toggle variant="light">Animated Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-animated">
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        </>
    );
};

const DropupVariationDropdowns = () => {
    const variations = [
        {
            type: DropdownButton,
            name: 'Dropup',
        },
        {
            type: SplitButton,
            name: 'Split dropup',
        },
    ];
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Dropup variation</h4>
                    <p className="text-muted font-14 mb-3">
                        Trigger dropdown menus above of their toggle elements, with the <code>drop</code> prop.
                    </p>
                    {variations.map((item, index) => (
                        <item.type
                            as={ButtonGroup}
                            key={index}
                            drop="up"
                            title={item.name}
                            variant="light"
                            className="me-1">
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </item.type>
                    ))}
                </Card.Body>
            </Card>
        </>
    );
};

const DropstartVariationDropdowns = () => {
    const variations = [
        {
            type: DropdownButton,
            name: 'Dropstart',
        },
        {
            type: SplitButton,
            name: 'Split dropstart',
        },
    ];
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Dropup variation</h4>
                    <p className="text-muted font-14 mb-3">
                        Trigger dropdown menus left of their toggle elements, with the <code>drop</code> prop.
                    </p>
                    {variations.map((item, index) => (
                        <item.type
                            as={ButtonGroup}
                            key={index}
                            drop="start"
                            title={item.name}
                            variant="secondary"
                            className="me-1">
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </item.type>
                    ))}
                </Card.Body>
            </Card>
        </>
    );
};

const DropendVariationDropdowns = () => {
    const variations = [
        {
            type: DropdownButton,
            name: 'Dropend',
        },
        {
            type: SplitButton,
            name: 'Split dropend',
        },
    ];
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Dropup variation</h4>
                    <p className="text-muted font-14 mb-3">
                        Trigger dropdown menus right of their toggle elements, with the <code>drop</code> prop.
                    </p>
                    {variations.map((item, index) => (
                        <item.type
                            as={ButtonGroup}
                            key={index}
                            drop="end"
                            title={item.name}
                            variant="primary"
                            className="me-1">
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </item.type>
                    ))}
                </Card.Body>
            </Card>
        </>
    );
};

const SplitColorVariantButtonDropdown = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Split button dropdowns</h4>
                    <p className="text-muted font-14 mb-3">
                        You can split button dropdowns by adding <code>SplitButton</code>.
                    </p>

                    {colors.map((color, index) => {
                        return (
                            <SplitButton key={index} variant={color.color} title={color.name} className="me-1 mb-1">
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </SplitButton>
                        );
                    })}
                </Card.Body>
            </Card>
        </>
    );
};

const ButtonDropdownSizes = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Sizing</h4>
                    <p className="text-muted font-14">
                        Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
                    </p>

                    {[DropdownButton, SplitButton].map((DropdownType, index) => (
                        <DropdownType
                            as={ButtonGroup}
                            className="me-1"
                            key={index}
                            size="lg"
                            title="Large button"
                            variant="light">
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownType>
                    ))}
                    {[DropdownButton, SplitButton].map((DropdownType, index) => (
                        <DropdownType
                            as={ButtonGroup}
                            className="me-1"
                            key={index}
                            size="sm"
                            title="Small button"
                            variant="light">
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownType>
                    ))}
                </Card.Body>
            </Card>
        </>
    );
};

const ActiveItemDropdown = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Active Item</h4>

                    <p className="text-muted font-14">
                        Add <code>active</code> prop to item in the dropdown to <strong>style them as active</strong>.
                    </p>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">Active Item</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Regular link</Dropdown.Item>
                            <Dropdown.Item active>Active link</Dropdown.Item>
                            <Dropdown.Item>Another link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        </>
    );
};

const DisabledItemDropdown = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Disabled Item</h4>

                    <p className="text-muted font-14">
                        Add <code>disabled</code> prop to item in the dropdown to{' '}
                        <strong>style them as disabled</strong>.
                    </p>

                    <Dropdown>
                        <Dropdown.Toggle>Active Item</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Regular link</Dropdown.Item>
                            <Dropdown.Item disabled>Disabled link</Dropdown.Item>
                            <Dropdown.Item>Another link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        </>
    );
};

const DropdownWithHeader = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Headers</h4>

                    <p className="text-muted font-14">Add a header to label sections of actions.</p>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">Header</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>Dropdown header</Dropdown.Header>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        </>
    );
};

const DropdownWithText = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Text</h4>

                    <p className="text-muted font-14">
                        Place any freeform text within a dropdown menu with text and use spacing utilities. Note that
                        you’ll likely need additional sizing styles to constrain the menu width.
                    </p>

                    <Dropdown>
                        <Dropdown.Toggle>Text Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu className="p-3 text-muted" style={{ maxWidth: '200px' }}>
                            <p>Some example text that's free-flowing within the dropdown menu.</p>
                            <p className="mb-0">And this is more example text.</p>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        </>
    );
};

const CustomDropdown = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Forms</h4>

                    <p className="text-muted font-14">
                        Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding
                        utilities to give it the negative space you require.
                    </p>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">Form</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <form className="px-4 py-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleDropdownFormEmail1"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleDropdownFormPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleDropdownFormPassword1"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="mb-2">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                        <label className="form-check-label" htmlFor="dropdownCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Sign in
                                </button>
                            </form>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">New around here? Sign up</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Forgot password?</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        </>
    );
};

const Dropdowns = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/dropdowns' },
                    { label: 'Dropdowns', path: '/ui/dropdowns', active: true },
                ]}
                title={'Dropdowns'}
            />

            <Row>
                <Col lg={6}>
                    <SingleButtonDropdown />
                    <ColorVariantButtonDropdown />
                    <AnimatedButtonDropdown />
                    <DropupVariationDropdowns />
                    <DropendVariationDropdowns />
                    <DisabledItemDropdown />
                    <DropdownWithText />
                </Col>

                <Col lg={6}>
                    <DropdownMenuAlignment />
                    <SplitColorVariantButtonDropdown />
                    <ButtonDropdownSizes />
                    <DropstartVariationDropdowns />
                    <ActiveItemDropdown />
                    <DropdownWithHeader />
                    <CustomDropdown />
                </Col>
            </Row>
        </>
    );
};

export default Dropdowns;
