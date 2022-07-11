// @flow
import React from 'react';
import { Row, Col, Card, Popover, Button, OverlayTrigger } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const Basic = () => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
        </Popover>
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Simple Popover</h4>
                <p className="text-muted font-14">
                    Popover is a component which displays a box with a content after a click on an element - similar to
                    the tooltip but can contain more content.
                </p>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="danger">Click me to see</Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>
    );
};

const Direction = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Four Directions</h4>
                <p className="text-muted font-14">Four options are available: top, right, bottom, and left aligned.</p>

                {['top', 'bottom', 'right', 'left'].map((placement) => (
                    <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover popper id={`popover-positioned-${placement}`}>
                                <Popover.Body>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Body>
                            </Popover>
                        }>
                        <Button variant="primary" className="me-1">
                            Popover on {placement}
                        </Button>
                    </OverlayTrigger>
                ))}
            </Card.Body>
        </Card>
    );
};

const DimissibleOnClick = () => {
    const popover = (
        <Popover>
            <Popover.Header as="h3">Dismissible popover</Popover.Header>
            <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
        </Popover>
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Dismiss on Next Click</h4>
                <p className="text-muted font-14">
                    Use the <code>trigger</code> attribute with value <code>focus</code> to dismiss popovers on the
                    user's next click of a different element than the toggle element.
                </p>
                <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
                    <Button variant="success">Dismissible popover</Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>
    );
};

const DisabledPopover = () => {
    const popover = (
        <Popover>
            <Popover.Body>Disabled popover</Popover.Body>
        </Popover>
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Disabled Elements</h4>
                <p className="text-muted font-14">
                    Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or
                    click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover
                    from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the{' '}
                    <code>pointer-events</code> on the disabled element.
                </p>
                <OverlayTrigger placement="right" overlay={popover}>
                    <span className="d-inline-block">
                        <Button disabled style={{ pointerEvents: 'none' }}>
                            Disabled button
                        </Button>
                    </span>
                </OverlayTrigger>
            </Card.Body>
        </Card>
    );
};

const HoverPopover = () => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Ohh Wow !</Popover.Header>
            <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
        </Popover>
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Hover</h4>
                <p className="text-muted font-14">
                    Use the <code>trigger</code> attribute with value <code>hover</code> to show popover on hovering the
                    element.
                </p>
                <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                    <Button variant="dark">Please Hover me</Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>
    );
};

const Popovers = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/popovers' },
                    { label: 'Popovers', path: '/ui/popovers', active: true },
                ]}
                title={'Popovers'}
            />

            <Row>
                <Col xl={6}>
                    <Basic />
                    <DimissibleOnClick />
                    <HoverPopover />
                </Col>
                <Col xl={6}>
                    <Direction />
                    <DisabledPopover />
                </Col>
            </Row>
        </>
    );
};

export default Popovers;
