// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// component
import CardTitle from '../../../components/CardTitle';

const ViewsChart = (): React$Element<any> => {
    // generate random data
    function getRandomData(length) {
        var d = [];
        for (var idx = 0; idx < length; idx++) {
            d.push(Math.floor(Math.random() * 90) + 10);
        }
        return d;
    }

    var categories = [];
    for (var i = 10; i >= 1; i--) {
        categories.push(i + ' min ago');
    }

    const apexOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 150,
            type: 'bar',
            stacked: true,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '22%',
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetY: -24,
            style: {
                fontSize: '12px',
                colors: ['#98a6ad'],
            },
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#0acf97'],
        xaxis: {
            categories: categories,
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                inverseColors: !0,
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.25,
                gradientToColors: void 0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
    };

    const apexData = [
        {
            name: 'Views',
            data: getRandomData(10),
        },
    ];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-3"
                    title="Views Per Minute"
                    menuItems={[{ label: 'Refresh Report' }, { label: 'Export Report' }]}
                />

                <Chart options={apexOpts} series={apexData} type="bar" height={160} className="apex-charts mt-2" />

                <div className="table-responsive mt-3">
                    <table className="table table-sm mb-0 font-13">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th>Views</th>
                                <th>Bounce Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="#" className="text-muted">
                                        /hyper/dashboard-analytics
                                    </Link>
                                </td>
                                <td>25</td>
                                <td>87.5%</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#" className="text-muted">
                                        /hyper/dashboard-crm
                                    </Link>
                                </td>
                                <td>15</td>
                                <td>21.48%</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#" className="text-muted">
                                        /ubold/dashboard
                                    </Link>
                                </td>
                                <td>10</td>
                                <td>63.59%</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#" className="text-muted">
                                        /minton/home
                                    </Link>
                                </td>
                                <td>7</td>
                                <td>56.12%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ViewsChart;
