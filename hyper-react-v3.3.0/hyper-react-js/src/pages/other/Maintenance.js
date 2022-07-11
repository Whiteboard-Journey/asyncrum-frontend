// @flow
import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import classNames from 'classnames';

// images
import maintenanceImg from '../../assets/images/maintenance.svg';

const Maintenance = (): React$Element<React$FragmentType> => {
    const maintenanceQuery = [
        {
            icon: 'dripicons-jewel',
            title: 'Why is the Site Down?',
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
        },
        {
            icon: 'dripicons-clock',
            title: 'What is the Downtime?',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical but the majority.',
        },
        {
            icon: 'dripicons-question',
            title: 'Do you need Support?',
            desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar... no-reply@domain.com",
        },
    ];

    useEffect(() => {
        if (document.body) document.body.classList.remove('authentication-bg');
    }, []);

    return (
        <>
            <div className="mt-5 mb-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <div className="text-center">
                                <img src={maintenanceImg} height="140" alt="" />
                                <h3 className="mt-4">Site is Under Maintenance</h3>
                                <p className="text-muted">
                                    We're making the system more awesome. We'll be back shortly.
                                </p>

                                <Row className="mt-5">
                                    {maintenanceQuery.map((item, index) => {
                                        return (
                                            <Col key={index} md={4}>
                                                <div className="text-center mt-3 ps-1 pe-1">
                                                    <i
                                                        className={classNames(
                                                            'bg-primary',
                                                            'maintenance-icon',
                                                            'text-white',
                                                            'mb-2',
                                                            item.icon
                                                        )}></i>
                                                    <h5 className="text-uppercase">{item.title}</h5>
                                                    <p className="text-muted">{item.desc}</p>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className="footer footer-alt">2018 - 2021 © Hyper - Coderthemes.com</footer>
        </>
    );
};

export default Maintenance;
