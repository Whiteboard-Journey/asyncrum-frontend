// @flow
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';
import TodoList from '../../../components/TodoList';

import Statistics from './Statistics';
import CampaignsChart from './CampaignsChart';
import RevenueChart from './RevenueChart';
import Performers from './Performers';
import Leads from './Leads';
import CampaignWidget from './CampaignWidget';

// dummy data
import { topPerformanceData, recentLeads } from './data';

const Preloader = (): React$Element<React$FragmentType> => {
    useEffect(() => {
        var opacity = 0;

        let intervalId = setInterval(fade, 200);

        function fade() {
            var body = document.getElementById('preloader');
            opacity = Number(window.getComputedStyle(body).getPropertyValue('opacity'));
            if (body && opacity > 0) {
                opacity = opacity - 0.2;
                body.style.opacity = String(opacity);
            } else {
                clearInterval(intervalId);
                if (body) body.style.display = 'none';
            }
        }
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div id="preloader">
                <div id="status">
                    <div className="bouncing-loader">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/crm' },
                    { label: 'CRM', path: '/dashboard/crm', active: true },
                ]}
                title={'CRM'}
            />

            <Statistics />

            <Row>
                <Col lg={5}>
                    <CampaignsChart />
                </Col>
                <Col lg={7}>
                    <RevenueChart />
                </Col>
            </Row>

            <Row>
                <Col xl={4} lg={12}>
                    <Performers topPerformanceData={topPerformanceData} />
                </Col>
                <Col xl={4} lg={6}>
                    <Leads recentLeads={recentLeads} />
                </Col>
                <Col xl={4} lg={6}>
                    <CampaignWidget />
                    <TodoList height="224px" />
                </Col>
            </Row>
        </>
    );
};

export default Preloader;
