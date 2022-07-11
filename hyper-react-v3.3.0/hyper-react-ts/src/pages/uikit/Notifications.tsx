import React, { useState } from 'react';
import { Row, Col, Card, Toast, ToastContainer, Form, Button, ToastContainerProps } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import logo from 'assets/images/logo_sm_dark.png';

type Stack = {
    time: string;
    desc: string;
};

const DefaultToasts = () => {
    const [isOpen, , , hide] = useToggle(true);
    const [isOpenTranslucent, , , hideTranslucent] = useToggle(true);
    const [isOpenPlacement, , , hidePlacement] = useToggle(true);

    const [stacked, setStacked] = useState<Stack[]>([
        {
            time: 'just now',
            desc: 'See? Just like this.',
        },
        {
            time: '2 seconds ago',
            desc: 'Heads up, toasts will stack automatically',
        },
    ]);

    /*
     * handle close
     */
    const handleClose = (index: number) => {
        const list = [...stacked];
        list.splice(index, 1);
        setStacked(list);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bootstrap Toasts</h4>
                <p className="text-muted font-14">
                    Push notifications to your visitors with a toast, a lightweight and easily customizable alert
                    message.
                </p>

                <Row>
                    <Col md={6}>
                        <h5 className="mb-2">Basic</h5>
                        <p className="text-muted font-14">
                            Toasts are as flexible as you need and have very little required markup. At a minimum, we
                            require a single element to contain your “toasted” content and strongly encourage a dismiss
                            button.
                        </p>
                        <div className="p-3">
                            <Toast onClose={hide} show={isOpen} autohide>
                                <Toast.Header>
                                    <img src={logo} alt="brand-logo" height="12" className="me-1" />
                                    <strong className="me-auto">Hyper</strong>
                                    <small className="ms-5">11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h5 className="mb-2">Translucent</h5>
                        <p className="text-muted font-14">
                            Toasts are slightly translucent, too, so they blend over whatever they might appear over.
                            For browsers that support the backdrop-filter CSS property, we’ll also attempt to blur the
                            elements under a toast.
                        </p>

                        <div className="p-3 bg-light">
                            <Toast onClose={hideTranslucent} show={isOpenTranslucent} delay={8000} autohide>
                                <Toast.Header>
                                    <img src={logo} alt="brand-logo" height="12" className="me-1" />
                                    <strong className="me-auto">Hyper</strong>
                                    <small className="ms-5">11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                    </Col>
                </Row>

                {/* stacked */}
                <Row>
                    <Col md={6} className="mt-4">
                        <h5 className="mb-2">Stacking</h5>
                        <p className="text-muted font-14">
                            When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.
                        </p>
                        <div className="p-3">
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                style={{ position: 'relative', minHeight: '200px' }}
                            >
                                <div className="toast-container" style={{ position: 'absolute', top: 0, right: 0 }}>
                                    {stacked.map((item, index) => {
                                        return (
                                            <Toast
                                                key={index.toString()}
                                                onClose={() => handleClose(index)}
                                                delay={5000}
                                                autohide
                                            >
                                                <Toast.Header>
                                                    <img src={logo} alt="brand-logo" height="12" className="me-1" />
                                                    <strong className="me-auto">Hyper</strong>
                                                    <small className="ms-5">{item.time}</small>
                                                </Toast.Header>
                                                <Toast.Body>{item.desc}</Toast.Body>
                                            </Toast>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="mt-4">
                        <h5 className="mb-2">Placement</h5>
                        <p className="text-muted font-14">
                            Place toasts with custom CSS as you need them. The top right is often used for
                            notifications, as is the top middle. If you’re only ever going to show one toast at a time,
                            put the positioning styles right on the <code>.toast</code>.
                        </p>

                        <div className="p-3">
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                className="d-flex justify-content-center align-items-center"
                                style={{ minHeight: '200px' }}
                            >
                                <Toast onClose={hidePlacement} show={isOpenPlacement} delay={6000} autohide>
                                    <Toast.Header>
                                        <img src={logo} alt="brand-logo" height="12" className="me-1" />
                                        <strong className="me-auto">Hyper</strong>
                                        <small className="ms-5">1 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                                </Toast>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const CustomToast = () => {
    const [isOpenCustom1, , , hideCustom1] = useToggle(true);
    const [isOpenCustom2, , , hideCustom2] = useToggle(true);
    const [isOpenCustom3, , , hideCustom3] = useToggle(true);
    const [isOpenCustom4, , , hideCustom4] = useToggle(true);

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Custom content</h4>
                <p className="text-muted">
                    Alternatively, you can also add additional controls and components to toasts.
                </p>
                <Toast
                    className="d-flex align-items-center mt-4"
                    show={isOpenCustom1}
                    onClose={hideCustom1}
                    delay={3000}
                    autohide
                >
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <Button variant="" onClick={hideCustom1} className="btn-close ms-auto me-2"></Button>
                </Toast>
                <Toast
                    className="d-flex align-items-center text-white bg-primary border-0 mt-4"
                    show={isOpenCustom2}
                    onClose={hideCustom2}
                    delay={6000}
                    autohide
                >
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>

                    <Button
                        variant=""
                        onClick={hideCustom2}
                        className="btn-close btn-close-white ms-auto me-2"
                    ></Button>
                </Toast>
                <Toast className="mt-4" show={isOpenCustom3} onClose={hideCustom3} delay={8000} autohide>
                    <Toast.Body>
                        Hello, world! This is a toast message.
                        <div className="mt-2 pt-2 border-top">
                            <Button variant="primary" className="btn-sm me-1">
                                Take action
                            </Button>
                            <Button variant="secondary" onClick={hideCustom3} className="btn-sm">
                                Close
                            </Button>
                        </div>
                    </Toast.Body>
                </Toast>
                <Toast
                    className="text-white bg-primary mt-4"
                    show={isOpenCustom4}
                    onClose={hideCustom4}
                    delay={10000}
                    autohide
                >
                    <Toast.Body>
                        Hello, world! This is a toast message.
                        <div className="mt-2 pt-2 border-top">
                            <Button variant="light" className="btn-sm me-1">
                                Take action
                            </Button>
                            <Button variant="secondary" onClick={hideCustom4} className="btn-sm">
                                Close
                            </Button>
                        </div>
                    </Toast.Body>
                </Toast>
            </Card.Body>
        </Card>
    );
};

const PlacementToast = () => {
    const [position, setPosition] = useState<ToastContainerProps['position']>('top-start');

    const positions: ToastContainerProps['position'][] = [
        'top-start',
        'top-center',
        'top-end',
        'middle-start',
        'middle-center',
        'middle-end',
        'bottom-start',
        'bottom-center',
        'bottom-end',
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Placement</h4>
                <p className="text-muted font-14">
                    Place toasts with custom CSS as you need them. The top right is often used for notifications, as is
                    the top middle. If you’re only ever going to show one toast at a time, put the positioning styles
                    right on the
                    <code>.toast</code>.
                </p>
                <div className="mb-3">
                    <label htmlFor="selectToastPlacement">Toast placement</label>
                    <Form.Select
                        id="selectToastPlacement"
                        className="mt-2"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setPosition(e.currentTarget.value as ToastContainerProps['position'])
                        }
                    >
                        {(positions || []).map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </Form.Select>
                </div>

                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="bg-light position-relative"
                    style={{ minHeight: '294px' }}
                >
                    <ToastContainer className="p-3" position={position}>
                        <Toast>
                            <Toast.Header closeButton={false}>
                                <img src={logo} className="me-1" alt="" height="12" />
                                <strong className="me-auto">UBold</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            </Card.Body>
        </Card>
    );
};

const Notifications = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/toasts' },
                    { label: 'Notifications', path: '/ui/notifications', active: true },
                ]}
                title={'Notifications'}
            />

            {/* toast */}
            <Row>
                <Col>
                    <DefaultToasts />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <CustomToast />
                </Col>
                <Col lg={6}>
                    <PlacementToast />
                </Col>
            </Row>
        </>
    );
};

export default Notifications;
