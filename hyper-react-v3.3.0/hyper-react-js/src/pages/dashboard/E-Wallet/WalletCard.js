// @flow
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import cardBg from '../../../assets/images/bg-pattern.png';

const WalletCard = (): React$Element<any> => {
    return (
        <Card className="bg-primary card-bg-img" style={{ backgroundImage: `url(${cardBg})` }}>
            <Card.Body>
                <span className="float-end text-white-50 display-5 mt-n1">
                    <i className="mdi mdi-contactless-payment"></i>
                </span>
                <h4 className="text-white">Dominic Keller</h4>
                <div className="row align-items-center mt-4">
                    <div className="col-3 text-white font-12">
                        <i className="mdi mdi-circle"></i> <i className="mdi mdi-circle"></i>{' '}
                        <i className="mdi mdi-circle"></i> <i className="mdi mdi-circle"></i>{' '}
                    </div>
                    <div className="col-3 text-white font-12">
                        <i className="mdi mdi-circle"></i> <i className="mdi mdi-circle"></i>{' '}
                        <i className="mdi mdi-circle"></i> <i className="mdi mdi-circle"></i>{' '}
                    </div>
                    <div className="col-3 text-white font-12">
                        <i className="mdi mdi-circle"></i> <i className="mdi mdi-circle"></i>{' '}
                        <i className="mdi mdi-circle"></i> <i className="mdi mdi-circle"></i>{' '}
                    </div>
                    <div className="col-3 text-white font-16 fw-bold">
                        <span>1</span> <span>2</span> <span>3</span> <span>4</span>{' '}
                    </div>
                </div>
                <Row className="mt-4">
                    <Col xs={4}>
                        <p className="text-white-50 font-16 mb-1">Expiry Date</p>
                        <h4 className="text-white my-0">10/26</h4>
                    </Col>
                    <Col xs={4}>
                        <p className="text-white-50 font-16 mb-1">CCV</p>
                        <h4 className="text-white my-0">000</h4>
                    </Col>
                    <Col xs={4}>
                        <div className="text-end">
                            <span className="avatar-sm bg-white opacity-25 rounded-circle d-inline-block"></span>
                            <span className="avatar-sm bg-white opacity-25 rounded-circle d-inline-block ms-n3"></span>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default WalletCard;
