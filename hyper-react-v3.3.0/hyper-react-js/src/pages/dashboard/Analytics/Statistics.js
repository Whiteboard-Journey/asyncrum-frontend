// @flow
import React from 'react';
import { Card } from 'react-bootstrap';

// images
import statsImg from '../../../assets/images/email-campaign.svg';

const Statistics = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Card className="tilebox-one">
                <Card.Body>
                    <i className="uil uil-users-alt float-end"></i>
                    <h6 className="text-uppercase mt-0">Active Users</h6>
                    <h2 className="my-2" id="active-users-count">
                        121
                    </h2>
                    <p className="mb-0 text-muted">
                        <span className="text-success me-2">
                            <span className="mdi mdi-arrow-up-bold"></span> 5.27%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                    </p>
                </Card.Body>
            </Card>

            <Card className="tilebox-one">
                <Card.Body>
                    <i className="uil uil-window-restore float-end"></i>
                    <h6 className="text-uppercase mt-0">Views per minute</h6>
                    <h2 className="my-2" id="active-users-count">
                        560
                    </h2>
                    <p className="mb-0 text-muted">
                        <span className="text-danger me-2">
                            <span className="mdi mdi-arrow-down-bold"></span> 1.08%
                        </span>
                        <span className="text-nowrap">Since previous week</span>
                    </p>
                </Card.Body>
            </Card>

            <Card className="cta-box overflow-hidden">
                <Card.Body>
                    <div className="d-flex align-items-center">
                        <div>
                            <h3 className="m-0 fw-normal cta-box-title">
                                Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right"></i>
                            </h3>
                        </div>
                        <img className="ms-3" src={statsImg} width="92" alt="Generic placeholder" />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default Statistics;
