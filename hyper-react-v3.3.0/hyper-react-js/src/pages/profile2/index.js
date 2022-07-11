// @flow
import React from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import Messages from '../../components/Messages';

import UserBox from './UserBox';
import About from './About';
import TimeLine from './TimeLine';
import Settings from './Settings';

// images
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../assets/images/users/avatar-6.jpg';

const index = (): React$Element<React$FragmentType> => {
    const projectDetails = [
        {
            id: 1,
            clientProfile: avatar2,
            client: 'Halette Boivin',
            name: 'App design and development',
            startDate: '01/01/2015',
            dueDate: '10/05/2018',
            status: 'Work in Progress',
        },
        {
            id: 2,
            clientProfile: avatar3,
            client: 'Durandana Jolicoeur',
            name: 'Coffee detail page - Main Page',
            startDate: '21/07/2016',
            dueDate: '12/05/2018',
            status: 'Pending',
        },
        {
            id: 3,
            clientProfile: avatar4,
            client: 'Lucas Sabourin',
            name: 'Poster illustation design',
            startDate: '18/03/2018',
            dueDate: '28/09/2018',
            status: 'Done',
        },
        {
            id: 4,
            clientProfile: avatar5,
            client: 'Donatien Brunelle',
            name: 'Drinking bottle graphics',
            startDate: '02/10/2017',
            dueDate: '07/05/2018',
            status: 'Work in Progress',
        },
        {
            id: 5,
            clientProfile: avatar6,
            client: 'Karel Auberjo',
            name: 'Landing page design - Home',
            startDate: '17/01/2017',
            dueDate: '25/05/2021',
            status: 'Coming soon',
        },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/profile2' },
                    { label: 'Profile 2', path: '/pages/profile2', active: true },
                ]}
                title={'Profile 2'}
            />
            <Row>
                <Col xl={4} lg={5}>
                    {/* User information */}
                    <UserBox />

                    {/* User's recent messages */}
                    <Messages />
                </Col>
                <Col xl={8} lg={7}>
                    <Tab.Container defaultActiveKey="timeline">
                        <Card>
                            <Card.Body>
                                <Nav variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item className="nav-item">
                                        <Nav.Link href="#" eventKey="aboutme" className="nav-link rounded-0">
                                            About
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                        <Nav.Link href="#" eventKey="timeline" className="nav-link rounded-0">
                                            Timeline
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                        <Nav.Link href="#" eventKey="settings" className="nav-link rounded-0">
                                            Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="aboutme">
                                        <About projectDetails={projectDetails} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="timeline">
                                        <TimeLine />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="settings">
                                        <Settings />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
        </>
    );
};

export default index;
