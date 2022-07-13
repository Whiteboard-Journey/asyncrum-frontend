import { Row, Col } from 'react-bootstrap';
import { PageTitle } from 'components';
import UserProfile from './UserProfile';
import Events from './Events';
import News from './News';
import Feeds from './Feeds';
import FeaturedVideo from './FeaturedVideo';
import Followers from './Followers';

const SocialFeed = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/social' },
                    { label: 'Social Feed', path: '/apps/social', active: true },
                ]}
                title={'Social Feed'}
            />

            <Row>
                <Col xxl={3} lg={6} className="order-lg-1 order-xxl-1">
                    <UserProfile />
                    <Events />
                    <News />
                </Col>

                <Col xxl={6} lg={12} className="order-lg-2 order-xxl-1">
                    <Feeds />
                </Col>

                <Col xxl={3} lg={6} className="order-lg-1 order-xxl-2">
                    <FeaturedVideo />
                    <Followers />
                </Col>
            </Row>
        </>
    );
};

export { SocialFeed };
