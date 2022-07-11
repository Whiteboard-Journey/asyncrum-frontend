// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar, withResponsiveness } from 'britecharts-react';

const ResponsiveBarChart = withResponsiveness(Bar);

// simple bar chart
const BarChart = (): React$Element<any> => {
    // container style
    const chartContainerStyle = {
        width: '100%',
        height: '300px',
    };

    // chart data
    const barChartData = [
        { name: 'Mon', value: 2100 },
        { name: 'Tue', value: 5000 },
        { name: 'Wed', value: 4000 },
        { name: 'Thu', value: 5500 },
        { name: 'Fri', value: 6500 },
        { name: 'Sat', value: 4500 },
        { name: 'Sun', value: 3500 },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-4">Bar Chart</h4>
                <div className="bar-container" style={chartContainerStyle}>
                    <ResponsiveBarChart
                        isAnimated={false}
                        data={barChartData}
                        isHorizontal={false}
                        height={300}
                        betweenBarsPadding={0.5}
                        colorSchema={['#39afd1']}
                        margin={{ top: 10, left: 55, bottom: 20, right: 10 }}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default BarChart;
