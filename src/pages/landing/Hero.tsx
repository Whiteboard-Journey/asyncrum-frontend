import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from 'assets/images/startup.svg';
import logo from 'assets/images/asyncrum-logo-white.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <div className="mt-md-4">
              <h2 className="text-white fw-normal mb-4 mt-3 hero-title">
                <img src={logo} alt="" className="logo-dark" height="50" />
              </h2>

              <p className="mb-4 font-16 text-white-50">
                A collaborative software for distributed teams.
                <br />
                <br />
                For those teams in multiple time zones or with flextime schedules that have difficulties having
                real-time meetings, Asyncrum aims to provide an asynchronous collaboration tool with a review-based
                daily standups and collaborative whiteboard.
              </p>

              <Link to="/dashboard" className="btn btn-primary">
                Get Started <i className="mdi mdi-arrow-right ms-1"></i>
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
