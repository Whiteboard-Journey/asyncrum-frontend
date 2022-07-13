import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { PageTitle } from 'components';
import Task from './Task';
import Comments from './Comments';
import Attachments from './Attachments';
import { ListTaskItem } from '../types';
import { Tasks } from './data';

const TaskDetails = () => {
    const [selectedTask] = useState<ListTaskItem>(Tasks[0]);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tasks', path: '/apps/tasks/details' },
                    { label: 'Task Detail', path: '/apps/tasks/details', active: true },
                ]}
                title={'Task Detail'}
            />
            <Row>
                <Col xxl={8} xl={7}>
                    <Task task={selectedTask} />
                    <Comments />
                </Col>
                <Col xxl={4} xl={5}>
                    <Attachments />
                </Col>
            </Row>
        </>
    );
};

export { TaskDetails };
