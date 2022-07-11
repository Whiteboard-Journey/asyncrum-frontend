// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import PricingCard from '../../components/PricingCard';

// Pricing component
const Pricing = (): React$Element<React$FragmentType> => {
    const plans = [
        {
            id: 1,
            name: 'Professional Pack',
            icon: 'dripicons-user',
            price: '$19',
            duration: 'Month',
            features: ['10 GB Storage', '500 GB Bandwidth', 'No Domain', '1 User', 'Email Support', '24x7 Support'],
            isRecommended: false,
        },
        {
            id: 2,
            name: 'Business Pack',
            icon: 'dripicons-briefcase',
            price: '$29',
            duration: 'Month',
            features: ['50 GB Storage', '900 GB Bandwidth', '2 Domain', '10 User', 'Email Support', '24x7 Support'],
            isRecommended: true,
        },
        {
            id: 3,
            name: 'Enterprise Pack',
            icon: 'dripicons-store',
            price: '$39',
            duration: 'Month',
            features: [
                '100 GB Storage',
                'Unlimited Bandwidth',
                '10 Domain',
                'Unlimited Users',
                'Email Support',
                '24x7 Support',
            ],
            isRecommended: false,
        },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/pricing' },
                    { label: 'Pricing', path: '/pages/pricing', active: true },
                ]}
                title={'Pricing'}
            />

            <Row className="justify-content-center">
                <Col xl={10}>
                    <div className="text-center">
                        <h3 className="mb-2">Our Plans and Pricing</h3>
                        <p className="text-muted w-50 m-auto">
                            We have plans and prices that fit your business perfectly. Make your client site a success
                            with our products.
                        </p>
                    </div>

                    {/* pricing cards */}
                    <PricingCard plans={plans} containerClass={'mt-sm-5 mt-3 mb-3'} />
                </Col>
            </Row>
        </>
    );
};

export default Pricing;
