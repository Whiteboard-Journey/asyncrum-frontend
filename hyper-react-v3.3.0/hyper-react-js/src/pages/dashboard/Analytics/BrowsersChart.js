// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

// component
import CardTitle from '../../../components/CardTitle';

const BrowsersChart = (): React$Element<any> => {
    const apexOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 343,
            type: 'radar',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge', 'Explorer'],
        plotOptions: {
            radar: {
                size: 130,
                polygons: {
                    strokeColor: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff'],
                    },
                },
            },
        },
        colors: ['#727cf5'],
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + '%';
                },
            },
        },
        dataLabels: {
            enabled: true,
        },
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: ['#727cf5'],
            strokeWidth: 2,
        },
    };

    const apexData = [
        {
            name: 'Usage',
            data: [80, 50, 30, 40, 60, 20],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-3"
                    title="Session By Browser"
                    menuItems={[{ label: 'Refresh Report' }, { label: 'Export Report' }]}
                />

                <Chart options={apexOpts} series={apexData} type="radar" height={368} className="apex-charts mt-3" />
            </Card.Body>
        </Card>
    );
};

export default BrowsersChart;
