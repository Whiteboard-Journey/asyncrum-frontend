import { Row, Col, Card, Button } from 'react-bootstrap';
import { FormInput, FileUploader } from 'components';
import LeftPanel from './LeftPanel';
import profileImage from './Komputer_P.png';

const Settings = () => {
    const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
    const userImage = user.profileImageUrl;

    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Settings</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="page-aside-left">
                                <LeftPanel />
                            </div>

                            <div className="page-aside-right">
                                <Row>
                                    <Col md={7}>
                                    <form>
                                        <FormInput
                                            label="Full Name"
                                            type="text"
                                            name="fullName"
                                            containerClass={'mb-4'}
                                            key="fullName"
                                        />
                                        <FormInput
                                            label="Company Name"
                                            type="text"
                                            name="companyName"
                                            containerClass={'mb-4'}
                                            key="companyName"
                                        />
                                        <FormInput
                                            label="Role"
                                            type="text"
                                            name="role"
                                            containerClass={'mb-4'}
                                            key="role"
                                        />
                                        <Button color="primary" type="submit">
                                            Save Changes
                                        </Button>
                                    </form>
                                    </Col>
                                    <Col md={{ span: 4, offset: 1 }}>
                                    <form>
                                        <div>
                                            <p className='mb-1' style={{ fontWeight: '600' }}>Profile Image</p>
                                            <img src={profileImage} className="rounded" />
                                            <FileUploader
                                            />
                                        </div>
                                    </form>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Settings;
