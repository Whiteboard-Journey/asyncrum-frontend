import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import { Messages, PageTitle } from 'components';
import UserBox from './UserBox';
import About from './About';
import TimeLine from './TimeLine';
import Settings from './Settings';
import { projects, posts } from './data';

const Profile2 = () => {
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
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="aboutme" className=" rounded-0">
                                            About
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="timeline" className=" rounded-0">
                                            Timeline
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="settings" className=" rounded-0">
                                            Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="aboutme">
                                        <About projects={projects} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="timeline">
                                        <TimeLine posts={posts} />
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

export { Profile2 };
