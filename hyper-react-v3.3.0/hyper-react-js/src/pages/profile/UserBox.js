// @flow
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

// images
import profileImg from '../../assets/images/users/avatar-2.jpg';

const UserBox = (): React$Element<any> => {
    return (
        <Card className="bg-primary">
            <Card.Body className="profile-user-box">
                <Row>
                    <Col sm={8}>
                        <Row className="align-items-center">
                            <Col className="col-auto">
                                <div className="avatar-lg">
                                    <img
                                        src={profileImg}
                                        style={{ height: '100px' }}
                                        alt=""
                                        className="rounded-circle img-thumbnail"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h4 className="mt-1 mb-1 text-white">Michael Franklin</h4>
                                    <p className="font-13 text-white-50"> Authorised Brand Seller</p>

                                    <ul className="mb-0 list-inline text-light">
                                        <li className="list-inline-item me-3">
                                            <h5 className="mb-1 text-white">$ 25,184</h5>
                                            <p className="mb-0 font-13 text-white-50">Total Revenue</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-1 text-white">5482</h5>
                                            <p className="mb-0 font-13 text-white-50">Number of Orders</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={4}>
                        <div className="text-center mt-sm-0 mt-3 text-sm-end">
                            <button type="button" className="btn btn-light">
                                <i className="mdi mdi-account-edit me-1"></i> Edit Profile
                            </button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default UserBox;
