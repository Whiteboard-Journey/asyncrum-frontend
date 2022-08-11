import { Row, Col, Card, Button } from 'react-bootstrap';
import { FormInput, FileUploader } from 'components';
import LeftPanel from './LeftPanel';
import profileImage from './Komputer_P.png';
import { useRef, useState } from 'react';

const Settings = () => {
    const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
    const [userImage, setUserImage] = useState(user.profileImageUrl);
    const fileInput = useRef(null);

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
                                            containerClass={'mb-3'}
                                            key="fullName"
                                        />
                                        <FormInput
                                            label="Company Name"
                                            type="text"
                                            name="companyName"
                                            containerClass={'mb-3'}
                                            key="companyName"
                                        />
                                        <FormInput
                                            label="Role"
                                            type="text"
                                            name="role"
                                            containerClass={'mb-3'}
                                            key="role"
                                        />
                                        <Button color="primary" type="submit">
                                            Save Changes
                                        </Button>
                                    </form>
                                    </Col>
                                    <Col md={{ span: 3, offset: 2 }}>
                                    <form>
                                        <div style={{ height: 200, position: "relative" }}>
                                            <p className='mb-1' style={{ fontWeight: '600' }}>Profile Image</p>
                                            <img src={profileImage} className="rounded ratio ratio-1x1" style={{ position: "absolute", width: 150, height: 150 }} />
                                            <FileUploader />
                                        </div>
                                        <Button color="primary" type="submit" >
                                            Save Image
                                        </Button>
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
