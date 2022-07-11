// @flow
import React from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

// Item Table
const Items = (props) => {
    const items = props.items || [];
    return (
        <>
            <div className="table-responsive">
                <table className="table mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

// summary
const OrderSummary = (props) => {
    const summary = props.summary || {};

    return (
        <div className="table-responsive">
            <table className="table mb-0">
                <thead className="table-light">
                    <tr>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Grand Total :</td>
                        <td>{summary.gross_total}</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge :</td>
                        <td>{summary.shipping_charge}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax : </td>
                        <td>{summary.tax}</td>
                    </tr>
                    <tr>
                        <th>Total :</th>
                        <td>{summary.net_total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// shipping info
const ShippingInfo = (props) => {
    const details = props.details || {};
    return (
        <>
            <h5>{details.provider}</h5>

            <address className="mb-0 font-14 address-lg">
                {details.address_1}
                <br />
                {details.address_2}
                <br />
                <abbr title="Phone">P:</abbr> {details.phone} <br />
                <abbr title="Mobile">M:</abbr> {details.mobile}
            </address>
        </>
    );
};

// billing info
const BillingInfo = (props) => {
    const details = props.details || {};
    return (
        <>
            <ul className="list-unstyled mb-0">
                <li>
                    <p className="mb-2">
                        <span className="fw-bold me-2">Payment Type:</span> {details.type}
                    </p>
                    <p className="mb-2">
                        <span className="fw-bold me-2">Provider:</span> {details.provider}
                    </p>
                    <p className="mb-2">
                        <span className="fw-bold me-2">Valid Date:</span> {details.valid}
                    </p>
                    <p className="mb-0">
                        <span className="fw-bold me-2">CVV:</span> xxx
                    </p>
                </li>
            </ul>
        </>
    );
};

// delivery info
const DeliveryInfo = (props) => {
    const details = props.details || {};
    return (
        <>
            <div className="text-center">
                <i className="mdi mdi-truck-fast h2 text-muted"></i>
                <h5>
                    <b>{details.provider}</b>
                </h5>
                <p className="mb-1">
                    <b>Order ID :</b> {details.order_id}
                </p>
                <p className="mb-0">
                    <b>Payment Mode :</b> {details.payment_mode}
                </p>
            </div>
        </>
    );
};

// order details
const OrderDetails = (): React$Element<React$FragmentType> => {
    const order = {
        id: '#BM31',
        order_status: 'Packed',
        items: [
            {
                id: 1,
                name: 'The Military Duffle Bag',
                quantity: 3,
                price: '$128',
                total: '$384',
            },
            {
                id: 2,
                name: 'Mountain Basket Ball',
                quantity: 1,
                price: '$199',
                total: '$199',
            },
            {
                id: 3,
                name: 'Wavex Canvas Messenger Bag',
                quantity: 5,
                price: '$180',
                total: '$900',
            },
            {
                id: 4,
                name: 'The Utility Shirt',
                quantity: 2,
                price: '$79',
                total: '$158',
            },
        ],
        gross_total: '$1641',
        shipping_charge: '$23',
        tax: '$19.22',
        net_total: '$1683.22',
        shipping: {
            provider: 'Stanley Jones',
            address_1: '795 Folsom Ave, Suite 600',
            address_2: 'San Francisco, CA 94107',
            phone: '(123) 456-7890 ',
            mobile: '(+01) 12345 67890',
        },
        billing: {
            type: 'Credit Card',
            provider: 'Visa ending in 2851',
            valid: '02/2020',
        },
        delivery: {
            provider: 'UPS Delivery',
            order_id: '#BM31',
            payment_mode: 'COD',
        },
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/order/details' },
                    {
                        label: 'Order Details',
                        path: '/apps/ecommerce/order/details',
                        active: true,
                    },
                ]}
                title={'Order Details'}
            />

            <Row>
                <Col>
                    <Row className="justify-content-center">
                        <Col lg={7} md={10} sm={11}>
                            <div className="horizontal-steps mt-4 mb-4 pb-5">
                                <div className="horizontal-steps-content">
                                    <div className="step-item">
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip>20/08/2018 07:24 PM</Tooltip>}>
                                            <span> Order Placed</span>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="step-item current">
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip>21/08/2018 11:32 AM</Tooltip>}>
                                            <span> Packed</span>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="step-item">
                                        <span>Shipped</span>
                                    </div>
                                    <div className="step-item">
                                        <span>Delivered</span>
                                    </div>
                                </div>

                                <div className="process-line" style={{ width: '33%' }}></div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={8}>
                            <Card>
                                <Card.Body>
                                    <h4 className="header-title mb-3">Items from Order {order.id}</h4>
                                    <Items items={order.items} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <h4 className="header-title mb-3">Order Summary</h4>
                                    <OrderSummary summary={order} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <h4 className="header-title mb-3">Shipping Information</h4>
                                    <ShippingInfo details={order.shipping} />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <h4 className="header-title mb-3">Billing Information</h4>
                                    <BillingInfo details={order.billing} />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <h4 className="header-title mb-3">Delivery Info</h4>
                                    <DeliveryInfo details={order.delivery} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default OrderDetails;
