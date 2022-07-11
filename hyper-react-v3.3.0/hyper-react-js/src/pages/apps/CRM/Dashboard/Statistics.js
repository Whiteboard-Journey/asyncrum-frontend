// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import StatisticsChartWidget from '../../../../components/StatisticsChartWidget';

const Statistics = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Row>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Campaign Sent"
                        title="Campaign Sent"
                        stats="9,184"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '3.27%',
                        }}
                        colors={['#727cf5']}
                        data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}></StatisticsChartWidget>
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="New Leads"
                        title="New Leads"
                        stats="3,254"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '5.38%',
                        }}
                        colors={['#0acf97']}
                        type="line"
                        data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}></StatisticsChartWidget>
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Deals"
                        title="Deals"
                        stats="861"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '4.87%',
                        }}
                        colors={['#727cf5']}
                        data={[12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]}></StatisticsChartWidget>
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Booked Revenue"
                        title="Booked Revenue"
                        stats="$253k"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '11.7%',
                        }}
                        colors={['#0acf97']}
                        data={[47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]}></StatisticsChartWidget>
                </Col>
            </Row>
        </>
    );
};

export default Statistics;
