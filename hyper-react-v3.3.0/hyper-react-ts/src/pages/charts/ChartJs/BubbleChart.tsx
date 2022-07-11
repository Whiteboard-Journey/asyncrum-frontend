import React from 'react';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
    // chart data
    const bubbleData: ChartData<'bubble'> = {
        labels: ['January'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(114, 124, 245, 0.4)',
                borderColor: 'rgba(114, 124, 245, 1)',
                data: [
                    { x: -43.219521604938265, y: 68.05984224965707, r: 5 },
                    { x: -85.34593621399178, y: 0.27756344307269387, r: 26 },
                    { x: 52.50450102880657, y: -102.80564128943759, r: 30 },
                    { x: -25.501543209876544, y: -137.02310528120714, r: 21 },
                    { x: 34.80259773662553, y: 1.7918381344307193, r: 20 },
                    { x: 87.58359053497944, y: -82.19414437585733, r: 16 },
                    { x: -12.991898148148152, y: -34.81438614540467, r: 3 },
                    { x: 87.24279835390945, y: -1.9022205075445697, r: 11 },
                    { x: -7.545653292181072, y: -129.29098079561044, r: 5 },
                    { x: 56.80941358024691, y: -62.81400034293553, r: 18 },
                    { x: -115.52533436213992, y: 51.69538751714677, r: 30 },
                    { x: -120.52533536213992, y: 80.69538751724677, r: 10 },
                    { x: 79.6167695473251, y: 68.40384945130313, r: 19 },
                    { x: -3.597608024691368, y: 91.47805212620028, r: 16 },
                    { x: -11.001800411522623, y: -24.91533779149519, r: 11 },
                    { x: -88.42914094650206, y: 73.39034636488338, r: 11 },
                    { x: -131.71296296296296, y: -9.438228737997235, r: 22 },
                ],
            },
        ],
    };

    // options
    const bubbleChartOpts: ChartOptions<'bubble'> = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            tooltip: {
                enabled: false,
            },
        },
        elements: {
            point: {
                borderWidth: (context: any) => {
                    return Math.min(Math.max(1, context.datasetIndex + 1), 8);
                },
                radius: function (context: any) {
                    var value = context.dataset.data[context.dataIndex];
                    var size = context.chart.width;
                    var base = Math.abs(value.v) / 1000;
                    return (size / 24) * base;
                },
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Bubble Chart</h4>

                <div className="mb-5 mt-4 chartjs-chart" style={{ height: '320px', maxWidth: '100%' }}>
                    <Bubble data={bubbleData} options={bubbleChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default BubbleChart;
