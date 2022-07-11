import React from 'react';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = (): React$Element<any> => {
    // chart data
    const donutChartData = {
        labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
        datasets: [
            {
                data: [300, 135, 48, 154],
                backgroundColor: ['#727cf5', '#fa5c7c', '#0acf97', '#ebeff2'],
                borderColor: 'transparent',
                borderWidth: '3',
            },
        ],
    };

    // default options
    const donutChartOpts = {
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Donut Chart</h4>

                <div className="mb-5 mt-4 chartjs-chart" style={{ height: '320px', maxWidth: '320px' }}>
                    <Doughnut data={donutChartData} options={donutChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default DonutChart;
