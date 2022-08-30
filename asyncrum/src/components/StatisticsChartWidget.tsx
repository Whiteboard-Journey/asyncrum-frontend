import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import classNames from 'classnames';
import { ApexOptions } from 'apexcharts';

type StatisticsChartWidgetProps = {
    colors?: Array<string>;
    type?: 'line' | 'bar';
    name?: string;
    data?: Array<number>;
    textClass?: string;
    bgClass?: string;
    description?: string;
    title?: string;
    stats?: string;
    trend: {
        textClass: string;
        icon: string;
        value: string;
    };
};

const StatisticsChartWidget = ({
    colors,
    type,
    name,
    data,
    textClass,
    bgClass,
    description,
    title,
    stats,
    trend,
}: StatisticsChartWidgetProps) => {
    //  default options
    const options: ApexOptions = {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '60%',
            },
        },
        xaxis: {
            crosshairs: {
                width: 1,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        colors: colors || ['#008FFB'],
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName: string) {
                        return '';
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };

    // chart data
    const series = [{ name: name || 'Data', data: data || [] }];

    return (
        <Card className={classNames('widget-flat', bgClass)}>
            <Card.Body>
                <Row className="align-items-center">
                    <Col className="col-6">
                        <h5
                            className={classNames(
                                'fw-normal',
                                'mt-0',
                                'text-truncate',
                                textClass ? textClass : 'text-muted'
                            )}
                            title={description}
                        >
                            {title}
                        </h5>
                        <h3 className="my-2 py-1">{stats}</h3>

                        {trend && (
                            <p className={classNames('mb-0', textClass ? textClass : 'text-muted')}>
                                <span className={classNames(trend.textClass, 'me-2')}>
                                    <i className={trend.icon}></i> {trend.value}
                                </span>
                            </p>
                        )}
                    </Col>

                    <Col className="col-6">
                        <div className="text-end">
                            <Chart
                                className="apex-charts"
                                options={options}
                                series={series}
                                type={type || 'bar'}
                                height={60}
                            />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default StatisticsChartWidget;
