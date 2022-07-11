// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Offcanvas, Button } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const OffCanvasWithBackdrop = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <>
            <Button variant="primary" onClick={toggle} className="me-1">
                {name}
            </Button>
            <Offcanvas show={show} onHide={toggle} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

const OffcanvasPlacement = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <>
            <Button variant="primary" onClick={toggle}>
                Toggle {name} offcanvas
            </Button>
            <Offcanvas show={show} onHide={toggle} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas {name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom
                    elements here.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

const DefaultOffcanvas = () => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Offcanvas</h4>
                    <p className="text-muted font-13">
                        <code>Offcanvas</code> includes support for a header with a close button and an optional body
                        class for some initial padding. We suggest that you include offcanvas headers with dismiss
                        actions whenever possible, or provide an explicit dismiss action.
                    </p>
                    <Button variant="primary" onClick={toggle}>
                        Launch
                    </Button>

                    <Offcanvas show={show} onHide={toggle}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you have chosen. Like,
                            text, images, lists, etc.
                            <h5 className="mt-3">List</h5>
                            <ul className="ps-3">
                                <li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
                                <li className="">Neque porro quisquam est, qui dolorem</li>
                                <li className="">Quis autem vel eum iure qui in ea</li>
                            </ul>
                            <ul className="ps-3">
                                <li className="">At vero eos et accusamus et iusto odio dignissimos</li>
                                <li className="">Et harum quidem rerum facilis</li>
                                <li className="">Temporibus autem quibusdam et aut officiis</li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Card.Body>
            </Card>
        </>
    );
};

const Offcanvases = (): React$Element<React$FragmentType> => {
    const options = [
        {
            name: 'Enable body scrolling',
            scroll: true,
            backdrop: false,
        },
        {
            name: 'Enable backdrop (default)',
            scroll: false,
            backdrop: true,
        },
        {
            name: 'Enable both scrolling & backdrop',
            scroll: true,
            backdrop: true,
        },
    ];

    const placementOptions = [
        {
            name: 'top',
            placement: 'top',
        },
        {
            name: 'right',
            placement: 'end',
        },
        {
            name: 'bottom',
            placement: 'bottom',
        },
        {
            name: 'left',
            placement: 'start',
        },
    ];
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/offcanvas' },
                    { label: 'Offcanvas', path: '/ui/offcanvas', active: true },
                ]}
                title={'Offcanvas'}
            />

            <Row>
                <Col className="col-6">
                    <DefaultOffcanvas />

                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Offcanvas Placement</h4>
                            <p className="text-muted font-13">Try the right and bottom examples out below.</p>
                            <ul>
                                <li>
                                    <code>start</code> places offcanvas on the left of the viewport
                                </li>
                                <li>
                                    <code>end</code> places offcanvas on the right of the viewport
                                </li>
                                <li>
                                    <code>bottom</code> places offcanvas on the bottom of the viewport
                                </li>
                            </ul>
                            <div className="button-list">
                                {placementOptions.map((option, index) => (
                                    <OffcanvasPlacement key={index} placement={option.placement} name={option.name} />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-6">
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Offcanvas Backdrop</h4>
                            <p className="text-muted font-13">
                                Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its
                                backdrop are visible. Use the <code>scroll</code> prop to toggle{' '}
                                <code>&lt;body&gt;</code> scrolling and <code>backdrop</code> prop to toggle the
                                backdrop.
                            </p>

                            {options.map((props, idx) => (
                                <OffCanvasWithBackdrop key={idx} {...props} />
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Offcanvases;
