// @flow
import React from 'react';
import { Row, Col, Card, Pagination } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const DefaultPagination = () => {
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Default Pagination</h4>
                    <p className="text-muted font-14">
                        Simple pagination inspired by Rdio, great for apps and search results.
                    </p>
                    <Pagination>
                        <Pagination.Prev />
                        {items}
                        <Pagination.Next />
                    </Pagination>
                </Card.Body>
            </Card>
        </>
    );
};

const PaginationWithStates = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Disabled and active states</h4>
                    <p className="text-muted font-14">
                        PageItem are customizable for different circumstances. Use <code>disabled</code> prop for links
                        that appear un-clickable and <code>active</code> prop to indicate the current page.
                    </p>
                    <Pagination>
                        <Pagination.Prev disabled>Previous</Pagination.Prev>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item active>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next>Next</Pagination.Next>
                    </Pagination>
                </Card.Body>
            </Card>
        </>
    );
};

const RoundedPagination = () => {
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === 2}>
                {number}
            </Pagination.Item>
        );
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Rounded Pagination</h4>
                    <p className="text-muted font-14">
                        Add <code> .pagination-rounded</code> for rounded pagination.
                    </p>
                    <Pagination className="pagination-rounded">
                        <Pagination.Prev />
                        {items}
                        <Pagination.Next />
                    </Pagination>
                </Card.Body>
            </Card>
        </>
    );
};

const PaginationSizes = () => {
    let items = [];
    for (let number = 1; number <= 3; number++) {
        items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Sizing</h4>
                    <p className="text-muted font-14">
                        Add <code>lg</code> or <code>sm</code> type to <code>size</code> prop for additional sizes.
                    </p>

                    <Pagination size="lg">
                        <Pagination.Prev />
                        {items}
                        <Pagination.Next />
                    </Pagination>

                    <Pagination size="sm">
                        <Pagination.Prev />
                        {items}
                        <Pagination.Next />
                    </Pagination>
                </Card.Body>
            </Card>
        </>
    );
};

const PaginationWithEllipsis = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">More options</h4>
                    <p className="text-muted font-14">
                        For building more complex pagination UI, there are few convenient sub-components for adding
                        "First", "Previous", "Next", and "Last" buttons, as well as an <code>Ellipsis</code> item for
                        indicating previous or continuing results.
                    </p>

                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Card.Body>
            </Card>
        </>
    );
};

const Paginations = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/offcanvas' },
                    { label: 'Paginations', path: '/ui/paginations', active: true },
                ]}
                title={'Paginations'}
            />

            <Row>
                <Col xl={6}>
                    <DefaultPagination />
                    <PaginationWithStates />
                    <PaginationWithEllipsis />
                </Col>
                <Col xl={6}>
                    <RoundedPagination />
                    <PaginationSizes />
                </Col>
            </Row>
        </>
    );
};

export default Paginations;
