import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';
import { Column } from 'react-table';
import { Table, PageTitle, CellFormatter, PageSize } from 'components';
import { Order } from './types';
import { useOrders } from './hooks';

/* order column render */
const OrderColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <Link to="#" className="text-body fw-bold">
            #BM{row.original.order_id}
        </Link>
    );
};

/* orderdate column render */
const OrderDateColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <>
            {row.original.order_date} <small className="text-muted">{row.original.order_time}</small>
        </>
    );
};

/* payment column render */
const PaymentStatusColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <h5>
            <span
                className={classNames('badge', {
                    'badge-success-lighten': row.original.payment_status === 'Paid',
                    'badge-danger-lighten': row.original.payment_status === 'Payment Failed',
                    'badge-info-lighten': row.original.payment_status === 'Unpaid',
                    'badge-warning-lighten': row.original.payment_status === 'Awaiting Authorization',
                })}
            >
                {row.original.payment_status === 'Paid' && <i className="mdi mdi-bitcoin me-1"></i>}
                {row.original.payment_status === 'Payment Failed' && <i className="mdi mdi-cancel me-1"></i>}
                {row.original.payment_status === 'Unpaid' && <i className="mdi mdi-cash me-1"></i>}
                {row.original.payment_status === 'Awaiting Authorization' && (
                    <i className="mdi mdi-timer-sand me-1"></i>
                )}
                {row.original.payment_status}
            </span>
        </h5>
    );
};

/* status column render */
const StatusColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <h5>
            <span
                className={classNames('badge', {
                    'badge-success-lighten': row.original.order_status === 'Delivered',
                    'badge-danger-lighten': row.original.order_status === 'Cancelled',
                    'badge-info-lighten': row.original.order_status === 'Shipped',
                    'badge-warning-lighten': row.original.order_status === 'Processing',
                })}
            >
                {row.original.order_status}
            </span>
        </h5>
    );
};

/* action column render */
const ActionColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <>
            <Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-eye"></i>
            </Link>
            <Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-square-edit-outline"></i>
            </Link>
            <Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-delete"></i>
            </Link>
        </>
    );
};

// get all columns
const columns: ReadonlyArray<Column> = [
    {
        Header: 'Order ID',
        accessor: 'order_id',
        defaultCanSort: true,
        Cell: OrderColumn,
    },
    {
        Header: 'Date',
        accessor: 'order_date',
        defaultCanSort: false,
        Cell: OrderDateColumn,
    },
    {
        Header: 'Payment Status',
        accessor: 'payment_status',
        defaultCanSort: false,
        Cell: PaymentStatusColumn,
    },
    {
        Header: 'Total',
        accessor: 'total',
        defaultCanSort: false,
    },
    {
        Header: 'Payment Method',
        accessor: 'payment_method',
        defaultCanSort: false,
    },
    {
        Header: 'Status',
        accessor: 'order_status',
        defaultCanSort: false,
        Cell: StatusColumn,
    },
    {
        Header: 'Action',
        accessor: 'action',
        defaultCanSort: false,
        Cell: ActionColumn,
    },
];

const sizePerPageList: PageSize[] = [
    {
        text: '10',
        value: 10,
    },
    {
        text: '20',
        value: 20,
    },
    {
        text: '50',
        value: 50,
    },
];

const Orders = () => {
    const { orderList, changeOrderStatusGroup } = useOrders();

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/orders' },
                    { label: 'Orders', path: '/apps/ecommerce/orders', active: true },
                ]}
                title={'Orders'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="mb-2">
                                <Col xl={8}>
                                    <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                        <div className="col-auto">
                                            <div className="d-flex align-items-center w-auto">
                                                <label htmlFor="status-select" className="me-2">
                                                    Status
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="status-select"
                                                    onChange={(e) => changeOrderStatusGroup(e.target.value)}
                                                >
                                                    <option value="All">All</option>
                                                    <option value="Paid">Paid</option>
                                                    <option value="Authorization">Awaiting Authorization</option>
                                                    <option value="Failed">Payment failed</option>
                                                    <option value="Unpaid">Unpaid</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </Col>

                                <Col xl={4}>
                                    <div className="text-lg-end mt-xl-0 mt-2">
                                        <Button variant="danger" className="mb-2 me-2">
                                            <i className="mdi mdi-basket me-1"></i> Add New Order
                                        </Button>
                                        <Button variant="light" className="mb-2">
                                            Export
                                        </Button>
                                    </div>
                                </Col>
                            </Row>

                            <Table<Order>
                                columns={columns}
                                data={orderList}
                                pageSize={10}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                theadClass="table-light"
                                searchBoxClass="mb-2"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Orders;
