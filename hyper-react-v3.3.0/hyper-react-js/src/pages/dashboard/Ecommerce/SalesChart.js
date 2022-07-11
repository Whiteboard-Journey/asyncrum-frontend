// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

// component
import CardTitle from '../../../components/CardTitle';

const SalesChart = (): React$Element<any> => {
    const apexDonutOpts = {
        chart: {
            height: 340,
            type: 'donut',
        },
        colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 376,
                options: {
                    chart: {
                        width: 250,
                        height: 250,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    const apexDonutData = [44, 55, 41, 17];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between"
                    title="Total Sales"
                    menuItems={[
                        { label: 'Sales Report' },
                        { label: 'Export Report' },
                        { label: 'Profit' },
                        { label: 'Action' },
                    ]}
                />

                <Chart
                    options={apexDonutOpts}
                    series={apexDonutData}
                    type="donut"
                    height={222}
                    className="apex-charts mb-4 mt-4"
                />

                <div className="chart-widget-list">
                    <p>
                        <i className="mdi mdi-square text-primary"></i> Direct
                        <span className="float-end">$300.56</span>
                    </p>
                    <p>
                        <i className="mdi mdi-square text-danger"></i> Affilliate
                        <span className="float-end">$135.18</span>
                    </p>
                    <p>
                        <i className="mdi mdi-square text-success"></i> Sponsored
                        <span className="float-end">$48.96</span>
                    </p>
                    <p className="mb-0">
                        <i className="mdi mdi-square text-warning"></i> E-mail
                        <span className="float-end">$154.02</span>
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default SalesChart;
