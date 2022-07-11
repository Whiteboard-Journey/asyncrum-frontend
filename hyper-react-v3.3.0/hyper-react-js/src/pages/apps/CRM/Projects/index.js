// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../../components/PageTitle';

import ProjectList from './ProjectList';
import ProjectSummary from './ProjectSummary';
import Statistics from './Statistics';
import MonthlyTarget from './MonthlyTarget';
import ProjectStatistics from './ProjectStatistics';
import ProjectOverview from './ProjectOverview';
import DailyTask from './DailyTask';
import TeamMembers from './TeamMembers';

// data
import { members, projectList, statisticsData, tasksData } from './data';

const Projects = (): React$Element<React$FragmentType> => {
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
                    <DailyTask taskData={tasksData} />
                </Col>
                <Col xxl={3} md={6}>
                    <TeamMembers members={members} />
                </Col>
            </Row>
        </>
    );
};

export default Projects;
