import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <Row>
          <Col md={6}>2022 © Asyncrum - Software Maestro 13th Team WBJ</Col>

          <Col md={6}>
            <div className="text-md-end footer-links d-none d-md-block">
              <Link to="#">About</Link>
              <Link to="#">Support</Link>
              <Link to="#">Contact Us</Link>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
