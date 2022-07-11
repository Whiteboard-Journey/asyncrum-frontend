// @flow
import React from 'react';
import { Card } from 'react-bootstrap';

// component
import CardTitle from '../../../components/CardTitle';

const FeaturedVideo = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Card>
                <Card.Body>
                    <CardTitle
                        containerClass="d-flex align-items-center justify-content-between mb-1"
                        title="Featured Video For You"
                        icon="mdi mdi-dots-horizontal"
                        menuItems={[
                            { label: 'Today' },
                            { label: 'Yesterday' },
                            { label: 'Last Week' },
                            { label: 'Last Month' },
                        ]}
                    />

                    <div className="mt-3">
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="embed-responsive-item"
                                title="video"
                                src="https://www.youtube.com/embed/9_eqq0HlN9g?autohide=0&showinfo=0&controls=0"></iframe>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default FeaturedVideo;
