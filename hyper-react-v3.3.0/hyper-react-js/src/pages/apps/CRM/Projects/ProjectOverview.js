// @flow
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts';

// component
import CardTitle from '../../../../components/CardTitle';

const ProjectOverview = (): React$Element<any> => {
    const apexDonutOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
                top: 15,
                bottom: 15,
            },
        },
        chart: {
            height: 278,
            type: 'radialBar',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'OS',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 8541;
                        },
                    },
                },
            },
        },
        colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
        labels: ['Product Design', 'Web Development', 'Illustration Design', 'UI/UX Design'],
    };

    // chart data
    const apexDonutData = [85, 70, 80, 65];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between"
                    title="Project Overview"
                    menuItems={[
                        { label: 'Today' },
                        { label: 'Yesterday' },
                        { label: 'Last Week' },
                        { label: 'Last Month' },
                    ]}
                />
                <Row className="align-items-center mt-2">
                    <Col md={6} className="order-2 order-md-1">
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0">
                                <i className="mdi mdi-checkbox-blank-circle widget-icon rounded-circle bg-primary-lighten text-primary"></i>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5 className="fw-semibold mt-0 mb-1">Product Design</h5>
                                <ul className="list-inline mb-0 text-muted">
                                    <li className="list-inline-item">
                                        <b>26</b> Total Projects
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-circle-small"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <b>4</b> Employees
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0">
                                <i className="mdi mdi-checkbox-blank-circle widget-icon rounded-circle bg-danger-lighten text-danger"></i>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5 className="fw-semibold mt-0 mb-1">Web Development</h5>
                                <ul className="list-inline mb-0 text-muted">
                                    <li className="list-inline-item">
                                        <b>30</b> Total Projects
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-circle-small"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <b>5</b> Employees
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0">
                                <i className="mdi mdi-checkbox-blank-circle widget-icon rounded-circle bg-success-lighten text-success"></i>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5 className="fw-semibold mt-0 mb-1">Illustration Design</h5>
                                <ul className="list-inline mb-0 text-muted">
                                    <li className="list-inline-item">
                                        <b>12</b> Total Projects
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-circle-small"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <b>3</b> Employees
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <i className="mdi mdi-checkbox-blank-circle widget-icon rounded-circle bg-warning-lighten text-warning"></i>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5 className="fw-semibold mt-0 mb-1">UI/UX Design</h5>
                                <ul className="list-inline mb-0 text-muted">
                                    <li className="list-inline-item">
                                        <b>8</b> Total Projects
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-circle-small"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <b>4</b> Employees
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="order-1 order-md-2">
                        <Chart
                            options={apexDonutOpts}
                            series={apexDonutData}
                            type="radialBar"
                            height={327}
                            className="apex-charts"
                        />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ProjectOverview;
