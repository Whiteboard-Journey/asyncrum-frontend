// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';

type StatisticsChartWidget3Props = {
    title?: string,
    stats?: string,
    lastMonthData?: string,
    CurrentMonthData?: string,
    type?: string,
    colors?: Array<string>,
    name?: string,
    strokeWidth?: number,
    borderRadius?: number,
    data?: Array<number>,
};

/**
 * Renders the chart in widget area
 */
const StatisticsChartWidget3 = (props: StatisticsChartWidget3Props): React$Element<any> => {
    // chart options
    const options = {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: props.strokeWidth,
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                borderRadius: props.borderRadius,
            },
        },
        colors: props.colors || ['#008FFB'],
    };

    // type - defaulted to bar
    const type = props.type || 'bar';

    // chart data
    const series = [{ name: props.name || 'Data', data: props.data || [] }];

    return (
        <Card className="widget-flat">
            <Card.Body>
                <div className="float-end">
                    <button type="button" className="btn btn-sm btn-light">
                        View
                    </button>
                </div>
                <h6 className="text-muted text-uppercase mt-0" title="Revenue">
                    {props.title}
                </h6>
                <h3 className="mb-4 mt-2">{props.stats}</h3>

                <Chart className="apex-charts mb-3" options={options} series={series} type={type} height={100} />

                <Row className="text-center">
                    <Col>
                        <h6 className="text-truncate d-block">Last Month</h6>
                        <p className="font-18 mb-0">{props.lastMonthData}</p>
                    </Col>
                    <Col>
                        <h6 className="text-truncate d-block">Current Month</h6>
                        <p className="font-18 mb-0">{props.CurrentMonthData}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default StatisticsChartWidget3;
