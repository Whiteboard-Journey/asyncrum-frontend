// @flow
import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

// components
import { FormInput } from '../../../../components/';

// images
import paypalImg from '../../../../assets/images/payments/paypal.png';
import payoneerImg from '../../../../assets/images/payments/payoneer.png';
import cashImg from '../../../../assets/images/payments/cod.png';
import masterCardImg from '../../../../assets/images/payments/master.png';
import discoverImg from '../../../../assets/images/payments/discover.png';
import visaCardImg from '../../../../assets/images/payments/visa.png';
import stripeImg from '../../../../assets/images/payments/stripe.png';

// Payment
const Payment = (): React$Element<React$FragmentType> => {
    const methods = useForm();
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <>
            <Row>
                <Col>
                    <h4 className="mt-2">Payment Selection</h4>
                    <p className="text-muted mb-4">Fill the form below in order to send you the order's invoice.</p>

                    <div className="border p-3 mb-3 rounded">
                        <Row>
                            <Col sm={8}>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="BillingOptRadio2"
                                        name="billingOptions"
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label font-16 fw-bold" htmlFor="BillingOptRadio2">
                                        Pay with Paypal
                                    </label>
                                </div>
                                <p className="mb-0 ps-3 pt-1">
                                    You will be redirected to PayPal website to complete your purchase securely.
                                </p>
                            </Col>
                            <Col sm={4} className="text-sm-end mt-3 mt-sm-0">
                                <img src={paypalImg} height="25" alt="paypal-img" />
                            </Col>
                        </Row>
                    </div>

                    <div className="border p-3 mb-3 rounded">
                        <Row>
                            <Col sm={8}>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="BillingOptRadio1"
                                        name="billingOptions"
                                        className="form-check-input"
                                        defaultChecked
                                    />
                                    <label className="form-check-label font-16 fw-bold" htmlFor="BillingOptRadio1">
                                        Credit / Debit Card
                                    </label>
                                </div>
                                <p className="mb-0 ps-3 pt-1">
                                    Safe money transfer using your bank account. We support Mastercard, Visa, Discover
                                    and Stripe.
                                </p>
                            </Col>
                            <Col sm={4} className="text-sm-end mt-3 mt-sm-0">
                                <img src={masterCardImg} height="24" alt="master-card-img" />
                                <img src={discoverImg} height="24" alt="discover-card-img" />
                                <img src={visaCardImg} height="24" alt="visa-card-img" />
                                <img src={stripeImg} height="24" alt="stripe-card-img" />
                            </Col>
                        </Row>

                        <form onSubmit={handleSubmit()} className="mt-4" noValidate>
                            <Row>
                                <Col>
                                    <FormInput
                                        name="card-number"
                                        label="Card Number"
                                        type="text"
                                        placeholder="e.g. 4242 4242 4242 4242"
                                        containerClass={'mb-3'}
                                        register={register}
                                        key="notes"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <FormInput
                                        name="name"
                                        label="Name on Card"
                                        type="text"
                                        placeholder="Enter your name"
                                        containerClass={'mb-3'}
                                        register={register}
                                        key="notes"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                                <Col md={3}>
                                    <div className="mb-3">
                                        <label className="form-label">Expiry date</label>
                                        <MaskedInput
                                            mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                                            placeholder="MM/YY"
                                            className="form-control"
                                        />
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="mb-3">
                                        <label className="form-label">CVV</label>
                                        <MaskedInput
                                            mask={[/\d/, /\d/, /\d/]}
                                            placeholder="xxx"
                                            className="form-control"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>

                    <div className="border p-3 mb-3 rounded">
                        <Row>
                            <Col sm={8}>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="BillingOptRadio3"
                                        name="billingOptions"
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label font-16 fw-bold" htmlFor="BillingOptRadio3">
                                        Pay with Payoneer
                                    </label>
                                </div>
                                <p className="mb-0 ps-3 pt-1">
                                    You will be redirected to Payoneer website to complete your purchase securely.
                                </p>
                            </Col>
                            <Col sm={4} className="text-sm-end mt-3 mt-sm-0">
                                <img src={payoneerImg} height="30" alt="payoneer-img" />
                            </Col>
                        </Row>
                    </div>

                    <div className="border p-3 mb-3 rounded">
                        <Row>
                            <Col sm={8}>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="BillingOptRadio4"
                                        name="billingOptions"
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label font-16 fw-bold" htmlFor="BillingOptRadio4">
                                        Cash on Delivery
                                    </label>
                                </div>
                                <p className="mb-0 ps-3 pt-1">Pay with cash when your order is delivered.</p>
                            </Col>
                            <Col sm={4} className="text-sm-end mt-3 mt-sm-0">
                                <img src={cashImg} height="22" alt="cash-img" />
                            </Col>
                        </Row>
                    </div>

                    <Row className="mt-4">
                        <Col sm={6}>
                            <Link
                                to="/apps/ecommerce/shopping-cart"
                                className="btn text-muted d-none d-sm-inline-block btn-link fw-semibold">
                                <i className="mdi mdi-arrow-left"></i> Back to Shopping Cart{' '}
                            </Link>
                        </Col>
                        <Col sm={6} className="text-sm-end">
                            <Button variant="danger" type="submit">
                                <i className="mdi mdi-cash-multiple me-1"></i> Complete Order
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Payment;
