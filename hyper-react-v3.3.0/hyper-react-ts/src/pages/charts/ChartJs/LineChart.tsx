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
    ChartData,
    ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    // chart data
    const lineChartData: ChartData<'line'> = {
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
                capBezierPoints: true,
            },
            {
                label: 'Previous Week',
                fill: true,
                backgroundColor: 'transparent',
                borderColor: '#0acf97',
                borderDash: [5, 5],
                data: [42, 58, 66, 93, 82, 105, 92],
                tension: 0.4,
                capBezierPoints: true,
            },
        ],
    };

    // default options
    const lineChartOpts: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            filler: {
                propagate: false,
            },
            tooltip: {
                intersect: false,
            },
            legend: {
                display: false,
            },
        },
        hover: {
            intersect: true,
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
            },
            y: {
                ticks: {
                    stepSize: 20,
                },
                display: true,
                grid: {
                    color: 'rgba(0,0,0,0)',
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
