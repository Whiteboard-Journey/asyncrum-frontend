import { Row, Col, Card, Button } from 'react-bootstrap';
import { FormInput } from 'components';
import LeftPanel from './LeftPanel';
import { useRef, useState } from 'react';
import config from 'config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!)

const Settings = () => {
    const [previewImage, setPreviewImage] = useState<string>(user.profileImageUrl);
    const [profileImageFile, setProfileImageFile] = useState<null | File>();
    const fileInput = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files) {
            setPreviewImage(user.profileImageUrl);
            return;
        } else {
            setProfileImageFile(e.target.files[0]);
        }

        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2){
                setPreviewImage(reader.result as string);
            }
        }

        reader.readAsDataURL(e.target.files[0]);
    };

    const onCancelProfileImageChange = () => {
        setPreviewImage(user.profileImageUrl);
        setProfileImageFile(null);
    }

    const onSaveProfileImage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!(e.target as HTMLFormElement).data) {
            return;
        }
        else {
            axios.post(config.API_URL+"/api/v1/member/images/"+user.id, null, { headers: { Authorization: 'Bearer ' + user.token }})
                .then(res => {
                    const preSignedURL = res.data.preSignedURL;
                    const uploadAxios = axios.create({ transformRequest: [(data: any, headers: any) => {
                        delete headers.common.Authorization;
                        headers['content-type'] = 'image/png';
                        return profileImageFile;
                    }] });
                    uploadAxios.put(preSignedURL, profileImageFile).then(() => {
                        notify();
                    });
                })
        }
    }

    const notify = () => toast("Profile image saved successfully!");

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
                                        <form onSubmit={onSaveProfileImage}>
                                            <div style={{ height: 190, position: "relative" }}>
                                                <p className='mb-1' style={{ fontWeight: '600' }}>Profile Image</p>
                                                <img src={previewImage} alt="profile preview" className="rounded ratio ratio-1x1" style={{ position: "absolute", width: 150, height: 150, cursor: "pointer" }} onClick={()=>{fileInput.current!.click()}} referrerPolicy="no-referrer" />
                                                <input 
                                                    type='file' 
                                                    // accept='image/jpg, image/png, image/jpeg' 
                                                    accept='image/png'
                                                    style={{display:'none'}}
                                                    name='profileImage'
                                                    onChange={onChange}
                                                    ref={fileInput}
                                                />
                                            </div>
                                            <Button className="me-2" type="submit" >
                                                Save
                                            </Button>
                                            <Button className="btn btn-secondary" onClick={onCancelProfileImageChange} >
                                                Cancel
                                            </Button>
                                        </form>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default Settings;
