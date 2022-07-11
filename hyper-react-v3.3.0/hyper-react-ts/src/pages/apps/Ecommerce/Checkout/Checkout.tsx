import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import classnames from 'classnames';
import { PageTitle } from 'components';
import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';
import Summary from './Summary';
import { useCheckout } from '../hooks';

const Checkout = () => {
    const { cart, updateShipping } = useCheckout();

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/checkout' },
                    { label: 'Checkout', path: '/apps/ecommerce/checkout', active: true },
                ]}
                title={'Checkout'}
            />
            <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="1" className="nav-link rounded-0">
                                            <i className={classnames('mdi mdi-account-circle', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Billing Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="2" className="nav-link rounded-0">
                                            <i className={classnames('mdi mdi-truck-fast', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Shipping Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link href="#" eventKey="3" className="nav-link rounded-0">
                                            <i className={classnames('mdi mdi-cash-multiple', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Payment Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Row>
                                    <Col lg={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Billing />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Shipping updateShipping={updateShipping} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <Payment />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col lg={4}>
                                        <Summary cart={cart} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export { Checkout };
