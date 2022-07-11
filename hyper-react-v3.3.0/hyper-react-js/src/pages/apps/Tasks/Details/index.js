// @flow
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../../components/PageTitle';

import Task from './Task';
import Comments from './Comments';
import Attachments from './Attachments';

// dummy data
import { Tasks } from './Data';

// TaskDetails
const TaskDetails = (): React$Element<React$FragmentType> => {
    const [selectedTask] = useState(Tasks[0]);

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

export default TaskDetails;
