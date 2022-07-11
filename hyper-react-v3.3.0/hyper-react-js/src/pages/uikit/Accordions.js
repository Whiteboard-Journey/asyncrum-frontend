// @flow
import React, { useContext, useState } from 'react';
import { Row, Col, Card, Accordion, Button, Collapse, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

type CustomToggleProps = {
    children: any,
    eventKey: string,
    containerClass: string,
    linkClass: string,
    callback?: any,
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <h5 className={containerClass}>
            <Link
                to="#"
                className={classNames(linkClass, {
                    collapsed: !isCurrentEventKey,
                })}
                onClick={decoratedOnClick}>
                {children}
            </Link>
        </h5>
    );
};

const CustomAccordion1 = ({ item, index }) => {
    return (
        <Card className="mb-0">
            <Card.Header>
                <CustomToggle
                    eventKey={String(index)}
                    containerClass="m-0"
                    linkClass="custom-accordion-title d-block pt-2 pb-2">
                    Collapsible Group Item #{item}
                </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={String(index)}>
                <div>
                    <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                    </Card.Body>
                </div>
            </Accordion.Collapse>
        </Card>
    );
};

const CustomAccordion2 = ({ item, index }) => {
    return (
        <Card className="mb-0">
            <Card.Header>
                <CustomToggle
                    eventKey={String(index)}
                    containerClass="m-0"
                    linkClass="custom-accordion-title d-block py-1">
                    Q. {item.title}
                    <i className="mdi mdi-chevron-down accordion-arrow"></i>
                </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={String(index)}>
                <div>
                    <Card.Body>{item.text}</Card.Body>
                </div>
            </Accordion.Collapse>
        </Card>
    );
};

const Accordions = (): React$Element<React$FragmentType> => {
    const accordianContent = [
        {
            id: 1,
            title: 'Can I use this template for my client?',
            text: ' Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere',
        },
        {
            id: 2,
            title: 'Can this theme work with Wordpress?',
            text: "No. This is a HTML template. It won't directly with wordpress, though you can convert this into wordpress compatible theme",
        },
        {
            id: 3,
            title: 'How do I get help with the theme?',
            text: '   Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime',
        },
        {
            id: 4,
            title: 'Will you regularly give updates of UBold ?',
            text: 'Yes, We will update the UBold regularly. All the future updates would be available without any cost',
        },
    ];

    const [isOpen, setIsOpen] = useState(true);
    const [isOpenFirst, setIsOpenFirst] = useState(true);
    const [isOpenSecond, setIsOpenSecond] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const toggleFirst = () => setIsOpenFirst(!isOpenFirst);

    const toggleSecond = () => setIsOpenSecond(!isOpenSecond);

    const toggleBoth = () => {
        setIsOpenFirst(!isOpenFirst);
        setIsOpenSecond(!isOpenSecond);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/accordions' },
                    { label: 'Accordions', path: '/ui/accordions', active: true },
                ]}
                title={'Accordions'}
            />

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Simple Accordions</h4>
                            <p className="text-muted font-14 mb-3">
                                Use <code>Collapse</code> component to create accordions. The details documentation is
                                available{' '}
                                <a
                                    rel="noreferrer"
                                    href="https://react-bootstrap-v5.netlify.app/utilities/transitions/"
                                    target="_blank">
                                    here
                                </a>
                                .
                            </p>

                            <Accordion defaultActiveKey="0" id="accordion" className="mb-3">
                                {(['1', '2', '3'] || []).map((item, index) => {
                                    return <CustomAccordion1 key={index} item={item} index={index} />;
                                })}
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Custom Accordions</h4>
                            <p className="text-muted font-14 mb-3">
                                You can have custom look and feel for accorion as well. Just use class{' '}
                                <code>.custom-accordion</code> along with
                                <code>.accordion</code> as a wrapper.
                            </p>

                            <Accordion defaultActiveKey="0" id="accordion" className="custom-accordion">
                                {(accordianContent || []).map((item, index) => {
                                    return <CustomAccordion2 key={index} item={item} index={index} />;
                                })}
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Collapse</h4>
                            <p className="text-muted font-14 mb-3">
                                Collapse provides the way to toggle the visibility of any content or element.
                            </p>
                            <p>
                                <Link to="#" className="btn btn-primary" onClick={toggle}>
                                    Link with href
                                </Link>

                                <Button color="primary" className="ms-1" type="button" onClick={toggle}>
                                    Button with data-target
                                </Button>
                            </p>
                            <Collapse in={isOpen}>
                                <div>
                                    <div className="card card-body mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Multiple Targets</h4>
                            <p className="text-muted font-14 mb-3">
                                Multiple <code>Button</code> or <code>Link</code> can show and hide an element.
                            </p>
                            <p>
                                <Link to="#" className="btn btn-primary" onClick={toggleFirst}>
                                    Toggle first element
                                </Link>

                                <Button variant="primary" className="ms-1" type="button" onClick={toggleSecond}>
                                    Toggle second element
                                </Button>

                                <Button variant="primary" className="ms-1" type="button" onClick={toggleBoth}>
                                    Toggle both elements
                                </Button>
                            </p>
                            <Row>
                                <Col>
                                    <Collapse in={isOpenFirst}>
                                        <div>
                                            <div className="card card-body mb-0">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </Collapse>
                                </Col>
                                <Col>
                                    <Collapse in={isOpenSecond}>
                                        <div>
                                            <div className="card card-body mb-0">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Accordions;
