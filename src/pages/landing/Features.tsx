import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Feature } from './types';

type FeaturesProps = {
  features: Feature[];
};

const Features = ({ features }: FeaturesProps) => {
  return (
    <section id="features" className="py-5 bg-light-lighten border-top border-bottom border-light">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center">
              <h1 className="mt-0">
                <i className="mdi mdi-heart-multiple-outline"></i>
              </h1>
              <h3>
                Async/Sync <span className="text-primary">Collaboration Tools</span>
              </h3>
              <p className="text-muted mt-2">
                There are several tools for teams to use for different kinds of collaboration.
              </p>
            </div>
          </Col>
        </Row>

        {features.map((item, index) => {
          return item.id % 2 !== 0 ? (
            <Row key={index.toString()} className="mt-2 py-5 align-items-center">
              <Col lg={5} md={6}>
                <img src={item.image} className="img-fluid rounded" alt="" />
              </Col>
              <Col md={{ span: 5, offset: 1 }} lg={6}>
                <h3 className="fw-normal">{item.title}</h3>
                <p className="text-muted mt-3">{item.desc}</p>

                <div className="mt-4">
                  {item.features.map((item, index) => {
                    return (
                      <p key={index.toString()} className="text-muted">
                        <i className="mdi mdi-circle-medium text-primary"></i> {item}
                      </p>
                    );
                  })}
                </div>
              </Col>
            </Row>
          ) : (
            <Row key={index.toString()} className="pb-3 pt-5 align-items-center">
              <Col lg={6} md={5}>
                <h3 className="fw-normal">{item.title}</h3>
                <p className="text-muted mt-3">{item.desc}</p>

                <div className="mt-4">
                  {item.features.map((item, index) => {
                    return (
                      <p key={index.toString()} className="text-muted">
                        <i className="mdi mdi-circle-medium text-success"></i> {item}
                      </p>
                    );
                  })}
                </div>
              </Col>
              <Col md={{ span: 6, offset: 1 }} lg={5}>
                <img src={item.image} className="img-fluid rounded" alt="" />
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Features;
