// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Chart from 'react-apexcharts';

// components
import PageTitle from '../../../components/PageTitle';
import Table from '../../../components/Table';

// dummy data
import { sellers } from './Data';

/* name column render */
const NameColumn = ({ row }) => {
    return (
        <>
            <div className="table-user">
                <img src={row.original.image} alt="" className="me-2 rounded-circle" />
                <Link to="#" className="text-body fw-semibold">
                    {row.original.name}
                </Link>
            </div>
        </>
    );
};

/* revenue column render */
const RevenueColumn = ({ row }) => {
    const options = {
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

    return (
        <>
            <Chart options={options} series={series} height={35} width={80} />
        </>
    );
};

/* action column render */
const ActionColumn = ({ row }) => {
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
const columns = [
    {
        Header: 'Seller',
        accessor: 'name',
        sort: true,
        Cell: NameColumn,
        classes: 'table-user',
    },
    {
        Header: 'Store Name',
        accessor: 'store',
        sort: true,
    },
    {
        Header: 'Products',
        accessor: 'products',
        sort: true,
    },
    {
        Header: 'Wallet Balance',
        accessor: 'balance',
        sort: true,
    },
    {
        Header: 'Created Date',
        accessor: 'created_on',
        sort: true,
    },
    {
        Header: 'Revenue',
        accessor: 'revenue',
        Cell: RevenueColumn,
        sort: false,
    },
    {
        Header: 'Action',
        accessor: 'action',
        sort: false,
        classes: 'table-action',
        Cell: ActionColumn,
    },
];

// get pagelist to display
const sizePerPageList = [
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

// main component
const Sellers = (): React$Element<React$FragmentType> => {
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

                            <Table
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
