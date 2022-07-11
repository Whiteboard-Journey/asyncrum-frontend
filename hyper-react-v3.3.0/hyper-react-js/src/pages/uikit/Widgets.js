// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

// components
import CardTitle from '../../components/CardTitle';
import PageTitle from '../../components/PageTitle';
import StatisticsWidget from '../../components/StatisticsWidget';
import StatisticsChartWidget from '../../components/StatisticsChartWidget';
import StatisticsChartWidget2 from '../../components/StatisticsChartWidget2';
import ChatList from '../../components/ChatList';
import TodoList from '../../components/TodoList';
import Timeline from '../../components/Timeline';
import TimelineItem from '../../components/TimelineItem';
import Messages from '../../components/Messages';
import StatisticsChartWidget3 from '../../components/StatisticsChartWidget3';

// images
import profileImg from '../../assets/images/users/avatar-2.jpg';
import profilePic from '../../assets/images/users/avatar-1.jpg';
import profilePic2 from '../../assets/images/users/avatar-5.jpg';
import emailImg from '../../assets/images/email-campaign.svg';
import reportImg from '../../assets/images/report.svg';

const ProfileCard = () => {
    const profileStats = [
        { label: 'Total Revenue', value: '$ 25,184' },
        { label: 'Number of Orders', value: '5482' },
    ];

    return (
        <Card className={classnames('widget-flat')}>
            <Card.Body>
                <span className="float-start m-2 me-4">
                    <img src={profileImg} style={{ height: '100px' }} alt="" className="rounded-circle img-thumbnail" />
                </span>

                <div>
                    <h4 className="mt-1 mb-1">Michael Franklin</h4>
                    <p className="font-13"> Authorised Brand Seller</p>

                    <ul className="mb-0 list-inline">
                        {profileStats.map((stat, i) => {
                            return (
                                <li className="list-inline-item me-3" key={i + '-stat'}>
                                    <h5 className="mb-1">{stat.value}</h5>
                                    <p className="mb-0 font-13">{stat.label}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Card.Body>
        </Card>
    );
};

const Activity = () => {
    return (
        <Card>
            <Card.Body className="p-0">
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between px-3 pt-3 mb-2"
                    title="Recent Activity"
                    menuItems={[{ label: 'Settings' }, { label: 'Action' }]}
                />

                <SimpleBar className="px-3" style={{ maxHeight: '337px', width: '100%' }}>
                    <Timeline>
                        <TimelineItem>
                            <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-info fw-bold mb-1 d-block">
                                    You sold an item
                                </Link>
                                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">5 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">
                                    Product on the Bootstrap Market
                                </Link>
                                <small>
                                    Dave Gamache added <span className="fw-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-info fw-bold mb-1 d-block">
                                    Robert Delaney
                                </Link>
                                <small>
                                    Send you message
                                    <span className="fw-bold">"Are you there?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">
                                    Audrey Tobey
                                </Link>
                                <small>
                                    Uploaded a photo <span className="fw-bold">"Error.jpg"</span>{' '}
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">
                                    Product on the Bootstrap Market
                                </Link>
                                <small>
                                    Dave Gamache added <span className="fw-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-info fw-bold mb-1 d-block">
                                    Robert Delaney
                                </Link>
                                <small>
                                    Send you message
                                    <span className="fw-bold">"Are you there?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">
                                    Audrey Tobey
                                </Link>
                                <small>
                                    Uploaded a photo <span className="fw-bold">"Error.jpg"</span>{' '}
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </SimpleBar>
            </Card.Body>
        </Card>
    );
};

const Transactions = ({ transactions }) => {
    return (
        <>
            <Card>
                <Card.Body className="p-0">
                    <CardTitle
                        containerClass="d-flex align-items-center justify-content-between px-3 pt-3 mb-2"
                        title="Transaction"
                        menuItems={[{ label: 'Settings' }, { label: 'Action' }]}
                    />

                    <SimpleBar className="px-3" style={{ maxHeight: '335px', overflowX: 'hidden' }}>
                        {transactions.map((item, i) => {
                            return (
                                <Row key={i} className="py-1 align-items-center">
                                    <Col className="col-auto">
                                        <i className={classnames('font-18', item.icon, item.textClass)}></i>
                                    </Col>
                                    <Col className="ps-0">
                                        <Link to="#" className="text-body">
                                            {item.title}
                                        </Link>
                                        <p className="mb-0 text-muted">
                                            <small>{item.time}</small>
                                        </p>
                                    </Col>
                                    <Col className="col-auto">
                                        <span className={classnames('fw-bold', 'pe-2', item.textClass)}>
                                            {item.amount}
                                        </span>
                                    </Col>
                                </Row>
                            );
                        })}
                    </SimpleBar>
                </Card.Body>
            </Card>
        </>
    );
};

const Widgets = (): React$Element<React$FragmentType> => {
    const chatMessages = [
        {
            id: 1,
            userPic: profilePic2,
            userName: 'Geneva',
            text: 'Hello!',
            postedOn: '10:00',
        },
        {
            id: 2,
            userPic: profilePic,
            userName: 'Dominic',
            text: 'Hi, How are you? What about our next meeting?',
            postedOn: '10:01',
        },
        {
            id: 3,
            userPic: profilePic2,
            userName: 'Geneva',
            text: 'Yeah everything is fine',
            postedOn: '10:02',
        },
        {
            id: 4,
            userPic: profilePic,
            userName: 'Dominic',
            text: "Wow that's great!",
            postedOn: '10:03',
        },
        {
            id: 5,
            userPic: profilePic2,
            userName: 'Dominic',
            text: 'Cool!',
            postedOn: '10:03',
        },
    ];

    const transactionData = [
        {
            icon: 'mdi mdi-arrow-collapse-up',
            title: 'Purchased Hyper Admin Template',
            time: 'Today',
            amount: '-$489.30',
            textClass: 'text-danger',
        },
        {
            icon: 'mdi mdi-arrow-collapse-down',
            title: 'Payment received Bootstrap Marketplace',
            time: 'Yesterday',
            amount: '+$1578.54',
            textClass: 'text-success',
        },
        {
            icon: 'mdi mdi-arrow-collapse-down',
            title: 'Freelance work - Shane',
            time: '16 Sep 2018',
            amount: '+$247.5',
            textClass: 'text-success',
        },
        {
            icon: 'mdi mdi-arrow-collapse-up',
            title: 'Hire new developer for work',
            time: '09 Sep 2018',
            amount: '-$185.14',
            textClass: 'text-danger',
        },
        {
            icon: 'mdi mdi-arrow-collapse-down',
            title: 'Money received from paypal',
            time: '28 Aug 2018',
            amount: '+$684.45',
            textClass: 'text-success',
        },
        {
            icon: 'mdi mdi-arrow-collapse-up',
            title: 'Zairo landing purchased',
            time: '17 Aug 2018',
            amount: '-$21.00',
            textClass: 'text-danger',
        },
        {
            icon: 'mdi mdi-arrow-collapse-up',
            title: 'Purchased Ubold admin template',
            time: '17 Aug 2018',
            amount: '-$32.89',
            textClass: 'text-danger',
        },
        {
            icon: 'mdi mdi-arrow-collapse-down',
            title: 'Interest received',
            time: '09 Sep 2018',
            amount: '+$784.55',
            textClass: 'text-success',
        },
    ];

    return (
        <>
            <PageTitle breadCrumbItems={[{ label: 'Widgets', path: '/ui/widgets', active: true }]} title={'Widgets'} />

            <Row>
                <Col xl={4} lg={12}>
                    {/* profile widget */}
                    <ProfileCard />
                </Col>

                {/* chart based widget */}
                <Col xl={4} sm={6}>
                    <StatisticsChartWidget2
                        name="Hyper Sales"
                        type="area"
                        title="$424,652"
                        subtitle="Sales"
                        data={[
                            47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
                            46,
                        ]}></StatisticsChartWidget2>
                </Col>
                <Col xl={4} sm={6}>
                    <StatisticsChartWidget2
                        name="Net Profits"
                        type="bar"
                        title="$135,965"
                        subtitle="Profits"
                        colors={['#0acf97']}
                        data={[
                            47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
                            46,
                        ]}></StatisticsChartWidget2>
                </Col>
            </Row>

            {/* StatisticsWidget */}
            <Row>
                <Col xxl={3} sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-currency-btc bg-danger rounded-circle text-white"
                        description="Number of Customers"
                        title="Revenue"
                        stats="$6,254"
                        trend={{
                            textClass: 'badge bg-info',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '7.00%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
                <Col xxl={3} sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-pulse"
                        description="Number of Orders"
                        title="Growth"
                        stats="+ 30.56%"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '4.87%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
                <Col xxl={3} sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-account-multiple bg-white text-success"
                        description="Customers"
                        title="Customers"
                        stats="36,254"
                        trend={{
                            textClass: 'badge badge-light-lighten',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}
                        bgclassName="bg-success"
                        textClass="text-white"></StatisticsWidget>
                </Col>
                <Col xxl={3} sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-currency-usd bg-light-lighten rounded-circle text-white"
                        description="Revenue"
                        title="Revenue"
                        stats="$10,245"
                        trend={{
                            textClass: 'badge bg-info',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '17.26%',
                            time: 'Since last month',
                        }}
                        bgclassName="bg-primary"
                        textClass="text-white"></StatisticsWidget>
                </Col>
            </Row>

            {/* Statistics Widget with chart */}
            <Row>
                <Col sm={6} xxl={3}>
                    <StatisticsChartWidget
                        description="Campaign Sent"
                        title="Campaign Sent"
                        stats="9,184"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '3.27%',
                        }}
                        colors={['#727cf5']}
                        data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}></StatisticsChartWidget>
                </Col>
                <Col sm={6} xxl={3}>
                    <StatisticsChartWidget
                        description="New Leads"
                        title="New Leads"
                        stats="3,254"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.38%',
                        }}
                        colors={['#727cf5']}
                        type="line"
                        data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}></StatisticsChartWidget>
                </Col>
                <Col sm={6} xxl={3}>
                    <StatisticsChartWidget
                        description="Deals"
                        title="Deals"
                        stats="861"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '4.87%',
                        }}
                        colors={['#727cf5']}
                        data={[12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]}></StatisticsChartWidget>
                </Col>
                <Col sm={6} xxl={3}>
                    <StatisticsChartWidget
                        description="Booked Revenue"
                        title="Booked Revenue"
                        stats="$253k"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '11.7%',
                        }}
                        colors={['#727cf5']}
                        data={[47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]}></StatisticsChartWidget>
                </Col>
            </Row>

            {/* chat */}
            <Row>
                <Col xl={4}>
                    <ChatList messages={chatMessages}></ChatList>
                </Col>

                {/* static widget */}
                <Col xl={4}>
                    <Card className="cta-box bg-danger text-white">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="w-100 overflow-hidden">
                                    <h2 className="mt-0">
                                        <i className="mdi mdi-bullhorn-outline"></i>
                                    </h2>
                                    <h3 className="m-0 fw-normal cta-box-title">
                                        Enhance your <b>Campaign</b> for better outreach{' '}
                                        <i className="mdi mdi-arrow-right-bold-outline"></i>
                                    </h3>
                                </div>
                                <img className="ms-3" src={emailImg} width="120" alt="" />
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="cta-box bg-primary text-white">
                        <Card.Body>
                            <div className="text-center">
                                <h3 className="m-0 fw-normal cta-box-title">
                                    Enhance your <b>Campaign</b> for better outreach
                                </h3>

                                <img className="my-3" src={reportImg} width="180" alt="" />
                                <br />
                                <Link to="#" className="btn btn-sm btn-light btn-rounded">
                                    Know More <i className="mdi mdi-arrow-right"></i>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4}>
                    {/* TODO */}
                    <TodoList addTodo={true} height="314px" />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <Messages />
                </Col>

                <Col xl={4}>
                    <Activity />
                </Col>

                <Col xl={4}>
                    <Transactions transactions={transactionData} />
                </Col>
            </Row>

            <Row>
                <Col xxl={3} md={6}>
                    <StatisticsChartWidget3
                        title="Sales Summary"
                        stats="259"
                        lastMonthData="358"
                        CurrentMonthData="194"
                        name="series-1"
                        type="line"
                        colors={['#734CEA']}
                        strokeWidth={4}
                        data={[25, 66, 41, 59, 25, 44, 12, 36, 9, 21]}
                    />
                </Col>

                <Col xxl={3} md={6}>
                    <StatisticsChartWidget3
                        title="Revenue"
                        stats="$6,254"
                        lastMonthData="$781.12"
                        CurrentMonthData="$128.2"
                        name="series-1"
                        colors={['#34bfa3']}
                        strokeWidth={2}
                        borderRadius={1}
                        data={[12, 14, 2, 47, 32, 44, 14, 55, 41, 69]}
                    />
                </Col>

                <Col xxl={3} md={6}>
                    <StatisticsChartWidget3
                        title="Active Users"
                        stats="324"
                        lastMonthData="+15"
                        CurrentMonthData="-6.87%"
                        name="series-1"
                        type="line"
                        colors={['#f4516c']}
                        strokeWidth={4}
                        data={[47, 45, 74, 32, 56, 31, 44, 33, 45, 19]}
                    />
                </Col>

                <Col xxl={3} md={6}>
                    <StatisticsChartWidget3
                        title="Expense Summary"
                        stats="$4,745.2"
                        lastMonthData="$7814"
                        CurrentMonthData="$4782.8"
                        name="series-1"
                        colors={['#00c5dc']}
                        strokeWidth={2}
                        borderRadius={5}
                        data={[12, 14, 2, 47, 32, 44, 14, 55, 41, 69]}
                    />
                </Col>
            </Row>

            {/* static widget */}
            <Row>
                <Col lg={4}>
                    <Card className="text-white bg-info overflow-hidden">
                        <Card.Body>
                            <div className="toll-free-box text-center">
                                <h4>
                                    {' '}
                                    <i className="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901
                                </h4>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="text-white bg-danger overflow-hidden">
                        <Card.Body>
                            <div className="toll-free-box text-center">
                                <h4>
                                    {' '}
                                    <i className="mdi mdi-headset"></i> Need help ? Just contact us
                                </h4>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="text-white bg-success text-white">
                        <Card.Body>
                            <div className="text-center">
                                <h4>
                                    {' '}
                                    <i className="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901
                                </h4>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Widgets;
