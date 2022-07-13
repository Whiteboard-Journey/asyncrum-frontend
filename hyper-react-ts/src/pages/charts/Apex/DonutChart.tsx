import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Card } from 'react-bootstrap';

const DonutChart = () => {
    // default options
    const apexDonutOpts: ApexOptions = {
        chart: {
            height: 320,
            type: 'pie',
        },
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        colors: ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c', '#e3eaef'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: -10,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 240,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    // chart data
    const apexDonutData: number[] = [44, 55, 41, 17, 15];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Donut Chart</h4>
                <Chart
                    options={apexDonutOpts}
                    series={apexDonutData}
                    type="donut"
                    height={320}
                    className="apex-charts"
                />
            </Card.Body>
        </Card>
    );
};

export default DonutChart;
