// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import BarChart from './BarChart';
import HorizontalBarChart from './HorizontalBarChart';
import DonutChart from './DonutChart';
import LineChart from './LineChart';

const BriteChart = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Charts', path: '/features/charts/brite' },
                    { label: 'Brite', path: '/features/charts/brite', active: true },
                ]}
                title={'Brite Charts'}
            />

            <Row>
                <Col xl={6}>
                    <BarChart />
                </Col>

                <Col xl={6}>
                    <HorizontalBarChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <LineChart />
                </Col>

                <Col xl={6}>
                    <DonutChart />
                </Col>
            </Row>
        </>
    );
};

export default BriteChart;
