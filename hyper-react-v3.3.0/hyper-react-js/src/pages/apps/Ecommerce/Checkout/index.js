// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import classnames from 'classnames';

// components
import PageTitle from '../../../../components/PageTitle';

import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';
import Summary from './Summary';

// images
import productImg5 from '../../../../assets/images/products/product-5.jpg';
import productImg2 from '../../../../assets/images/products/product-1.jpg';
import productImg3 from '../../../../assets/images/products/product-3.jpg';

// Checkout
const Checkout = (): React$Element<React$FragmentType> => {
    const [cart, setCart] = useState({
        items: [
            {
                id: 1,
                image: productImg2,
                name: 'Amazing Modern Chair',
                size: 'Large',
                color: 'Light Green',
                price: 148.66,
                qty: 5,
                total: 743.3,
            },
            {
                id: 2,
                image: productImg5,
                name: 'Biblio Plastic Armchair',
                size: 'Small',
                color: 'Brown',
                price: 99,
                qty: 2,
                total: 198.0,
            },
            {
                id: 3,
                image: productImg3,
                name: 'Designer Awesome Chair',
                size: 'Medium',
                color: 'Green',
                price: 49.99,
                qty: 3,
                total: 499.9,
            },
        ],
        sub_total: 1071.29,
        shipping: 0,
        total: 1071.29,
    });

    /**
     * Update the shipping cost
     */
    const updateShipping = (shippingCost) => {
        var localCart = { ...cart };
        localCart['shipping'] = shippingCost;
        localCart['total'] = localCart['sub_total'] + shippingCost;
        setCart(localCart);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/checkout' },
                    { label: 'Checkout', path: '/apps/ecommerce/checkout', active: true },
                ]}
                title={'Checkout'}
            />
            <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="1" className="nav-link rounded-0">
                                            <i className={classnames('mdi mdi-account-circle', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Billing Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="2" className="nav-link rounded-0">
                                            <i className={classnames('mdi mdi-truck-fast', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Shipping Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link href="#" eventKey="3" className="nav-link rounded-0">
                                            <i className={classnames('mdi mdi-cash-multiple', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Payment Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Row>
                                    <Col lg={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Billing />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Shipping updateShipping={updateShipping} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <Payment />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col lg={4}>
                                        <Summary cart={cart} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export default Checkout;
