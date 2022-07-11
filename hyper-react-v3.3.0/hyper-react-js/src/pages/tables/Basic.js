// @flow
import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../components/PageTitle';

// dummy records
const records = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { id: 3, firstName: 'Dave', lastName: 'G', username: '@dave' },
    { id: 4, firstName: 'Nik', lastName: 'N', username: '@nikn' },
    { id: 5, firstName: 'Shreyu', lastName: 'Navadiya', username: '@sn' },
];

const BasicTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Basic example</h4>
                <p className="text-muted font-14">
                    Just use <code>Table</code> element
                </p>

                <Table className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const InverseTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Inverse Table</h4>
                <p className="text-muted font-14">
                    You can also invert the colors—with light text on dark backgrounds—by specifying <code>dark</code>{' '}
                    attribute
                </p>

                <Table className="mb-0" variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const StripedRowsTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Striped Rows</h4>
                <p className="text-muted font-14">
                    Add <code>striped</code> attribute to table
                </p>

                <Table className="mb-0" striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const TableHeadOption = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Table head options</h4>
                <p className="text-muted font-14">
                    Use one of two modifier classes to make <code>&lt;thead&gt;</code>s appear light or dark gray.
                </p>

                <Table className="table-centered mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const BorderedTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bordered table</h4>
                <p className="text-muted font-14">
                    Add <code>bordered</code> attribute for borders on all sides of the table and cells.
                </p>

                <Table className="mb-0" bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                    <td className="table-action text-center">
                                        <Link to="#" className="action-icon">
                                            <i className="mdi mdi-delete"></i>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const BorderedColorTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bordered table</h4>
                <p className="text-muted font-14">
                    Add <code>.table-bordered</code> & <code>.border-primary</code> can be added to change colors.
                </p>

                <Table className="mb-0 border-primary table-centered" bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                    <td className="table-action text-center">
                                        <Link to="#" className="action-icon">
                                            <i className="mdi mdi-delete"></i>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const HoverableTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Hoverable Rows</h4>
                <p className="text-muted font-14">
                    Add <code>hover</code> attribute to enable a hover state on table rows
                </p>

                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const SmallTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Small table</h4>
                <p className="text-muted font-14">
                    Add <code>size="sm"</code> attribute to make tables more compact by cutting cell padding in half
                </p>

                <Table className="mb-0" size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const ResponsiveTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Always responsive</h4>
                <p className="text-muted font-14">
                    Across every breakpoint, use <code>responsive</code> attribute to create responsive tables
                </p>

                <Table className="mb-0" responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const Tables = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tables', path: '/ui/tables/basic' },
                    { label: 'Basic Tables', path: '/ui/tables/basic', active: true },
                ]}
                title={'Basic Tables'}
            />

            <Row>
                <Col xl={6}>
                    <BasicTable />
                </Col>

                <Col xl={6}>
                    <InverseTable />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <StripedRowsTable />
                </Col>

                <Col xl={6}>
                    <TableHeadOption />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <HoverableTable />
                </Col>

                <Col xl={6}>
                    <SmallTable />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <BorderedTable />
                </Col>

                <Col xl={6}>
                    <BorderedColorTable />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <ResponsiveTable />
                </Col>
            </Row>
        </>
    );
};

export default Tables;
