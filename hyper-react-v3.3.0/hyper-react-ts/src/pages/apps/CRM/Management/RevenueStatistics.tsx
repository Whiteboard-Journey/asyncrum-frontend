import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { CardTitle } from 'components';

const RevenueStatistics = () => {
    const apexLineChartWithLables: ApexOptions = {
        chart: {
            height: 364,
            type: 'line',
            dropShadow: {
                enabled: true,
                opacity: 0.1,
                blur: 7,
                left: -7,
                top: 7,
            },
            parentHeightOffset: 0,
        },
        grid: {
            padding: {
                left: 20,
                right: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        legend: {
            show: false,
        },
        colors: ['#727cf5', '#0acf97'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + 'k';
                },
            },
        },
    };

    const apexLineChartWithLablesData = [
        {
            name: 'Budget',
            data: [10, 20, 15, 28, 22, 34],
        },
        {
            name: 'Revenue',
            data: [2, 26, 10, 38, 30, 48],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-1"
                    title="Revenue Statistics"
                    menuItems={[
                        { label: 'Today' },
                        { label: 'Yesterday' },
                        { label: 'Last Week' },
                        { label: 'Last Month' },
                    ]}
                />
                <Chart
                    options={apexLineChartWithLables}
                    series={apexLineChartWithLablesData}
                    type="line"
                    className="apex-charts mt-2"
                    height={361}
                />
            </Card.Body>
        </Card>
    );
};

export default RevenueStatistics;
