// @flow
import React from 'react';
import { Badge, Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

// component
import PageTitle from '../../../../components/PageTitle';
import { FormInput } from '../../../../components';

// dummy data
import { orderData } from './data';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type OrderListItems = {
    orderId: string,
    avatar: string,
    name: string,
    projectName: string,
    country: string,
    city: string,
    date: string,
    orderStatus: string,
};

type OrderListProps = {
    orderData: Array<OrderListItems>,
};

const OrderDetails = ({ orderData }: OrderListProps): React$Element<React$FragmentType> => {
    return (
        <Table responsive className="table-centered table-nowrap mb-0">
            <thead className="table-light">
                <tr>
                    <th style={{ width: '20px' }}>
                        <Form>
                            <Form.Check type="checkbox" id="all" />
                        </Form>
                    </th>
                    <th>Order ID</th>
                    <th>Customers</th>
                    <th>Project</th>
                    <th>Address</th>
                    <th>Date Order</th>
                    <th>Order Status</th>
                    <th style={{ width: '125px' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {(orderData || []).map((order, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                <Form>
                                    <Form.Check type="checkbox" id={order.orderId} />
                                </Form>
                            </td>
                            <td>
                                <Link to="#" className="text-body fw-bold">
                                    {order.orderId}
                                </Link>
                            </td>
                            <td>
                                <div className="d-flex">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <img src={order.avatar} className="rounded-circle avatar-xs" alt="friend" />
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h5 className="my-0">{order.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{order.projectName}</td>
                            <td>
                                <h5 className="my-0">{order.country}</h5>
                                <p className="mb-0 txt-muted">{order.city}</p>
                            </td>
                            <td>{order.date}</td>
                            <td>
                                <h5 className="my-0">
                                    <Badge
                                        bg=""
                                        className={classNames({
                                            'badge-info-lighten': order.orderStatus === 'In Progress',
                                            'badge-success-lighten': order.orderStatus === 'Complete',
                                            'badge-warning-lighten': order.orderStatus === 'Pending',
                                            'badge-primary-lighten': order.orderStatus === 'Delivered',
                                        })}>
                                        {order.orderStatus}
                                    </Badge>
                                </h5>
                            </td>
                            <td>
                                <Link to="#" className="action-icon">
                                    <i className="mdi mdi-square-edit-outline"></i>
                                </Link>
                                <Link to="#" className="action-icon">
                                    <i className="mdi mdi-delete"></i>
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

const OrderList = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'CRM', path: '/apps/crm/orders' },
                    { label: 'Order List', path: '/apps/crm/orders', active: true },
                ]}
                title={'Order List'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="mb-2">
                                <Col xl={8}>
                                    <Row className="gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                        <Col xs="auto">
                                            <FormInput type="text" name="search" placeholder="Search..." />
                                        </Col>
                                        <Col xs="auto">
                                            <Form.Group as={Row}>
                                                <Form.Label htmlFor="exampleEmail3" column sm={3}>
                                                    Status
                                                </Form.Label>
                                                <Col sm={9}>
                                                    <FormInput
                                                        name="select"
                                                        type="select"
                                                        className="form-select"
                                                        key="select">
                                                        <option>Choose...</option>
                                                        <option>Paid</option>
                                                        <option>Awaiting Authorization</option>
                                                        <option>Payment failed</option>
                                                        <option>Cash On Delivery</option>
                                                        <option>Fulfilled</option>
                                                        <option>Unfulfilled</option>
                                                    </FormInput>
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={4}>
                                    <div className="text-xl-end mt-xl-0 mt-2">
                                        <Button variant="danger" className="mb-2 me-2">
                                            <i className="mdi mdi-basket me-1"></i> Add New Order
                                        </Button>
                                        <Button variant="light" className="mb-2">
                                            Export
                                        </Button>
                                    </div>
                                </Col>
                            </Row>

                            <OrderDetails orderData={orderData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default OrderList;
