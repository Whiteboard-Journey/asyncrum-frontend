import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Logo from 'assets/images/asyncrum-logo-cool.png';

const ErrorPageNotFound = () => {
  return (
    <>
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5} xxl={4}>
              <Card>
                {/* logo */}
                <Card.Header className="pt-4 pb-4 text-center bg-primary">
                  <Link to="/">
                    <span>
                      <img src={Logo} alt="" height="18" />
                    </span>
                  </Link>
                </Card.Header>

                <Card.Body className="p-4">
                  <div className="text-center">
                    <h1 className="text-error">
                      4<i className="mdi mdi-emoticon-sad"></i>4
                    </h1>
                    <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                    <p className="text-muted mt-3">
                      It&apos;s looking like you may have taken a wrong turn. Don&apos;t worry... it happens to the best
                      of us. Here&apos;s a little tip that might help you get back on track.
                    </p>

                    <Link className="btn btn-info mt-3" to="/">
                      <i className="mdi mdi-reply"></i> Return Home
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <footer className="footer footer-alt">
        2022{new Date().getFullYear()} © Asyncrum - Software Maestro 13th Team Whiteboard Journey
      </footer>
    </>
  );
};

export default ErrorPageNotFound;
