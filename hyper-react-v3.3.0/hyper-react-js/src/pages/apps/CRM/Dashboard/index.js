// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../../components/PageTitle';
import TodoList from '../../../../components/TodoList';

import Statistics from './Statistics';
import CampaignsChart from './CampaignsChart';
import RevenueChart from './RevenueChart';
import Performers from './Performers';
import Leads from './Leads';
import CampaignWidget from './CampaignWidget';

// dummy data
import { topPerformanceData, recentLeads } from './data';

const CRMDashboardPage = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'CRM', path: '/apps/crm/dashboard' },
                    { label: 'CRM Dashboard', path: '/apps/crm/dashboard', active: true },
                ]}
                title={'CRM Dashboard'}
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
                    <TodoList height="220px" />
                </Col>
            </Row>
        </>
    );
};

export default CRMDashboardPage;
