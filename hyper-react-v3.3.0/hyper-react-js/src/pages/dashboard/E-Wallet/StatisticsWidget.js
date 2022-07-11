// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import classNames from 'classnames';

// component
import CardTitle from '../../../components/CardTitle';

type StatisticsWidgetProps = {
    icon: string,
    stats: string,
    trend: string,
    currencyType: string,
    currencyAmount: string,
    chartType: string,
    colors: Array<string>,
    data: Array<number>,
    strokeWidth: number,
};

const StatisticsWidget = ({
    icon,
    stats,
    trend,
    currencyType,
    currencyAmount,
    chartType,
    colors,
    data,
    strokeWidth,
}: StatisticsWidgetProps): React$Element<any> => {
    //  default options
    const options = {
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
            width: strokeWidth,
            curve: 'smooth',
        },
        colors: colors,
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return '';
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };

    // type
    const type = chartType;

    // chart data
    const series = [{ data: data || [] }];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between"
                    title={
                        <>
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm rounded">
                                        <span className="avatar-title bg-primary-lighten h3 my-0 text-primary rounded">
                                            <i className={classNames(icon)} />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h4 className="mt-0 mb-1 font-20">{stats}</h4>
                                    <p className="mb-0 text-muted">
                                        <i className="mdi mdi-arrow-up-bold text-success"></i> {trend} This Week
                                    </p>
                                </div>
                            </div>
                        </>
                    }
                    icon="mdi mdi-dots-horizontal"
                    menuItems={[
                        { label: 'Refresh', icon: 'mdi mdi-cached' },
                        { label: 'Edit', icon: 'mdi mdi-circle-edit-outline' },
                        { label: 'Remove', icon: 'mdi mdi-delete-outline', variant: 'text-danger' },
                    ]}
                />
                <Row className="align-items-end justify-content-between mt-3">
                    <Col sm={6}>
                        <h4 className="mt-0 text-muted fw-semibold mb-1">Rate</h4>
                        <p className="text-muted mb-0">
                            1.00 {currencyType} = {currencyAmount}
                        </p>
                    </Col>
                    <Col sm={5}>
                        <div className="text-end">
                            <Chart className="apex-charts" options={options} series={series} type={type} height={60} />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default StatisticsWidget;
