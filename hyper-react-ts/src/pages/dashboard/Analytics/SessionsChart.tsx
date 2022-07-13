import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { Card, Alert } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';
import { useToggle } from 'hooks';
import { useSessionChart } from './hooks';

const SessionsChart = () => {
    const [show, , , hide] = useToggle(true);

    const { labels } = useSessionChart();

    const apexBarChartOpts: ApexOptions = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 309,
            type: 'area',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
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
        colors: ['#0acf97'],
        xaxis: {
            categories: labels,
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {},
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + 'k';
                },
                offsetX: -15,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.1,
                stops: [45, 100],
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Sessions',
            data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
        },
    ];

    return (
        <Card className="card-h-100">
            <Card.Body>
                {show ? (
                    <Alert variant="warning" onClose={hide} dismissible className="mb-3">
                        Property HY1xx is not receiving hits. Either your site is not receiving any sessions or it is
                        not tagged correctly.
                    </Alert>
                ) : null}
                <ul className="nav float-end d-none d-lg-flex">
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-muted">
                            Today
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-muted">
                            7d
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link active">
                            15d
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-muted">
                            1m
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-muted">
                            1y
                        </Link>
                    </li>
                </ul>

                <h4 className="header-title mb-3">Sessions Overview</h4>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="area"
                    className="apex-charts mt-3"
                    height={308}
                />
            </Card.Body>
        </Card>
    );
};

export default SessionsChart;
