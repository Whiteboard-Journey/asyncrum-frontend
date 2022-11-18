import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from 'assets/images/asyncrum-logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-dark py-4">
      <Container>
        <Row>
          <Col lg={12}>
            <div>
              <p className="text-muted text-center mb-0">
                2022 © Asyncrum. by Team Whiteboard Journey in Software Maestro 13th
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
