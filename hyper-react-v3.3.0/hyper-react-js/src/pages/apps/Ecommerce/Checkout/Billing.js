// @flow
import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';

// components
import { FormInput } from '../../../../components/';

// dafault data
import { countries } from './Data';

// Billing
const Billing = (): React$Element<React$FragmentType> => {
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            billing_firstname: yup.string().required('Please enter firstname'),
            billing_lastname: yup.string().required('Please enter lastname'),
            billing_email: yup.string().required('Please enter Email address'),
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
        <>
            <Row>
                <Col>
                    <h4 className="mt-2">Billing information</h4>
                    <p className="text-muted mb-4">Fill the form below in order to send you the order's invoice.</p>

                    <form onSubmit={handleSubmit()}>
                        <Row>
                            <Col md={6}>
                                <FormInput
                                    label="First Name"
                                    type="text"
                                    name="billing_firstname"
                                    placeholder="Enter your first name"
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="firstname"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                            <Col md={6}>
                                <FormInput
                                    label="Last Name"
                                    type="text"
                                    name="billing_lastname"
                                    placeholder="Enter your last name"
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="lastname"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormInput
                                    label="Email address"
                                    type="email"
                                    name="billing_email"
                                    placeholder="Enter your email"
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="email"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                            <Col md={6}>
                                <div className="form-group mb-3">
                                    <label className="form-label">Phone</label>
                                    <MaskedInput
                                        mask={[
                                            '(',
                                            /[1-9]/,
                                            /\d/,
                                            /\d/,
                                            ')',
                                            ' ',
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            '-',
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                        ]}
                                        placeholder="(xxx) xxxx-xxxx"
                                        className="form-control"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormInput
                                    label="Address"
                                    type="text"
                                    name="billing_address"
                                    placeholder="Enter your state"
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="address"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormInput
                                    label="Town / City"
                                    type="text"
                                    name="billing_towncity"
                                    placeholder="Enter your city name"
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="towncity"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                            <Col md={4}>
                                <FormInput
                                    label="State"
                                    type="text"
                                    name="billing_state"
                                    placeholder="Enter your state"
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="state"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                            <Col md={4}>
                                <FormInput
                                    label="Zip / Postal Code"
                                    type="text"
                                    name="billing_zippostal"
                                    placeholder="Enter your zip code"
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="zippostal"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="form-group mb-3">
                                    <label className="form-label">Country</label>
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        options={countries}></Select>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormInput
                                    label="Order Notes:"
                                    type="textarea"
                                    rows="3"
                                    name="billing_notes"
                                    placeholder="Write some note.."
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="notes"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Link
                                    to="/apps/ecommerce/shopping-cart"
                                    className="btn text-muted d-none d-sm-inline-block btn-link fw-semibold">
                                    <i className="mdi mdi-arrow-left"></i> Back to Shopping Cart{' '}
                                </Link>
                            </Col>
                            <Col sm={6} className="text-sm-end">
                                <Button variant="danger" type="submit">
                                    <i className="mdi mdi-truck-fast me-1"></i> Proceed to Shipping
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </>
    );
};

export default Billing;
