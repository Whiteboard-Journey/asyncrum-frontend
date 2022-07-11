// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

type PlansItems = {
    id: number,
    name: string,
    icon: string,
    price: string,
    duration: string,
    features: Array<string>,
    isRecommended: boolean,
};

type PricingCardProps = {
    plans: Array<PlansItems>,
    containerClass?: string,
};

const PricingCard = ({ plans, containerClass }: PricingCardProps): React$Element<any> => {
    return (
        <>
            <Row className={containerClass}>
                {plans.map((plan, idx) => {
                    return (
                        <Col md={4} key={idx}>
                            <Card
                                className={classNames('card-pricing', {
                                    'card-pricing-recommended': plan.isRecommended,
                                })}>
                                <Card.Body className="text-center">
                                    {plan.isRecommended && <div className="card-pricing-plan-tag">Recommended</div>}
                                    <p className="card-pricing-plan-name fw-bold text-uppercase">{plan.name}</p>
                                    <i className={classNames('card-pricing-icon', plan.icon, 'text-primary')}></i>
                                    <h2 className="card-pricing-price">
                                        {plan.price} <span>/ {plan.duration}</span>
                                    </h2>
                                    <ul className="card-pricing-features">
                                        {plan.features.map((feature, idx1) => {
                                            return <li key={idx1}>{feature}</li>;
                                        })}
                                    </ul>
                                    <button className="btn btn-primary mt-4 mb-2 btn-rounded">Choose Plan</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default PricingCard;
