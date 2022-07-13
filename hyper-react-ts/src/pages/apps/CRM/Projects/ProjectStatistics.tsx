import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { CardTitle } from 'components';

const ProjectStatistics = () => {
    const apexOpts: ApexOptions = {
        chart: {
            height: 327,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 3,
            colors: ['transparent'],
        },
        colors: ['#ced1ff', '#727cf5'],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        legend: {
            offsetY: 7,
        },
        yaxis: {
            title: {
                text: '$ (thousands)',
            },
        },
        fill: {
            opacity: 1,
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f1f3fa',
            padding: {
                bottom: 5,
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + 'K';
                },
            },
        },
    };

    // chart data
    const series = [
        {
            name: 'Previous Week Sale',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'This Week Sale',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between"
                    title="Project Statistics"
                    menuItems={[{ label: 'Refresh Report' }, { label: 'Export Report' }]}
                />
                <div style={{ height: '327px' }} className="mt-3 chartjs-chart">
                    <Chart options={apexOpts} series={series} type="bar" height={327} className="apex-charts" />
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProjectStatistics;
