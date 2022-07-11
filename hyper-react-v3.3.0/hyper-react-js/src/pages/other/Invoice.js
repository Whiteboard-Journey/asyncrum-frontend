// @flow
import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

// images
import logoImg from '../../assets/images/logo-light.png';
import orderBarcodeImg from '../../assets/images/barcode.png';

// invoice component
const Invoice = (): React$Element<React$FragmentType> => {
    const [customer] = useState('Cooper Hobson');
    const [notes] = useState(
        'Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.'
    );
    const [order_date] = useState('Jan 17, 2018');
    const [order_status] = useState('Paid');
    const [order_id] = useState('123456');
    const [order_barcode] = useState(orderBarcodeImg);
    const [billing_address] = useState({
        line_1: 'Lynne K. Higby',
        line_2: '795 Folsom Ave, Suite 600',
        city: 'San Francisco',
        state: 'CA',
        zip: 94107,
        phone: '(123) 456-7890',
    });
    const [shipping_address] = useState({
        line_1: 'Cooper Hobson',
        line_2: '795 Folsom Ave, Suite 600',
        city: 'San Francisco',
        state: 'CA',
        zip: 94107,
        phone: '(123) 456-7890',
    });
    const [items] = useState([
        {
            id: 1,
            name: 'Laptop',
            description: 'Brand Model VGN-TXN27N/B 11.1" Notebook PC',
            qty: 1,
            unit_cost: '$1799.00',
            total: '$1799.00',
        },
        {
            id: 2,
            name: 'Warranty',
            description: 'Two Year Extended Warranty - Parts and Labor',
            qty: 3,
            unit_cost: '$499.00',
            total: '$1497.00',
        },
        {
            id: 3,
            name: 'LED',
            description: '80cm (32) HD Ready LED TV',
            qty: 2,
            unit_cost: '$412.00',
            total: '$824.00',
        },
    ]);
    const [sub_total] = useState('$4120.00');
    const [vat] = useState('$515.00');
    const [total] = useState('$4635.00');

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/invoice' },
                    { label: 'Invoice', path: '/pages/invoice', active: true },
                ]}
                title={'Invoice'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="clearfix">
                                <div className="float-start mb-3">
                                    <img src={logoImg} alt="logo" height="18" />
                                </div>
                                <div className="float-end">
                                    <h4 className="m-0 d-print-none">Invoice</h4>
                                </div>
                            </div>

                            <Row>
                                <Col sm={6}>
                                    <div className="float-start mt-3">
                                        <p>
                                            <b>Hello, {customer}</b>
                                        </p>
                                        <p className="text-muted font-13">{notes}</p>
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div className="mt-3 float-sm-end">
                                        <p className="font-13">
                                            <strong>Order Date: </strong> &nbsp;&nbsp;&nbsp; {order_date}
                                        </p>
                                        <p className="font-13">
                                            <strong>Order Status: </strong>{' '}
                                            <span className="badge bg-success float-end">{order_status}</span>
                                        </p>
                                        <p className="font-13">
                                            <strong>Order ID: </strong> <span className="float-end">#{order_id}</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col sm={4}>
                                    <h6>Billing Address</h6>
                                    <address>
                                        {billing_address.line_1}
                                        <br />
                                        {billing_address.line_2}
                                        <br />
                                        {billing_address.city}, {billing_address.state} {billing_address.zip}
                                        <br />
                                        <abbr title="Phone">P:</abbr> {billing_address.phone}
                                    </address>
                                </Col>
                                <Col sm={4}>
                                    <h6>Shipping Address</h6>
                                    <address>
                                        {shipping_address.line_1}
                                        <br />
                                        {shipping_address.line_2}
                                        <br />
                                        {shipping_address.city}, {shipping_address.state} {shipping_address.zip}
                                        <br />
                                        <abbr title="Phone">P:</abbr> {shipping_address.phone}
                                    </address>
                                </Col>
                                <Col sm={4}>
                                    <div className="text-sm-end">
                                        <img src={order_barcode} alt="" className="img-fluid me-2" />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="table-responsive">
                                        <table className="table mt-4">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Item</th>
                                                    <th>Quantity</th>
                                                    <th>Unit Cost</th>
                                                    <th className="text-end">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{idx + 1}</td>
                                                            <td>
                                                                <b>{item.name}</b> <br />
                                                                {item.description}
                                                            </td>
                                                            <td>{item.qty}</td>
                                                            <td>{item.unit_cost}</td>
                                                            <td className="text-end">{item.total}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <div className="clearfix pt-3">
                                        <h6 className="text-muted">Notes:</h6>
                                        <small>
                                            All accounts are to be paid within 7 days from receipt of invoice. To be
                                            paid by cheque or credit card or direct payment online. If account is not
                                            paid within 7 days the credits details supplied as confirmation of work
                                            undertaken will be charged the agreed quoted fee noted above.
                                        </small>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="float-end mt-3 mt-sm-0">
                                        <p>
                                            <b>Sub-total:</b> <span className="float-end">{sub_total}</span>
                                        </p>
                                        <p>
                                            <b>VAT (12.5):</b> <span className="float-end">{vat}</span>
                                        </p>
                                        <h3>{total} USD</h3>
                                    </div>
                                    <div className="clearfix"></div>
                                </Col>
                            </Row>

                            <div className="d-print-none mt-4">
                                <div className="text-end">
                                    <button
                                        className="btn btn-primary me-1"
                                        onClick={(e) => {
                                            window.print();
                                        }}>
                                        <i className="mdi mdi-printer"></i> Print
                                    </button>
                                    <button className="btn btn-info">Submit</button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Invoice;
