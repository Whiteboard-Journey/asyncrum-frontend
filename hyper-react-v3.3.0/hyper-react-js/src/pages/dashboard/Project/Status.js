import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// component
import CardTitle from '../../../components/CardTitle';

ChartJS.register(ArcElement, Tooltip, Legend);

const Status = (): React$Element<any> => {
    const colors = ['#0acf97', '#727cf5', '#fa5c7c'];

    const donutChartData = {
        labels: ['Completed', 'In-progress', 'Behind'],
        datasets: [
            {
                data: [64, 26, 10],
                backgroundColor: colors,
                borderColor: 'transparent',
                borderWidth: '3',
            },
        ],
    };

    const donutChartOpts = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        cutout: '80%',
    };

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between"
                    title="Project Status"
                    menuItems={[
                        { label: 'Weekly Report' },
                        { label: 'Monthly Report' },
                        { label: 'Action' },
                        { label: 'Settings' },
                    ]}
                />

                <div className="my-4 chartjs-chart" style={{ height: '195px' }}>
                    <Doughnut data={donutChartData} options={donutChartOpts} />
                </div>

                <Row className="text-center mt-2 py-2">
                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-trending-up text-success mt-3 h3"></i>
                            <h3 className="fw-normal">
                                <span>64%</span>
                            </h3>
                            <p className="text-muted mb-0">Completed</p>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-trending-down text-primary mt-3 h3"></i>
                            <h3 className="fw-normal">
                                <span>26%</span>
                            </h3>
                            <p className="text-muted mb-0"> In-progress</p>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-trending-down text-danger mt-3 h3"></i>
                            <h3 className="fw-normal">
                                <span>10%</span>
                            </h3>
                            <p className="text-muted mb-0"> Behind</p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Status;
