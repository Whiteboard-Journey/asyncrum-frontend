// @flow
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { Card, Alert } from 'react-bootstrap';

const SessionsChart = (): React$Element<any> => {
    const colors = ['#0acf97'];
    const [show, setShow] = useState(true);

    const getDaysInMonth = (month, year) => {
        var date = new Date(year, month, 1);
        var days = [];
        var idx = 0;
        while (date.getMonth() === month && idx < 15) {
            var d = new Date(date);
            days.push(d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' }));
            date.setDate(date.getDate() + 1);
            idx += 1;
        }
        return days;
    };

    const now = new Date();
    const labels = getDaysInMonth(now.getMonth() + 1, now.getFullYear());

    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 309,
            type: 'area',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: colors,
        xaxis: {
            type: 'string',
            categories: labels,
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {},
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + 'k';
                },
                offsetX: -15,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.1,
                stops: [45, 100],
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Sessions',
            data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
        },
    ];

    return (
        <Card className="card-h-100">
            <Card.Body>
                {show ? (
                    <Alert variant="warning" onClose={() => setShow(false)} dismissible className="mb-3">
                        Property HY1xx is not receiving hits. Either your site is not receiving any sessions or it is
                        not tagged correctly.
                    </Alert>
                ) : null}
                <ul className="nav float-end d-none d-lg-flex">
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-muted">
                            Today
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-muted">
                            7d
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link active">
                            15d
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-muted">
                            1m
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-muted">
                            1y
                        </Link>
                    </li>
                </ul>

                <h4 className="header-title mb-3">Sessions Overview</h4>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="area"
                    className="apex-charts mt-3"
                    height={308}
                />
            </Card.Body>
        </Card>
    );
};

export default SessionsChart;
