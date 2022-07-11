// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import LineChart from './LineChart';
import BarChart from './BarChart';
import DonutChart from './DonutChart';
import RadarChart from './RadarChart';
import PolarChart from './PolarChart';
import BubbleChart from './BubbleChart';

const ChartJs = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Charts', path: '/features/charts/chartjs' },
                    { label: 'Chartjs', path: '/features/charts/chartjs', active: true },
                ]}
                title={'Chartjs Charts'}
            />

            <Row>
                <Col xl={6}>
                    <LineChart />
                </Col>

                <Col xl={6}>
                    <BarChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <DonutChart />
                </Col>

                <Col xl={6}>
                    <RadarChart />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <PolarChart />
                </Col>
                <Col xl={6}>
                    <BubbleChart />
                </Col>
            </Row>
        </>
    );
};

export default ChartJs;
