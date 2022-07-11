// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardGroup, ListGroup } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';
import Portlet from '../../components/Portlet';

// images
import cardImg from '../../assets/images/small/small-1.jpg';
import cardImg2 from '../../assets/images/small/small-4.jpg';
import cardImg3 from '../../assets/images/small/small-2.jpg';
import cardImg4 from '../../assets/images/small/small-3.jpg';

const CardWithImage = () => {
    return (
        <Card className="d-block">
            <Card.Img src={cardImg} />
            <Card.Body>
                <Card.Title as="h5">Card title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content. Some
                    quick example text to build on the card title and make up.
                </Card.Text>
                <button className="btn btn-primary">Button</button>
            </Card.Body>
        </Card>
    );
};

const CardWithImage2 = () => {
    return (
        <Card className="d-block">
            <Card.Img src={cardImg3} />
            <Card.Body>
                <Card.Title as="h5">Card title</Card.Title>
                <Card.Text>Some quick example text to build on the card..</Card.Text>
            </Card.Body>

            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
            </ListGroup>

            <Card.Body>
                <Card.Link href="#">Card link</Card.Link>
                <Card.Link href="#">Another link</Card.Link>
            </Card.Body>
        </Card>
    );
};

const CardWithImage3 = () => {
    return (
        <Card className="d-block">
            <Card.Img src={cardImg4} />
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content. Some
                    quick example text to build on the card title and make up.
                </Card.Text>
                <button className="btn btn-primary">Button</button>
            </Card.Body>
        </Card>
    );
};

const CardWithTitleAndImage = () => {
    return (
        <Card>
            <Card.Body className="d-block">
                <Card.Title as="h5">Card title</Card.Title>
                <Card.Subtitle as="h6" className="text-muted">
                    Support card subtitle
                </Card.Subtitle>
            </Card.Body>
            <Card.Img src={cardImg2} className="img-fluid" />
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card link</Card.Link>
                <Card.Link href="#">Another link</Card.Link>
            </Card.Body>
        </Card>
    );
};

const CardWithSpecialTitle = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as="h5">Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <button className="btn btn-primary w-100">Go somewhere</button>
            </Card.Body>
        </Card>
    );
};

const CardWithHeader = () => {
    return (
        <Card>
            <Card.Header as="h6">Featured</Card.Header>
            <Card.Body>
                <Card.Title as="h5">Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <button className="btn btn-primary mt-1">Go somewhere</button>
            </Card.Body>
        </Card>
    );
};

const CardWithHeaderAndQuote = () => {
    return (
        <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
                <blockquote className="card-bodyquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
            </Card.Body>
            <Card.Footer>
                Someone famous in <cite title="Source Title">Source Title</cite>
            </Card.Footer>
        </Card>
    );
};

const CardWithHeaderAndFooter = () => {
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <button className="btn btn-primary mt-1">Go somewhere</button>
            </Card.Body>
            <Card.Footer>2 days ago</Card.Footer>
        </Card>
    );
};

