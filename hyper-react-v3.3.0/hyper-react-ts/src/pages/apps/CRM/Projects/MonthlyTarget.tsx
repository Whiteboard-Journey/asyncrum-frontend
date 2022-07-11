import { Card, Col, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const MonthlyTarget = () => {
    const apexDonutOpts: ApexOptions = {
        chart: {
            height: 220,
            type: 'pie',
        },
        colors: ['#727cf5', '#0acf97'],
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 200,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    // chart data
    const apexDonutData: number[] = [40, 60];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Monthly Target</h4>
                <Chart
                    options={apexDonutOpts}
                    series={apexDonutData}
                    type="donut"
                    height={255}
                    className="apex-charts my-4"
                />
                <Row>
                    <Col xs={6}>
                        <div className="text-center">
                            <h5>Target</h5>
                            <p className="fw-semibold text-muted mb-0">
                                <i className="mdi mdi-circle text-primary"></i> Projects
                            </p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="text-center">
                            <h5>Done</h5>
                            <p className="fw-semibold text-muted mb-0">
                                <i className="mdi mdi-circle text-success"></i> Projects
                            </p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default MonthlyTarget;
