import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

export type PricingPlan = {
    id: number;
    name: string;
    icon: string;
    price: string;
    duration: string;
    features: Array<string>;
    isRecommended: boolean;
};

type PricingCardProps = {
    plans: Array<PricingPlan>;
    containerClass?: string;
};

const PricingCard = ({ plans, containerClass }: PricingCardProps) => {
    return (
        <Row className={containerClass}>
            {plans.map((plan, index) => {
                return (
                    <Col md={4} key={index.toString()}>
                        <Card
                            className={classNames('card-pricing', {
                                'card-pricing-recommended': plan.isRecommended,
                            })}
                        >
                            <Card.Body className="text-center">
                                {plan.isRecommended && <div className="card-pricing-plan-tag">Recommended</div>}
                                <p className="card-pricing-plan-name fw-bold text-uppercase">{plan.name}</p>
                                <i className={classNames('card-pricing-icon', plan.icon, 'text-primary')}></i>
                                <h2 className="card-pricing-price">
                                    {plan.price} <span>/ {plan.duration}</span>
                                </h2>
                                <ul className="card-pricing-features">
                                    {plan.features.map((feature, index1) => {
                                        return <li key={index1.toString()}>{feature}</li>;
                                    })}
                                </ul>
                                <button className="btn btn-primary mt-4 mb-2 btn-rounded">Choose Plan</button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export { PricingCard };
