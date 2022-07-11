// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import Messages from '../../components/Messages';

import UserBox from './UserBox';
import SellerBox from './SellerBox';
import BarChart from './BarChart';
import Statistics from './Statistics';
import Products from './Products';

const Profile = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/profile' },
                    { label: 'Profile', path: '/pages/profile', active: true },
                ]}
                title={'Profile'}
            />

            <Row>
                <Col sm={12}>
                    {/* User information */}
                    <UserBox />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    {/* User's seller information */}
                    <SellerBox />

                    {/* Contact information */}
                    <Card className="text-white bg-info overflow-hidden">
                        <Card.Body>
                            <div className="toll-free-box text-center">
                                <h4>
                                    {' '}
                                    <i className="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901
                                </h4>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* User's recent messages */}
                    <Messages />
                </Col>

                <Col xl={8}>
                    {/* User's performance */}
                    <BarChart />

                    {/* Some statistics */}
                    <Statistics />

                    {/* Products */}
                    <Products />
                </Col>
            </Row>
        </>
    );
};

export default Profile;
