import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from 'assets/images/startup.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <div className="mt-md-4">
                            <div>
                                <Badge pill bg="danger">
                                    {' '}
                                    New{' '}
                                </Badge>
                                <span className="text-white-50 ms-1">Welcome to new landing page</span>
                            </div>
                            <h2 className="text-white fw-normal mb-4 mt-3 hero-title">
                                Asyncrum
                            </h2>

                            <p className="mb-4 font-16 text-white-50">
                                Asyncrum
                            </p>

                            <Link to="#" target="_blank" className="btn btn-success">
                                Preview <i className="mdi mdi-arrow-right ms-1"></i>
                            </Link>
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <div className="text-md-end mt-3 mt-md-0">
                            <img src={image1} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
