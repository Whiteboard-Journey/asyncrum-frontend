import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import logodark from 'assets/images/logo-dark.png';
import { useModal } from './hooks';

const ModalSizes = () => {
    const [isStandardOpen, toggleStandard] = useToggle();
    const { isOpen, size, className, scroll, toggleModal, openModalWithSize, openModalWithClass, openModalWithScroll } =
        useModal();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bootstrap Modals</h4>
                <p className="sub-header">A rendered modal with header, body, and set of actions in the footer.</p>

                <div className="button-list">
                    <Button onClick={toggleStandard}>Standard Modal</Button>
                    <Button variant="info" onClick={() => openModalWithSize('lg')}>
                        Large Modal
                    </Button>
                    <Button variant="success" onClick={() => openModalWithSize('sm')}>
                        Small Modal
                    </Button>
                    <Button onClick={() => openModalWithClass('modal-full-width')}>Full width Modal</Button>
                    <Button variant="secondary" onClick={openModalWithScroll}>
                        Scrollable Modal
                    </Button>
                </div>

                {/* standard modal */}
                <Modal show={isStandardOpen} onHide={toggleStandard}>
                    <Modal.Header onHide={toggleStandard} closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Text in a modal</h6>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <hr />
                        <h6>Overflowing text to show scroll behavior</h6>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                            vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={toggleStandard}>
                            Close
                        </Button>{' '}
                        <Button onClick={toggleStandard}>Save changes</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={isOpen} onHide={toggleModal} dialogClassName={className} size={size} scrollable={scroll}>
                    <Modal.Header onHide={toggleModal} closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Text in a modal</h6>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <hr />
                        <h6>Overflowing text to show scroll behavior</h6>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                            vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        {scroll && (
                            <>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                    vestibulum at eros.
                                </p>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                </p>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={toggleModal}>
                            Close
                        </Button>{' '}
                        <Button onClick={toggleModal}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const ModalsWithPages = () => {
    const [signUpModal, toggleSignUp] = useToggle();
    const [signInModal, toggleSignIn] = useToggle();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Modal with Pages</h4>

                <p className="text-muted">Examples of custom modals.</p>

                <Button variant="primary" className="me-1" onClick={toggleSignUp}>
                    Sign Up Modal
                </Button>

                <Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>

                {/* Sign up Modal */}
                <Modal show={signUpModal} onHide={toggleSignUp}>
                    <Modal.Body>
                        <div className="text-center mt-2 mb-4">
                            <Link to="#">
                                <span>
                                    <img src={logodark} alt="" height="18" />
                                </span>
                            </Link>
                        </div>
                        <form className="ps-3 pe-3" action="#">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Name
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="username"
                                    required
                                    placeholder="Michael Zenaty"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="emailaddress" className="form-label">
                                    Email address
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="emailaddress"
                                    required
                                    placeholder="john@deo.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    required
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        I accept <Link to="#">Terms and Conditions</Link>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3 text-center">
                                <button className="btn btn-primary" type="submit">
                                    Sign Up Free
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                {/* Sign in Modal */}
                <Modal show={signInModal} onHide={toggleSignIn}>
                    <Modal.Body>
                        <div className="text-center mt-2 mb-4">
                            <Link to="#">
                                <span>
                                    <img src={logodark} alt="" height="18" />
                                </span>
                            </Link>
                        </div>
                        <form className="ps-3 pe-3" action="#">
                            <div className="mb-3">
                                <label htmlFor="emailaddress" className="form-label">
                                    Email address
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="emailaddress"
                                    required
                                    placeholder="john@deo.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    required
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3 text-center">
                                <button className="btn btn-rounded btn-primary" type="submit">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const ModalWithAlerts = () => {
    const { isOpen, className, toggleModal, openModalWithClass } = useModal();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Modal based Alerts</h4>

                <p className="text-muted">Show different contexual alert messages using modal component.</p>

                <Button variant="success" className="me-1" onClick={() => openModalWithClass('success')}>
                    Success Alert
                </Button>
                <Button variant="info" className="me-1" onClick={() => openModalWithClass('info')}>
                    Info Alert
                </Button>
                <Button variant="warning" className="me-1" onClick={() => openModalWithClass('warning')}>
                    Warning Alert
                </Button>
                <Button variant="danger" className="me-1" onClick={() => openModalWithClass('danger')}>
                    Danger Alert
                </Button>

                <Modal show={isOpen} onHide={toggleModal} size="sm">
                    <div className={classNames('modal-filled', 'bg-' + className)}>
                        <Modal.Body className="p-4">
                            <div className="text-center">
                                <i className="dripicons-checkmark h1"></i>
                                <h4 className="mt-2">Well Done!</h4>
                                <p className="mt-3">
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam.
                                </p>
                                <Button variant="light" className="my-2" onClick={toggleModal}>
                                    Continue
                                </Button>
                            </div>
                        </Modal.Body>
                    </div>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const ModalPositions = () => {
    const { isOpen, className, toggleModal, openModalWithClass } = useModal();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Modal Position</h4>

                <p className="text-muted">
                    Specify the position for the modal. You can display modal at top, bottom, center or right of page by
                    specifying classes <code>modal-top</code>, <code>modal-bottom</code>,{' '}
                    <code>modal-dialog-centered</code> and <code>modal-right</code>
                    respectively.
                </p>

                <div className="button-list">
                    <Button variant="secondary" onClick={() => openModalWithClass('modal-top')}>
                        Top
                    </Button>
                    <Button variant="secondary" onClick={() => openModalWithClass('modal-right')}>
                        Right
                    </Button>
                    <Button variant="secondary" onClick={() => openModalWithClass('modal-bottom')}>
                        Bottom
                    </Button>
                    <Button variant="secondary" onClick={() => openModalWithClass('modal-dialog-centered')}>
                        Center
                    </Button>
                </div>

                <Modal show={isOpen} onHide={toggleModal} dialogClassName={className}>
                    <Modal.Header onHide={toggleModal} closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Text in a modal</h5>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={toggleModal}>
                            Close
                        </Button>{' '}
                        <Button variant="primary" onClick={toggleModal}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const ModalWithColoredHeader = () => {
    const { isOpen, className, toggleModal, openModalWithClass } = useModal();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Colored Header Modals</h4>

                <p className="text-muted">A rendered modal with header having contexual background color.</p>

                <div className="button-list">
                    <Button variant="primary" onClick={() => openModalWithClass('primary')}>
                        Primary Header
                    </Button>
                    <Button variant="success" onClick={() => openModalWithClass('success')}>
                        Success Header
                    </Button>
                    <Button variant="info" onClick={() => openModalWithClass('info')}>
                        Info Header
                    </Button>
                    <Button variant="danger" onClick={() => openModalWithClass('danger')}>
                        Danger Header
                    </Button>
                    <Button variant="warning" onClick={() => openModalWithClass('warning')}>
                        Warning Header
                    </Button>
                    <Button variant="dark" onClick={() => openModalWithClass('dark')}>
                        Dark Header
                    </Button>
                </div>

                <Modal show={isOpen} onHide={toggleModal}>
                    <Modal.Header
                        onHide={toggleModal}
                        closeButton
                        className={classNames('modal-colored-header', 'bg-' + className)}
                    >
                        <h4 className="modal-title text-light">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className="mt-0">{className} Background</h5>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                            vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={toggleModal}>
                            Close
                        </Button>{' '}
                        <Button variant={className} onClick={toggleModal}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const ModalWithFilled = () => {
    const { isOpen, className, toggleModal, openModalWithClass } = useModal();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Filled Modals</h4>

                <p className="text-muted">
                    A rendered modal with header, body and footer having contexual background color.
                </p>

                <div className="button-list">
                    <Button variant="primary" onClick={() => openModalWithClass('primary')}>
                        Primary Filled
                    </Button>
                    <Button variant="success" onClick={() => openModalWithClass('success')}>
                        Success Filled
                    </Button>
                    <Button variant="info" onClick={() => openModalWithClass('info')}>
                        Info Filled
                    </Button>
                    <Button variant="danger" onClick={() => openModalWithClass('danger')}>
                        Danger Filled
                    </Button>
                    <Button variant="warning" onClick={() => openModalWithClass('warning')}>
                        Warning Filled
                    </Button>
                    <Button variant="dark" onClick={() => openModalWithClass('dark')}>
                        Dark Filled
                    </Button>
                </div>

                <Modal show={isOpen} onHide={toggleModal}>
                    <Modal.Header
                        onHide={toggleModal}
                        closeButton
                        className={classNames('modal-filled', 'bg-' + className)}
                    >
                        <h4 className="modal-title text-light">{className} Filled Modal</h4>
                    </Modal.Header>
                    <Modal.Body className={classNames('modal-filled', 'bg-' + className, 'text-light')}>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                            vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                    </Modal.Body>
                    <Modal.Footer className={classNames('modal-filled', 'bg-' + className)}>
                        <Button variant="light" onClick={toggleModal}>
                            Close
                        </Button>{' '}
                        <Button variant="outline-light" onClick={toggleModal}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const MultipleModal = () => {
    const [isOpen, toggleModal] = useToggle();
    const [isNextOpen, toggleNextModal] = useToggle();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Multiple Modal</h4>

                <p className="text-muted">
                    Display a series of modals one by one to guide your users on multiple aspects or take step wise
                    input.
                </p>

                <div className="button-list">
                    <Button onClick={toggleModal}>Multiple Modal</Button>
                </div>

                <Modal show={isOpen} onHide={toggleModal}>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Text in a modal</h5>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="primary"
                            onClick={() => {
                                toggleModal();
                                toggleNextModal();
                            }}
                        >
                            Next
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={isNextOpen} onHide={toggleNextModal}>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Text in a modal</h5>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={toggleNextModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const ToggleBetweenModals = () => {
    const [isOpen, toggleModal] = useToggle();
    const [isNextOpen, toggleNextModal] = useToggle();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Toggle Between Modals</h4>
                <p className="sub-header">
                    Display a series of modals one by one to guide your users on multiple aspects or take step wise
                    input.
                </p>

                <div className="button-list">
                    <Button variant="secondary" onClick={toggleModal}>
                        Open first modal
                    </Button>
                </div>

                <Modal show={isOpen} onHide={toggleModal} centered>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>Show a second modal and hide this one with the button below.</Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={() => {
                                toggleModal();
                                toggleNextModal();
                            }}
                        >
                            Open second modal
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={isNextOpen} onHide={toggleNextModal} centered>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>Hide this modal and show the first with the button below.</Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={() => {
                                toggleModal();
                                toggleNextModal();
                            }}
                        >
                            Back to first
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const StaticBackdropModal = () => {
    const [isOpen, toggleModal] = useToggle();

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Static Backdrop</h4>

                <p className="text-muted">
                    When backdrop is set to static, the modal will not close when clicking outside it. Click the button
                    below to try it.
                </p>

                <div className="button-list">
                    <Button variant="info" onClick={toggleModal}>
                        Static Backdrop
                    </Button>
                </div>

                <Modal show={isOpen} onHide={toggleModal} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggleModal}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const Modals = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/modals' },
                    { label: 'Modals', path: '/ui/modals', active: true },
                ]}
                title={'Modals'}
            />

            <Row>
                <Col md={6}>
                    <ModalSizes />
                </Col>

                <Col md={6}>
                    <ModalsWithPages />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <ModalWithAlerts />
                </Col>

                <Col md={6}>
                    <ModalPositions />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <ModalWithColoredHeader />
                </Col>

                <Col md={6}>
                    <ModalWithFilled />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <MultipleModal />
                </Col>

                <Col md={6}>
                    <ToggleBetweenModals />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <StaticBackdropModal />
                </Col>
            </Row>
        </>
    );
};

export default Modals;
