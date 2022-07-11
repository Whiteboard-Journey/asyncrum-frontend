// @flow
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { FormInput } from '../../components';

const ContactUs = (): React$Element<any> => {
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            fullname: yup.string().required('Please enter your name'),
            emailaddress: yup.string().required('Please enter your name'),
            subject: yup.string().required('Please enter your name'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <section className="py-5 bg-light-lighten border-top border-bottom border-light">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h3>
                                Get In <span className="text-primary">Touch</span>
                            </h3>
                            <p className="text-muted mt-2">
                                Please fill out the following form and we will get back to you shortly. For more
                                <br />
                                information please contact us.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center mt-3">
                    <Col md={4}>
                        <p className="text-muted">
                            <span className="fw-bold">Customer Support:</span>
                            <br /> <span className="d-block mt-1">+1 234 56 7894</span>
                        </p>
                        <p className="text-muted mt-4">
                            <span className="fw-bold">Email Address:</span>
                            <br /> <span className="d-block mt-1">info@gmail.com</span>
                        </p>
                        <p className="text-muted mt-4">
                            <span className="fw-bold">Office Address:</span>
                            <br /> <span className="d-block mt-1">4461 Cedar Street Moro, AR 72368</span>
                        </p>
                        <p className="text-muted mt-4">
                            <span className="fw-bold">Office Time:</span>
                            <br /> <span className="d-block mt-1">9:00AM To 6:00PM</span>
                        </p>
                    </Col>
                    <Col md={8}>
                        <form onSubmit={handleSubmit()}>
                            <Row className="mt-4">
                                <Col lg={6}>
                                    <FormInput
                                        type="text"
                                        label="Your Name"
                                        name="fullname"
                                        className="form-control form-control-light"
                                        placeholder="Name..."
                                        containerClass={'mb-2'}
                                        register={register}
                                        key="fullname"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                                <Col lg={6}>
                                    <FormInput
                                        type="email"
                                        label="Your Email"
                                        name="emailaddress"
                                        className="form-control form-control-light"
                                        placeholder="Enter your email..."
                                        containerClass={'mb-2'}
                                        register={register}
                                        key="emailaddress"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-1">
                                <Col lg={12}>
                                    <FormInput
                                        type="text"
                                        label="Your Subject"
                                        name="subject"
                                        className="form-control form-control-light"
                                        placeholder="Enter subject..."
                                        containerClass={'mb-2'}
                                        register={register}
                                        key="subject"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-1">
                                <Col lg={12}>
                                    <FormInput
                                        type="textarea"
                                        label="Message"
                                        name="comments"
                                        className="form-control form-control-light"
                                        placeholder="Type your message here..."
                                        containerClass={'mb-2'}
                                        rows="4"
                                        register={register}
                                        key="comments"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col className="col-12 text-end">
                                    <button className="btn btn-primary">
                                        Send a Message <i className="mdi mdi-telegram ms-1"></i>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
