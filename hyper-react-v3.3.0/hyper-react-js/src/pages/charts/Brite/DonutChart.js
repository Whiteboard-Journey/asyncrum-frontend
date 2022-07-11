// @flow
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Donut, Legend, ResponsiveContainer } from 'britecharts-react';

// donut chart
const DonutChart = (): React$Element<any> => {
    // chart data
    const donutData = [
        { name: 'Shiny', id: 1, quantity: 86, percentage: 5 },
        { name: 'Blazing', id: 2, quantity: 300, percentage: 18 },
        { name: 'Dazzling', id: 3, quantity: 276, percentage: 16 },
        { name: 'Radiant', id: 4, quantity: 195, percentage: 11 },
        { name: 'Sparkling', id: 5, quantity: 36, percentage: 2 },
        { name: 'Other', id: 0, quantity: 814, percentage: 48 },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-4">Donut Chart</h4>
                <div className="donut-container">
                    <ResponsiveContainer
                        render={() => (
                            <Row>
                                <Col>
                                    <Donut
                                        data={donutData}
                                        height={300}
                                        internalRadius={80}
                                        colorSchema={['#727cf5', '#0acf97', '#6c757d', '#fa5c7c', '#ffbc00', '#39afd1']}
                                        isAnimated={false}
                                        hasFixedHighlightedSlice={true}
                                    />
                                </Col>
                                <Col>
                                    <Legend
                                        data={donutData}
                                        height={200}
                                        width={250}
                                        numberFormat={'s'}
                                        colorSchema={['#727cf5', '#0acf97', '#6c757d', '#fa5c7c', '#ffbc00', '#39afd1']}
                                        margin={{ top: 10, bottom: 10, left: 0, right: 30 }}
                                    />
                                </Col>
                            </Row>
                        )}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default DonutChart;
