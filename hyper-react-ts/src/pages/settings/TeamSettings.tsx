import { Row, Col, Card, Button } from 'react-bootstrap';
import { FormInput } from 'components';
import LeftPanel from './LeftPanel';
import React, { useEffect, useRef, useState } from 'react';
import config from 'config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Member = {
    fullname: string;
    profileImageUrl: string;
}

type Team = {
    id: number;
    name: string;
    pictureUrl: string;
    members: Member[];
}

const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!)

const TeamSettings = () => {
    const [team, setTeam] = useState<Team>();
    const [previewImage, setPreviewImage] = useState<string>();
    const [profileImageFile, setProfileImageFile] = useState<null | File>();
    const fileInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        axios.get(config.API_URL+"/api/v1/teams/"+user.id, { headers: { Authorization: 'Bearer ' + user.token }})
            .then(res => {
                let teaminfo: Team = {
                    id: res.data.id,
                    name: res.data.name,
                    pictureUrl: res.data.pictureUrl,
                    members: res.data.members.map((member: Member) => ({
                        fullname: member.fullname,
                        profileImageUrl: member.profileImageUrl
                    }))
                };
                setTeam(teaminfo);
                setPreviewImage(team?.pictureUrl)
            });
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files) {
            setPreviewImage(team?.pictureUrl);
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
        setPreviewImage(team?.pictureUrl);
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
        const name = (((e.target as HTMLFormElement).elements as {[key: string]: any})['name'].value);
        axios.patch(`${config.API_URL + "/api/v1/teams/" + team?.id}`, { name }, { headers: { Authorization: 'Bearer ' + user.token }})
            .then(() => {
                window.location.reload();
            });
    }

    const notify = () => toast(
        <div>
            Team logo saved successfully!
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
                                <LeftPanel selected="team" />
                            </div>

                            <div className="page-aside-right">
                                <h4 className="mb-3">Change Team Information</h4>
                                <Row>
                                    <Col md={7}>
                                    <form onSubmit={onSubmitProfileInfo}>
                                        <FormInput
                                            label="Team Name"
                                            type="text"
                                            name="name"
                                            containerClass={'mb-3'}
                                            key="name"
                                            placeholder={team?.name}
                                            required
                                        />
                                        <Button color="primary" type="submit">
                                            Save Changes
                                        </Button>
                                    </form>
                                    </Col>
                                    <Col md={{ span: 3, offset: 2 }}>
                                        <div style={{ height: 190, position: "relative" }}>
                                            <p className='mb-1' style={{ fontWeight: '600' }}>Team Logo</p>
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
                                        <Button className="me-2" onClick={onSaveProfileImage} >
                                            Save
                                        </Button>
                                        <Button className="btn btn-secondary" onClick={onCancelProfileImageChange} >
                                            Cancel
                                        </Button>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        <span className='h4 mb-1 me-3' >Members</span>
                                        <Button className="btn btn-primary">
                                            Invite
                                        </Button>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        <h4>Leave Whiteboard Journey team</h4>
                                        <p>By leaving the team, you will lose access to all its contents.</p>
                                        <Button className="btn btn-danger">
                                            Leave Team
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

export default TeamSettings;
