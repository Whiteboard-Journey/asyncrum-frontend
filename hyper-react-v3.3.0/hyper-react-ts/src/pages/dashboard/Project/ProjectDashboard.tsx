import { Row, Col } from 'react-bootstrap';
import { PageTitle } from 'components';
import Statistics from './Statistics';
import Status from './Status';
import Tasks from './Tasks';
import TasksChart from './TasksChart';
import Activity from './Activity';
import Calendar from './Calendar';

const ProjectDashboard = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/' },
                    { label: 'Projects', path: '/dashboard/project', active: true },
                ]}
                title={'Projects'}
            />

            <Statistics />

            <Row>
                <Col lg={4}>
                    <Status />
                </Col>
                <Col lg={8}>
                    <Tasks />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <TasksChart />
                </Col>
            </Row>

            <Row>
                <Col xl={5}>
                    <Activity />
                </Col>
                <Col xl={7}>
                    <Calendar />
                </Col>
            </Row>
        </>
    );
};

export { ProjectDashboard };
