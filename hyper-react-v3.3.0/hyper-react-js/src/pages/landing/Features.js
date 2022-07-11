// @flow
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type FeaturesProps = {
    features: {
        id: number,
        title: string,
        desc: string,
        image: string,
        features: string[],
    }[],
};

const Features = ({ features }: FeaturesProps): React$Element<React$FragmentType> => {
    return (
        <>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h1 className="mt-0">
                                    <i className="mdi mdi-heart-multiple-outline"></i>
                                </h1>
                                <h3>
                                    Features you'll <span className="text-danger">love</span>
                                </h3>
                                <p className="text-muted mt-2">
                                    Hyper comes with next generation ui design and have multiple benefits
                                </p>
                            </div>
                        </Col>
                    </Row>

                    {features.map((item, index) => {
                        return item.id % 2 !== 0 ? (
                            <Row key={index} className="mt-2 py-5 align-items-center">
                                <Col lg={5} md={6}>
                                    <img src={item.image} className="img-fluid" alt="" />
                                </Col>
                                <Col md={{ span: 5, offset: 1 }} lg={6}>
                                    <h3 className="fw-normal">{item.title}</h3>
                                    <p className="text-muted mt-3">{item.desc}</p>

                                    <div className="mt-4">
                                        {item.features.map((item, index) => {
                                            return (
                                                <p key={index} className="text-muted">
                                                    <i className="mdi mdi-circle-medium text-primary"></i> {item}
                                                </p>
                                            );
                                        })}
                                    </div>
                                    <Link to="#" className="btn btn-primary btn-rounded mt-3">
                                        Read More <i className="mdi mdi-arrow-right ms-1"></i>
                                    </Link>
                                </Col>
                            </Row>
                        ) : (
                            <Row key={index} className="pb-3 pt-5 align-items-center">
                                <Col lg={6} md={5}>
                                    <h3 className="fw-normal">{item.title}</h3>
                                    <p className="text-muted mt-3">{item.desc}</p>

                                    <div className="mt-4">
                                        {item.features.map((item, index) => {
                                            return (
                                                <p key={index} className="text-muted">
                                                    <i className="mdi mdi-circle-medium text-success"></i> {item}
                                                </p>
                                            );
                                        })}
                                    </div>
                                    <Link to="#" className="btn btn-success btn-rounded mt-3">
                                        Read More <i className="mdi mdi-arrow-right ms-1"></i>
                                    </Link>
                                </Col>
                                <Col md={{ span: 6, offset: 1 }} lg={5}>
                                    <img src={item.image} className="img-fluid" alt="" />
                                </Col>
                            </Row>
                        );
                    })}
                </Container>
            </section>
        </>
    );
};

export default Features;
