import { Row, Col } from 'react-bootstrap';
import { PageTitle } from 'components';
import LineChart from './LineChart';
import LineAnnotationChart from './LineAnnotationChart';
import SplineAreaChart from './SplineAreaChart';
import StackedAreaChart from './StackedAreaChart';
import BarChart from './BarChart';
import StackedBarChart from './StackedBarChart';
import DonutChart from './DonutChart';
import PieChart from './PieChart';
import MixedChart from './MixedChart';

const ApexChart = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Charts', path: '/features/charts/apex' },
                    { label: 'Apex', path: '/features/charts/apex', active: true },
                ]}
                title={'Apex Charts'}
            />

            <Row>
                <Col xl={6}>
                    <LineChart />
                </Col>

                <Col xl={6}>
                    <LineAnnotationChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <SplineAreaChart />
                </Col>

                <Col xl={6}>
                    <StackedAreaChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <BarChart />
                </Col>

                <Col xl={6}>
                    <StackedBarChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <DonutChart />
                </Col>

                <Col xl={6}>
                    <PieChart />
                </Col>
            </Row>

            <Row>
                <Col>
                    <MixedChart />
                </Col>
            </Row>
        </>
    );
};

export { ApexChart };
