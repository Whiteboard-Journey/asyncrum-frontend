import { Col, Row } from 'react-bootstrap';
import { PageTitle } from 'components';
import RevenueStatistics from './RevenueStatistics';
import Projects from './Projects';
import ClientWidget from './ClientWidget';
import MonthlyProgress from './MonthlyProgress';
import TaskStatus from './TaskStatus';
import Calendar from './Calendar';
import { clients, progressDetails, projectsData, tasks } from './data';

const CRMManagement = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'CRM', path: '/apps/crm/management' },
                    { label: 'Management', path: '/apps/crm/management', active: true },
                ]}
                title={'Management'}
            />

            <Row>
                <Col xxl={6}>
                    <RevenueStatistics />
                </Col>
                <Col xxl={6}>
                    <Projects projectsData={projectsData} />
                </Col>
            </Row>

            <h4 className="page-title mb-3">Recently Updated Clients</h4>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5">
                <ClientWidget clients={clients} />
            </Row>

            <Row>
                <Col xxl={6}>
                    <MonthlyProgress progressDetails={progressDetails} />
                </Col>
                <Col xxl={3} md={6}>
                    <TaskStatus tasks={tasks} />
                </Col>
                <Col xxl={3} md={6}>
                    <Calendar />
                </Col>
            </Row>
        </>
    );
};

export { CRMManagement };
