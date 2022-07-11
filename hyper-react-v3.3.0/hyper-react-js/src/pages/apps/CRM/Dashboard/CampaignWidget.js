// @flow
import React from 'react';
import { Card } from 'react-bootstrap';

// images
import campaignSvg from '../../../../assets/images/email-campaign.svg';

const CampaignWidget = (): React$Element<React$FragmentType> => {
    return (
        <Card className="cta-box bg-primary text-white">
            <Card.Body>
                <div className="d-flex align-items-start align-items-center">
                    <div className="w-100 overflow-hidden">
                        <h2 className="mt-0">
                            <i className="mdi mdi-bullhorn-outline"></i>
                        </h2>
                        <h3 className="m-0 fw-normal cta-box-title">
                            Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right"></i>
                        </h3>
                    </div>
                    <img className="ms-3" src={campaignSvg} width="120" alt="Generic placeholder" />
                </div>
            </Card.Body>
        </Card>
    );
};

export default CampaignWidget;
