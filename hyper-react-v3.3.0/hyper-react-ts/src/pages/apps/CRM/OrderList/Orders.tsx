import { Link } from 'react-router-dom';
import { Badge, Form, Table } from 'react-bootstrap';
import classNames from 'classnames';
import { Order } from './types';

type OrdersProps = {
    orderData: Array<Order>;
};

const Orders = ({ orderData }: OrdersProps) => {
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
                {(orderData || []).map((order, index) => {
                    return (
                        <tr key={index.toString()}>
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
                                        })}
                                    >
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

export default Orders;
