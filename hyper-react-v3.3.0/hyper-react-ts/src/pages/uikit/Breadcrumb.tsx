import { Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PageTitle } from 'components';

const Example = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Example</h4>
                <p className="text-muted font-14">
                    Indicate the current page’s location within a navigational hierarchy that automatically adds
                    separators via CSS. Please read the official{' '}
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        to={{ pathname: 'https://getbootstrap.com/docs/4.0/components/breadcrumb/' }}
                    >
                        Bootstrap
                    </Link>{' '}
                    documentation for more options.
                </p>

                <Breadcrumb listProps={{ className: 'mb-0' }}>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb listProps={{ className: 'mb-0' }}>
                    <Breadcrumb.Item href="/ui/breadcrumb">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Library</Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb listProps={{ className: 'mb-0' }}>
                    <Breadcrumb.Item href="/ui/breadcrumb">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/ui/breadcrumb">Library</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </Card.Body>
        </Card>
    );
};

const WithIcons = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">With Icons</h4>
                <p className="text-muted font-14">
                    Optionally you can also specify the icon with your breadcrumb item.
                </p>

                <Breadcrumb listProps={{ className: 'bg-light-lighten p-2' }}>
                    <Breadcrumb.Item active>
                        <i className="uil-home-alt"></i> Home
                    </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb listProps={{ className: 'bg-light-lighten p-2' }}>
                    <Breadcrumb.Item href="/ui/breadcrumb">
                        <i className="uil-home-alt"></i> Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Library</Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb listProps={{ className: 'bg-light-lighten p-2' }}>
                    <Breadcrumb.Item href="/ui/breadcrumb">
                        <i className="uil-home-alt"></i> Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/ui/breadcrumb">Library</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </Card.Body>
        </Card>
    );
};

const Breadcrumbs = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/breadcrumb' },
                    { label: 'Breadcrumb', path: '/ui/breadcrumb', active: true },
                ]}
                title={'Breadcrumb'}
            />
            <Row>
                <Col xl={6}>
                    <Example />
                </Col>

                <Col xl={6}>
                    <WithIcons />
                </Col>
            </Row>
        </>
    );
};

export default Breadcrumbs;
