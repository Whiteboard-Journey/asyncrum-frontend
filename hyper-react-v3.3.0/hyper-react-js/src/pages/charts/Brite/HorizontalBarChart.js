// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar, withResponsiveness } from 'britecharts-react';

const ResponsiveBarChart = withResponsiveness(Bar);

// simple horizontal bar chart
const HorizontalBarChart = (): React$Element<any> => {
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
                <h4 className="header-title mb-4">Horizontal Bar Chart</h4>
                <div className="bar-container" style={chartContainerStyle}>
                    <ResponsiveBarChart
                        data={barChartData}
                        isHorizontal={true}
                        height={300}
                        enableLabels={true}
                        percentageAxisToMaxRatio={1.3}
                        labelsNumberFormat={1}
                        colorSchema={['#727cf5', '#0acf97', '#6c757d', '#fa5c7c', '#ffbc00', '#39afd1', '#e3eaef']}
                        margin={{ top: 10, left: 50, bottom: 20, right: 10 }}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default HorizontalBarChart;
