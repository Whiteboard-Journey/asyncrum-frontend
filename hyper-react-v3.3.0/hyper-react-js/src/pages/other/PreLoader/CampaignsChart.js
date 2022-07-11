// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';

const CampaignsChart = (): React$Element<any> => {
    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 320,
            type: 'radialBar',
        },
        colors: ['#ffbc00', '#727cf5', '#0acf97'],
        labels: ['Total Sent', 'Reached', 'Opened'],
        plotOptions: {
            radialBar: {
                track: {
                    margin: 8,
                },
            },
        },
    };

    const apexBarChartData = [86, 36, 50];

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Today</Dropdown.Item>
                        <Dropdown.Item>Yesterday</Dropdown.Item>
                        <Dropdown.Item>Last Week</Dropdown.Item>
                        <Dropdown.Item>Last Month</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mb-1">Campaigns</h4>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="radialBar"
                    className="apex-charts"
                    height={304}
                />

                <Row className="text-center mt-2">
                    <Col sm={4}>
                        <i className="mdi mdi-send widget-icon rounded-circle bg-light-lighten text-muted"></i>
                        <h3 className="fw-normal mt-3">
                            <span>6,510</span>
                        </h3>
                        <p className="text-muted mb-0 mb-2">
                            <i className="mdi mdi-checkbox-blank-circle text-warning"></i> Total Sent
                        </p>
                    </Col>
                    <Col sm={4}>
                        <i className="mdi mdi-flag-variant widget-icon rounded-circle bg-light-lighten text-muted"></i>
                        <h3 className="fw-normal mt-3">
                            <span>3,487</span>
                        </h3>
                        <p className="text-muted mb-0 mb-2">
                            <i className="mdi mdi-checkbox-blank-circle text-primary"></i> Reached
                        </p>
                    </Col>
                    <Col sm={4}>
                        <i className="mdi mdi-email-open widget-icon rounded-circle bg-light-lighten text-muted"></i>
                        <h3 className="fw-normal mt-3">
                            <span>1,568</span>
                        </h3>
                        <p className="text-muted mb-0 mb-2">
                            <i className="mdi mdi-checkbox-blank-circle text-success"></i> Opened
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CampaignsChart;
