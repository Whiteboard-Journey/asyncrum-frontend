import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Column } from 'react-table';
import { PageTitle, Table, CellFormatter, PageSize } from 'components';
import { Seller } from './types';
import { sellers } from './data';

/* name column render */
const NameColumn = ({ row }: CellFormatter<Seller>) => {
    return (
        <div className="table-user">
            <img src={row.original.image} alt="" className="me-2 rounded-circle" />
            <Link to="#" className="text-body fw-semibold">
                {row.original.name}
            </Link>
        </div>
    );
};

/* revenue column render */
const RevenueColumn = ({ row }: CellFormatter<Seller>) => {
    const options: ApexOptions = {
        chart: {
            type: 'line',
            sparkline: {
                enabled: true,
            },
        },
        series: [],
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#727cf5'],
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return '';
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };

    const series = [{ name: 'data', data: [66, 95, 53, 66, 70, 41, 27, 62, 87, 69, 17] }];

    return <Chart options={options} series={series} height={35} width={80} />;
};

/* action column render */
const ActionColumn = () => {
    return (
        <>
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
        Header: 'Seller',
        accessor: 'name',
        defaultCanSort: true,
        Cell: NameColumn,
    },
    {
        Header: 'Store Name',
        accessor: 'store',
        defaultCanSort: true,
    },
    {
        Header: 'Products',
        accessor: 'products',
        defaultCanSort: true,
    },
    {
        Header: 'Wallet Balance',
        accessor: 'balance',
        defaultCanSort: true,
    },
    {
        Header: 'Created Date',
        accessor: 'created_on',
        defaultCanSort: true,
    },
    {
        Header: 'Revenue',
        accessor: 'revenue',
        Cell: RevenueColumn,
        defaultCanSort: false,
    },
    {
        Header: 'Action',
        accessor: 'action',
        defaultCanSort: false,
        Cell: ActionColumn,
    },
];

// get pagelist to display
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

const Sellers = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/sellers' },
                    { label: 'Sellers', path: '/apps/ecommerce/sellers', active: true },
                ]}
                title={'Sellers'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="mb-2">
                                <Col sm={5}>
                                    <Button variant="danger" className="mb-2">
                                        <i className="mdi mdi-plus-circle me-2"></i> Add Sellers
                                    </Button>
                                </Col>

                                <Col sm={7}>
                                    <div className="text-sm-end">
                                        <Button variant="success" className="mb-2 me-1">
                                            <i className="mdi mdi-cog"></i>
                                        </Button>

                                        <Button variant="light" className="mb-2 me-1">
                                            Import
                                        </Button>

                                        <Button variant="light" className="mb-2 me-1">
                                            Export
                                        </Button>
                                    </div>
                                </Col>
                            </Row>

                            <Table<Seller>
                                columns={columns}
                                data={sellers}
                                pageSize={10}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                tableClass="table-striped"
                                theadClass="table-light"
                                searchBoxClass="mt-2 mb-3"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Sellers;
