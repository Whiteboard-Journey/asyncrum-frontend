// @flow
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// components
import PricingCard from '../../components/PricingCard';

type PricingProps = {
    plans: {
        id: number,
        name: string,
        icon: string,
        price: string,
        duration: string,
        features: string[],
        isRecommended: boolean,
    }[],
};

const Pricing = ({ plans }: PricingProps): React$Element<React$FragmentType> => {
    return (
        <>
            <section className="py-5 bg-light-lighten border-top border-bottom border-light">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h1 className="mt-0">
                                    <i className="mdi mdi-tag-multiple"></i>
                                </h1>
                                <h3>
                                    Choose Simple <span className="text-primary">Pricing</span>
                                </h3>
                                <p className="text-muted mt-2">
                                    The clean and well commented code allows easy customization of the theme.It's
                                    designed for
                                    <br />
                                    describing your app, agency or business.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <PricingCard plans={plans} containerClass={'mt-5 pt-3'} />
                </Container>
            </section>
        </>
    );
};

export default Pricing;
