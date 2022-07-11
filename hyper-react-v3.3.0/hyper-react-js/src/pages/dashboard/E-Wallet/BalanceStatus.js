// @flow
import React from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';

const BalanceStatus = (): React$Element<any> => {
    const generateData = () => {
        let balanceData = [];
        for (let i = 0; i < 100; i++) {
            balanceData.push(5000 + Math.random() * 100000 + 0.8 * i * i * i);
        }
        return balanceData;
    };

    const getDayBalance = () => {
        let dayDummyData = generateData();
        let dayBalanceData = [];

        for (let i = 0; i < 100; i++) {
            let start = new Date();
            dayBalanceData.push([start.setDate(start.getDate() + i - 100), dayDummyData[i]]);
        }
        return [{ data: dayBalanceData }];
    };

    const getWeekBalance = () => {
        let weekDummyData = generateData();
        let weekBalanceData = [];

        for (let i = 0; i < 100; i++) {
            let start = new Date();
            weekBalanceData.push([start.setDate(start.getDate() + i * 7 - 100 * 7), weekDummyData[i]]);
        }
        return [{ data: weekBalanceData }];
    };

    const getMonthBalance = () => {
        let monthDummyData = generateData();
        let monthBalanceData = [];

        for (let i = 0; i < 100; i++) {
            let start = new Date();
            monthBalanceData.push([start.setDate(start.getDate() + i * 30 - 100 * 30), monthDummyData[i]]);
        }
        return [{ data: monthBalanceData }];
    };

    const getYearBalance = () => {
        let yearDummyData = generateData();
        let yearBalanceData = [];

        for (let i = 0; i < 100; i++) {
            let start = new Date();
            yearBalanceData.push([start.setDate(start.getDate() + i * 365 - 100 * 365), yearDummyData[i]]);
        }
        return [{ data: yearBalanceData }];
    };

    const colors = ['#0acf97'];
    const apexChartOpts = {
        chart: {
            type: 'area',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        colors: colors,
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 1,
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            tickAmount: 6,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return '$' + value;
                },
            },
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy',
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0,
                stops: [0, 100],
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <Tab.Container defaultActiveKey="day">
                    <div className="align-items-center d-sm-flex justify-content-sm-between mb-3">
                        <h4 className="header-title mb-0">Balance Status</h4>
                        <Nav as="ul" variant="pills" className="bg-nav-pills p-1 rounded">
                            <Nav.Item as="li">
                                <Nav.Link as={Link} className="py-1" to="#" eventKey="day">
                                    Day
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} className="py-1" to="#" eventKey="week">
                                    Week
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} className="py-1" to="#" eventKey="month">
                                    Month
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} className="py-1" to="#" eventKey="year">
                                    Year
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="day">
                            <Chart
                                options={apexChartOpts}
                                series={getDayBalance()}
                                type="area"
                                className="apex-charts"
                                height={346}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="week">
                            <Chart
                                options={apexChartOpts}
                                series={getWeekBalance()}
                                type="area"
                                className="apex-charts"
                                height={346}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="month">
                            <Chart
                                options={apexChartOpts}
                                series={getMonthBalance()}
                                type="area"
                                className="apex-charts"
                                height={346}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="year">
                            <Chart
                                options={apexChartOpts}
                                series={getYearBalance()}
                                type="area"
                                className="apex-charts"
                                height={346}
                            />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>
        </Card>
    );
};

export default BalanceStatus;
