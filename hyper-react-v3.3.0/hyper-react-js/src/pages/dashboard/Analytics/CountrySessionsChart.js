// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, Row, Col } from 'react-bootstrap';

// components
import { WorldVectorMap } from '../../../components/VectorMap/';
import CardTitle from '../../../components/CardTitle';

const CountrySessionsChart = (): React$Element<any> => {
    const colors = ['rgba(114, 124, 245, 0.85)'];

    // apex chart config
    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 15,
            },
        },
        chart: {
            type: 'bar',
            height: 350,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        colors: colors,
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
                'India',
                'China',
                'United States',
                'Japan',
                'France',
                'Italy',
                'Netherlands',
                'United Kingdom',
                'Canada',
                'South Korea',
            ],
            labels: {
                formatter: function (val) {
                    return val + '%';
                },
            },
        },
    };
    const apexBarChartData = [
        {
            name: 'Sessions',
            data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12],
        },
    ];

    // vector map config
    const options = {
        series: {
            regions: [
                {
                    attribute: 'fill',
                    scale: {
                        ScaleKR: '#e6ebff',
                        ScaleCA: '#b3c3ff',
                        ScaleGB: '#809bfe',
                        ScaleNL: '#4d73fe',
                        ScaleIT: '#1b4cfe',
                        ScaleFR: '#727cf5',
                        ScaleJP: '#e7fef7',
                        ScaleUS: '#e7e9fd',
                        ScaleCN: '#8890f7',
                        ScaleIN: '#727cf5',
                    },
                    values: {
                        KR: 'ScaleKR',
                        CA: 'ScaleCA',
                        GB: 'ScaleGB',
                        NL: 'ScaleNL',
                        IT: 'ScaleIT',
                        FR: 'ScaleFR',
                        JP: 'ScaleJP',
                        US: 'ScaleUS',
                        CN: 'ScaleCN',
                        IN: 'ScaleIN',
                    },
                },
            ],
        },
    };

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-3"
                    title="Sessions By Country"
                    menuItems={[{ label: 'Refresh Report' }, { label: 'Export Report' }]}
                />

                <Row>
                    <Col lg={8}>
                        <div className="mt-3 mb-3" style={{ height: '300px' }}>
                            <WorldVectorMap height="100%" width="100%" options={options} />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Chart options={apexBarChartOpts} series={apexBarChartData} type="bar" height={320} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CountrySessionsChart;
