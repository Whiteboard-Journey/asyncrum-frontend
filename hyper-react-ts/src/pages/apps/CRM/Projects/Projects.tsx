import { Row, Col } from 'react-bootstrap';
import { PageTitle } from 'components';
import ProjectList from './ProjectList';
import ProjectSummary from './ProjectSummary';
import Statistics from './Statistics';
import MonthlyTarget from './MonthlyTarget';
import ProjectStatistics from './ProjectStatistics';
import ProjectOverview from './ProjectOverview';
import DailyTasks from './DailyTasks';
import TeamMembers from './TeamMembers';
import { members, projectList, statisticsData, tasksData } from './data';

const Projects = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'CRM', path: '/apps/crm/projects' },
                    { label: 'Projects', path: '/apps/crm/projects', active: true },
                ]}
                title={'Projects'}
            />

            <Row>
                <Col xxl={9}>
                    <ProjectList projectList={projectList} />
                    <Row>
                        <Col xxl={3} md={4}>
                            <MonthlyTarget />
                        </Col>
                        <Col xxl={9} md={8}>
                            <ProjectStatistics />
                        </Col>
                    </Row>
                </Col>

                <Col xxl={3}>
                    <ProjectSummary />
                </Col>
            </Row>

            <Row>
                <Statistics statisticsData={statisticsData} />
            </Row>

            <Row>
                <Col xxl={6}>
                    <ProjectOverview />
                </Col>
                <Col xxl={3} md={6}>
                    <DailyTasks taskData={tasksData} />
                </Col>
                <Col xxl={3} md={6}>
                    <TeamMembers members={members} />
                </Col>
            </Row>
        </>
    );
};

export { Projects };
