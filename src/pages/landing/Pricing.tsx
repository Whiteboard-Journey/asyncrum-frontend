import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PricingCard, PricingPlan } from 'components';

type PricingProps = {
  plans: PricingPlan[];
};

const Pricing = ({ plans }: PricingProps) => {
  return (
    <section id="pricing" className="py-5">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center">
              <h1 className="mt-0">
                <i className="mdi mdi-tag-multiple"></i>
              </h1>
              <h3>
                Plans and <span className="text-primary">Pricing</span>
              </h3>
              <p className="text-muted mt-2">
                The clean and well designed async/synchronous collaboration tools designed for
                <br />
                teams in multiple time zones or with flextime schedules that have difficulties having real-time meetings
              </p>
            </div>
          </Col>
        </Row>

        <PricingCard plans={plans} containerClass={'mt-5 pt-3'} />
      </Container>
    </section>
  );
};

export default Pricing;
