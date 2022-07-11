// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { Line, Tooltip, ResponsiveContainer } from 'britecharts-react';

// simple line chart
const LineChart = (): React$Element<any> => {
    // container style
    const chartContainerStyle = {
        width: '100%',
    };

    const renderLine = (props) => (
        <ResponsiveContainer
            render={({ width }) => (
                <Line
                    isAnimated={false}
                    width={width}
                    height={500}
                    aspectRatio={0.7}
                    tooltipThreshold={100}
                    grid={'horizontal'}
                    {...props}
                />
            )}
        />
    );

    // chart data
    const lineData = {
        dataByTopic: [
            {
                topic: 103,
                topicName: 'San Francisco',
                dates: [
                    {
                        date: '2018-06-27T07:00:00.000Z',
                        value: 1,
                        fullDate: '2018-06-27T07:00:00.000Z',
                    },
                    {
                        date: '2018-06-28T07:00:00.000Z',
                        value: 1,
                        fullDate: '2018-06-28T07:00:00.000Z',
                    },
                    {
                        date: '2018-06-29T07:00:00.000Z',
                        value: 4,
                        fullDate: '2018-06-29T07:00:00.000Z',
                    },
                    {
                        date: '2018-06-30T07:00:00.000Z',
                        value: 2,
                        fullDate: '2018-06-30T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-01T07:00:00.000Z',
                        value: 3,
                        fullDate: '2018-07-01T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-02T07:00:00.000Z',
                        value: 3,
                        fullDate: '2018-07-02T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-03T07:00:00.000Z',
                        value: 0,
                        fullDate: '2018-07-03T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-04T07:00:00.000Z',
                        value: 3,
                        fullDate: '2018-07-04T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-05T07:00:00.000',
                        value: 1,
                        fullDate: '2018-07-05T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-06T07:00:00.000Z',
                        value: 2,
                        fullDate: '2018-07-06T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-07T07:00:00.000Z',
                        value: 0,
                        fullDate: '2018-07-07T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-08T07:00:00.000Z',
                        value: 2,
                        fullDate: '2018-07-08T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-09T07:00:00.000Z',
                        value: 1,
                        fullDate: '2018-07-09T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-10T07:00:00.000Z',
                        value: 4,
                        fullDate: '2018-07-10T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-11T07:00:00.000Z',
                        value: 2,
                        fullDate: '2018-07-11T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-12T07:00:00.000Z',
                        value: 1,
                        fullDate: '2018-07-12T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-13T07:00:00.000Z',
                        value: 6,
                        fullDate: '2018-07-13T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-14T07:00:00.000Z',
                        value: 5,
                        fullDate: '2018-07-14T07:00:00.000Z',
                    },
                    {
                        date: '2018-07-15T07:00:00.000Z',
                        value: 2,
                        fullDate: '2018-07-15T07:00:00.000Z',
                    },
                ],
            },
        ],
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-4">Line Chart</h4>
                <div className="line-container" style={chartContainerStyle}>
                    <Tooltip
                        data={lineData}
                        render={renderLine}
                        topicLabel="topics"
                        title="Sample Data"
                        dateLabel={'date'}
                        valueLabel={'value'}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default LineChart;
