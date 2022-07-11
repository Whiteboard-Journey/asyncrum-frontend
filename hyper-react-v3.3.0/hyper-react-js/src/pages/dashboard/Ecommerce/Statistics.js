// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import StatisticsWidget from '../../../components/StatisticsWidget';

const Statistics = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Row>
                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-account-multiple"
                        description="Number of Customers"
                        title="Customers"
                        stats="36,254"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>

                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-cart-plus"
                        description="Number of Orders"
                        title="Orders"
                        stats="5,543"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '1.08%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-currency-usd"
                        description="Revenue"
                        title="Revenue"
                        stats="$6,254"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '7.00%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>

                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-pulse"
                        description="Growth"
                        title="Growth"
                        stats="+ 30.56%"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '4.87%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
            </Row>
        </>
    );
};

export default Statistics;
