import { Row, Col, Card, Button } from 'react-bootstrap';
import { FormInput } from 'components';
import LeftPanel from './LeftPanel';
import React, { useRef, useState } from 'react';
import config from 'config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!)

const PersonalSettings = () => {
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

    const onSaveProfileImage = (e: React.MouseEvent<HTMLElement>) => {
        if (!profileImageFile) {
            return;
        }
        else {
            axios.post(config.API_URL+"/api/v1/member/images/"+user.id, null, { headers: { Authorization: 'Bearer ' + user.token }})
                .then(res => {
                    const preSignedURL = res.data.preSignedURL;
                    const uploadAxios = axios.create({ transformRequest: [(data: any, headers: any) => {
                        delete headers.common.Authorization;
                        headers['Content-Type'] = 'image/png';
                        return profileImageFile;
                    }] });
                    uploadAxios.put(preSignedURL, profileImageFile).then(() => {
                        notify();
                    });
                })
        }
    }

    const onSubmitProfileInfo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fullname = (((e.target as HTMLFormElement).elements as {[key: string]: any})['fullname'].value);
        const nickname = "";
        axios.patch(`${config.API_URL + "/api/v1/members/" + user.id}`, { fullname, nickname }, { headers: { Authorization: 'Bearer ' + user.token }})
            .then(() => {
                user.fullname = fullname;
                sessionStorage.setItem('asyncrum_user', JSON.stringify(user));
                window.location.reload();
            });
    }

    const notify = () => toast(
        <div>
            Profile image saved successfully!
            <br />
            The change might take a few minutes to be applied.
        </div>);

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
                                <LeftPanel selected="personal" />
                            </div>

                            <div className="page-aside-right">
                                <h4 className="mb-3">Change Personal Information</h4>
                                <Row>
                                    <Col md={7}>
                                    <form onSubmit={onSubmitProfileInfo}>
                                        <FormInput
                                            label="Full Name"
                                            type="text"
                                            name="fullname"
                                            containerClass={'mb-3'}
                                            key="fullname"
                                            placeholder={user.fullname}
                                            required
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
                                        <div style={{ height: 190, position: "relative" }}>
                                            <p className='mb-1' style={{ fontWeight: '600' }}>Profile Image</p>
                                            <div className='overlay-container'>
                                                <img src={previewImage} alt="profile preview" className="rounded ratio ratio-1x1" style={{ position: "absolute", width: 150, height: 150, cursor: "pointer" }} referrerPolicy="no-referrer" />
                                                <input 
                                                    type='file' 
                                                    // accept='image/jpg, image/png, image/jpeg' 
                                                    accept='image/png'
                                                    style={{display:'none'}}
                                                    name='profileImage'
                                                    onChange={onChange}
                                                    ref={fileInput}
                                                />
                                                <div className='overlay rounded' onClick={()=>{fileInput.current!.click()}}>
                                                    <div className='overlay-text'>click to upload</div>
                                                </div>
                                            </div>
                                        </div>
                                        <Button className="me-2" onClick={onSaveProfileImage} >
                                            Save
                                        </Button>
                                        <Button className="btn btn-secondary" onClick={onCancelProfileImageChange} >
                                            Cancel
                                        </Button>
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

export default PersonalSettings;
