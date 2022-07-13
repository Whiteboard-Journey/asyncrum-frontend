import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';
import { Column } from 'react-table';
import { Table, PageTitle, CellFormatter, PageSize } from 'components';
import { Customer } from './types';
import { customers } from './data';

/* name column render */
const NameColumn = ({ row }: CellFormatter<Customer>) => {
    return (
        <div className="table-user">
            <img src={row.original.avatar} alt="" className="me-2 rounded-circle" />
            <Link to="#" className="text-body fw-semibold">
                {row.original.name}
            </Link>
        </div>
    );
};

/* status column render */
const StatusColumn = ({ row }: CellFormatter<Customer>) => {
    return (
        <span
            className={classNames('badge', {
                'badge-success-lighten': row.original.status === 'Active',
                'badge-danger-lighten': row.original.status === 'Blocked',
            })}
        >
            {row.original.status}
        </span>
    );
};

/* action column render */
const ActionColumn = ({ row }: CellFormatter<Customer>) => {
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

const columns: ReadonlyArray<Column> = [
    {
        Header: 'Customer',
        accessor: 'name',
        defaultCanSort: true,
        Cell: NameColumn,
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        defaultCanSort: true,
    },
    {
        Header: 'Email',
        accessor: 'email',
        defaultCanSort: true,
    },
    {
        Header: 'Location',
        accessor: 'location',
        defaultCanSort: true,
    },
    {
        Header: 'Created On',
        accessor: 'created_on',
        defaultCanSort: true,
    },
    {
        Header: 'Status',
        accessor: 'status',
        defaultCanSort: true,
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
        text: '25',
        value: 25,
    },
    {
        text: '50',
        value: 50,
    },
];

const Customers = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/customers' },
                    {
                        label: 'Customers',
                        path: '/apps/ecommerce/customers',
                        active: true,
                    },
                ]}
                title={'Customers'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={5}>
                                    <Button className="btn btn-danger mb-2">
                                        <i className="mdi mdi-plus-circle me-2"></i> Add Customers
                                    </Button>
                                </Col>

                                <Col sm={7}>
                                    <div className="text-sm-end">
                                        <Button className="btn btn-success mb-2 me-1">
                                            <i className="mdi mdi-cog"></i>
                                        </Button>

                                        <Button className="btn btn-light mb-2 me-1">Import</Button>

                                        <Button className="btn btn-light mb-2">Export</Button>
                                    </div>
                                </Col>
                            </Row>

                            <Table<Customer>
                                columns={columns}
                                data={customers}
                                pageSize={10}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                tableClass="table-striped"
                                searchBoxClass="mt-2 mb-3"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Customers;
