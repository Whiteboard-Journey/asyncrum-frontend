import React from 'react';
import { Card } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = (): React$Element<any> => {
    // chart data
    const lineChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Current Week',
                backgroundColor: 'rgba(114, 124, 245, 0.3)',
                borderColor: '#727cf5',
                data: [32, 42, 42, 62, 52, 75, 62],
                tension: 0.4,
                fill: {
                    target: 'origin',
                    above: 'rgba(114, 124, 245,0.3)',
                },
            },
            {
                label: 'Previous Week',
                fill: true,
                backgroundColor: 'transparent',
                borderColor: '#0acf97',
                borderDash: [5, 5],
                data: [42, 58, 66, 93, 82, 105, 92],
                tension: 0.4,
            },
        ],
    };

    // default options
    const lineChartOpts = {
        bezierCurve: false,
        maintainAspectRatio: false,
        plugins: {
            filler: {
                propagate: false,
            },
            tooltips: {
                intersect: false,
            },
            hover: {
                intersect: true,
            },
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    color: () => 'rgba(0,0,0,0.05)',
                },
            },
            y: {
                ticks: {
                    stepSize: 20,
                },
                display: true,
                borderDash: [5, 5],
                grid: {
                    color: () => 'rgba(0,0,0,0)',
                    fontColor: '#fff',
                },
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Line Chart</h4>
                <div style={{ height: '320px' }} className="mt-3 chartjs-chart">
                    <Line data={lineChartData} options={lineChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default LineChart;
