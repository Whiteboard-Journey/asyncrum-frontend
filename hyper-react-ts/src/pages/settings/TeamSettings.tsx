import { Row, Col, Card, Button } from 'react-bootstrap';
import { FormInput } from 'components';
import LeftPanel from './LeftPanel';
import React, { useEffect, useRef, useState } from 'react';
import config from 'config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!)

const TeamSettings = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [team, setTeam] = useState<Team>();
    const [previewImage, setPreviewImage] = useState<string>();
    const [logoImageFile, setLogoImageFile] = useState<null | File>();
    const fileInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        getTeamData();
    }, []);

    useEffect(() => {
        setPreviewImage(team?.pictureUrl);
    }, [team]);

    const getTeamData = async () => {
        await axios.get(config.API_URL+"/api/v1/teams/"+user.id, { headers: { Authorization: 'Bearer ' + user.token }})
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
                return teaminfo;
            })
            .then((teaminfo: Team) => {
                setTeam(teaminfo);
                setPreviewImage(team?.pictureUrl);
                setLoading(false);
                return teaminfo;
            });
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files) {
            setPreviewImage(user.profileImageUrl);
            return;
        } else {
            setLogoImageFile(e.target.files[0]);
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
        setLogoImageFile(null);
    }

    const onSaveLogoImage = (e: React.MouseEvent<HTMLElement>) => {
        if (!logoImageFile) {
            return;
        }
        else {
            axios.post(config.API_URL+"/api/v1/team/images/"+team?.id, null, { headers: { Authorization: 'Bearer ' + user.token }})
                .then(res => {
                    const preSignedURL = res.data.preSignedURL;
                    const uploadAxios = axios.create({ transformRequest: [(data: any, headers: any) => {
                        delete headers.common.Authorization;
                        headers['Content-Type'] = 'image/png';
                        return logoImageFile;
                    }] });
                    uploadAxios.put(preSignedURL, logoImageFile).then(() => {
                        notify();
                    });
                })
        }
    }

    const onSubmitTeamInfo = (e: React.FormEvent<HTMLFormElement>) => {
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
            {!loading && <Row>
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
                                    <form onSubmit={onSubmitTeamInfo}>
                                        <FormInput
                                            label="Team Name"
                                            type="text"
                                            name="name"
                                            containerClass={'mb-3'}
                                            key="name"
                                            placeholder={user.fullname}
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
                                                name='logoImage'
                                                onChange={onChange}
                                                ref={fileInput}
                                            />
                                        </div>
                                        <Button className="me-2" onClick={onSaveLogoImage} >
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
                                        <h4>Leave {team?.name} team</h4>
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
            </Row>}
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