const ColoredCards = () => {
    const colors = ['secondary', 'primary', 'success', 'info', 'warning', 'danger'];

    return (
        <>
            {colors.map((color, index) => {
                return (
                    <Col lg={4} sm={6} key={index}>
                        <Card className={classNames('text-white', 'bg-' + color)}>
                            <Card.Body>
                                <Card.Title as="h5">Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    ante.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </>
    );
};

const BorderdCards = () => {
    const colors = ['secondary', 'primary', 'success'];

    return (
        <>
            {colors.map((color, index) => {
                return (
                    <Col md={4} key={index}>
                        <Card className={classNames('border', [`border-${color}`])}>
                            <Card.Body>
                                <Card.Title as="h5">Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <button className={classNames('btn', 'btn-sm', [`btn-${color}`])}>Button</button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </>
    );
};

const HorizontalCards = () => {
    return (
        <Card>
            <Row className="g-0 align-items-center">
                <Col md={4}>
                    <Card.Img src={cardImg2} className="img-fluid" />
                </Col>

                <Col md={8}>
                    <Card.Body>
                        <Card.Title as="h5">Card Title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

const StretchedLinks = () => {
    const colors = ['primary', 'info'];
    return (
        <>
            {colors.map((color, index) => {
                return (
                    <Col key={index} sm={6} lg={3}>
                        <Card>
                            <Card.Img src={cardImg} />
                            <Card.Body>
                                <Card.Title as="h5">Card with stretched link</Card.Title>
                                <button className={classNames('btn', 'stretched-link', 'mt-2', [`btn-${color}`])}>
                                    Go somewhere
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
            {colors.map((color, index) => {
                return (
                    <Col key={index} sm={6} lg={3}>
                        <Card>
                            <Card.Img src={cardImg} />
                            <Card.Body>
                                <Card.Title as="h5">
                                    <Link to="#" className={classNames('stretched-link', [`text-${color}`])}>
                                        Card with stretched link
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </>
    );
};

const CardsGroup = () => {
    return (
        <CardGroup>
            <CardWithImage2 />
            <CardWithImage2 />
            <CardWithImage2 />
        </CardGroup>
    );
};

const CardsDeck = () => {
    return (
        <Row className="row-cols-1 row-cols-md-3 g-3">
            <Col>
                <CardWithImage2 />
            </Col>
            <Col>
                <CardWithImage2 />
            </Col>
            <Col>
                <CardWithImage2 />
            </Col>
        </Row>
    );
};

const Cards = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/cards' },
                    { label: 'Cards', path: '/ui/cards', active: true },
                ]}
                title={'Cards'}
            />

            <Row>
                <Col sm={6} lg={3}>
                    <CardWithImage />
                </Col>

                <Col sm={6} lg={3}>
                    <CardWithImage2 />
                </Col>

                <Col sm={6} lg={3}>
                    <CardWithImage3 />
                </Col>

                <Col sm={6} lg={3}>
                    <CardWithTitleAndImage />
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <CardWithSpecialTitle />
                </Col>
                <Col sm={6}>
                    <CardWithSpecialTitle />
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <CardWithHeader />
                </Col>

                <Col md={4}>
                    <CardWithHeaderAndQuote />
                </Col>

                <Col md={4}>
                    <CardWithHeaderAndFooter />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <h4 className="mb-4">Card Colored</h4>
                </Col>
            </Row>

            <Row>
                <ColoredCards />
            </Row>

            <Row>
                <Col xs={12}>
                    <h4 className="mb-4">Card Bordered</h4>
                </Col>
            </Row>

            <Row>
                <BorderdCards />
            </Row>

            <Row>
                <Col xs={12}>
                    <h4 className="mb-4">Horizontal Card</h4>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <HorizontalCards />
                </Col>
                <Col lg={6}>
                    <HorizontalCards />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <h4 className="mt-4 mb-4">Stretched link</h4>
                </Col>
            </Row>

            <Row>
                <StretchedLinks color="primary" />
            </Row>

            <Row>
                <Col xs={12}>
                    <h4 className="mb-4">Card Group</h4>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <CardsGroup />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <h4 className="mb-4 mt-4">Card Decks</h4>
                </Col>
                <Col xs={12}>
                    <CardsDeck />
                </Col>
            </Row>

            <Row>
                <Col>
                    <h4 className="mb-4 mt-4">Custom Card Portlets</h4>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Portlet className="mb-md-0 mb-3">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </p>
                    </Portlet>
                </Col>

                <Col md={4}>
                    <Portlet className="bg-primary text-white mb-md-0 mb-3">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </p>
                    </Portlet>
                </Col>

                <Col md={4}>
                    <Portlet className="bg-success text-white mb-0">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </p>
                    </Portlet>
                </Col>
            </Row>
        </>
    );
};

export default Cards;
