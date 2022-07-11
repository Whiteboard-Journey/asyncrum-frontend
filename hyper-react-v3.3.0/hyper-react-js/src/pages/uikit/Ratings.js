// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';

// components
import PageTitle from '../../components/PageTitle';

const Ratings = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Extended UI', path: '/ui/ratings' },
                    { label: 'Ratings', path: '/ui/ratings', active: true },
                ]}
                title={'Ratings'}
            />

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Default Rating</h4>
                            <p className="text-muted font-14"></p>

                            <Rating
                                initialRating={2}
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                            />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Readonly Rating</h4>
                            <p className="text-muted font-14"></p>

                            <Rating
                                initialRating={2.5}
                                readonly
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Different Icons</h4>

                            <Rating
                                initialRating={2}
                                emptySymbol="mdi mdi-thumb-down font-22 text-muted"
                                fullSymbol="mdi mdi-thumb-up font-22 text-success"
                            />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Size</h4>

                            <Rating
                                initialRating={2.5}
                                emptySymbol="mdi mdi-star-outline font-16 text-muted"
                                fullSymbol="mdi mdi-star font-16 text-warning"
                            />

                            <Rating
                                initialRating={2.5}
                                className="ms-3"
                                emptySymbol="mdi mdi-star-outline font-24 text-muted"
                                fullSymbol="mdi mdi-star font-24 text-warning"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Fractional Rating</h4>

                            <Rating
                                initialRating={2}
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                                fractions={2}
                            />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Readonly Fractional Rating</h4>
                            <p className="text-muted font-14"></p>

                            <Rating
                                initialRating={2.5}
                                readonly
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Ratings;
