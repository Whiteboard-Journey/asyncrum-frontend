import { Row, Col, Card, Form, Button, ProgressBar, Modal, InputGroup } from 'react-bootstrap';
import { Wizard, Steps, Step } from 'react-albus';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerticalForm, FormInput } from 'components';
import React, { useRef, useState } from 'react';
import defaultImage from 'assets/images/asyncrum-logo-small.png';
import config from 'config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useToggle } from 'hooks';

type Invitation = {
    memberId: null;
    memberEmail: string;
}

const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);

const CreateTeam = () => {
    const [teamId, setTeamId] = useState<number>();
    const [teamName, setTeamName] = useState<string>();
    const [previewImage, setPreviewImage] = useState<string>(defaultImage);
    const [logoImageFile, setLogoImageFile] = useState<null | File>();
    const fileInput = useRef<HTMLInputElement>(null);
    const [isInviteOpen, toggleInvite] = useToggle();

    const onCreateTeam = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = (((e.target as HTMLFormElement).elements as {[key: string]: any})['name'].value);
        const code = name.slice(0, 3) + Date.now();
        axios.post(config.API_URL+"/api/v1/teams", {name, code},  { headers: { Authorization: 'Bearer ' + user.token }})
            .then(res => {
                setTeamId(res.data.id);
                setTeamName(name);
            })
    };

    const onUploadTeamImage = () => {

    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files) {
            setPreviewImage(defaultImage);
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

    const onCancelLogoImageChange = () => {
        setPreviewImage(defaultImage);
        setLogoImageFile(null);
    }

    const onSaveLogoImage = (e: React.MouseEvent<HTMLElement>) => {
        if (!logoImageFile) {
            return;
        }
        else {
            axios.post(config.API_URL+"/api/v1/team/images/"+teamId, null, { headers: { Authorization: 'Bearer ' + user.token }})
                .then(res => {
                    const preSignedURL = res.data.preSignedURL;
                    const uploadAxios = axios.create({ transformRequest: [(data: any, headers: any) => {
                        delete headers.common.Authorization;
                        headers['Content-Type'] = 'image/png';
                        return logoImageFile;
                    }] });
                    uploadAxios.put(preSignedURL, logoImageFile);
                })
        }
    }

    const onInvite = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (((e.target as HTMLFormElement).elements as {[key: string]: any})['email'].value);
        const invitationData: Invitation = {
            memberId: null,
            memberEmail: email,
        }
        axios.post(config.API_URL + "/api/v1/teams/" + teamId + "/members/invitation", invitationData, { headers: { Authorization: 'Bearer ' + user.token }})
            .then(() => toast(<div>Invitation sent to {email}!</div>));
    }

    const createValidationSchema = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter a team name.'),
        })
    );

    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Create Team</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Create Team</h4>

                            <Wizard
                                render={({ step, steps }) => (
                                    <>
                                        <ProgressBar
                                            animated
                                            striped
                                            variant="success"
                                            now={((steps.indexOf(step) + 1) / steps.length) * 100}
                                            className="mb-3 progress-sm"
                                        />

                                        <Steps>
                                            <Step
                                                id="create"
                                                render={({ next }) => (
                                                    <VerticalForm 
                                                        onSubmit={(event, values) => {
                                                            onCreateTeam(values as React.FormEvent<HTMLFormElement>);
                                                            next();
                                                        }} 
                                                        resolver={createValidationSchema}>
                                                        <FormInput
                                                            label="Enter a team name"
                                                            type="text"
                                                            name="name"
                                                            containerClass={'mb-3'}
                                                        />

                                                        <ul className="list-inline wizard mb-0">
                                                            <li className="next list-inline-item float-end">
                                                                <Button variant="primary" type="submit">
                                                                    Next
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </VerticalForm>
                                                )}
                                            />
                                            <Step
                                                id="logo"
                                                render={({ next }) => (
                                                    <VerticalForm 
                                                    onSubmit={(event, values) => {
                                                        onUploadTeamImage();
                                                        next();
                                                    }}> 
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <div>
                                                            <div style={{ height: 190, position: "relative" }}>
                                                                <p className='mb-1' style={{ fontWeight: '600' }}>Upload your team logo (optional)</p>
                                                                <div className='overlay-container mx-auto'>
                                                                    <img src={previewImage} alt="logo preview" className="rounded ratio ratio-1x1" style={{ position: "absolute", width: 150, height: 150, cursor: "pointer" }} referrerPolicy="no-referrer" />
                                                                    <input 
                                                                        type='file' 
                                                                        // accept='image/jpg, image/png, image/jpeg' 
                                                                        accept='image/png'
                                                                        style={{display:'none'}}
                                                                        name='logoImage'
                                                                        onChange={onChange}
                                                                        ref={fileInput}
                                                                    />
                                                                    <div className='overlay rounded' onClick={()=>{fileInput.current!.click()}}>
                                                                        <div className='overlay-text'>click to upload</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex align-items-center justify-content-center'>
                                                                <Button className="me-2" onClick={onSaveLogoImage} >
                                                                    Save
                                                                </Button>
                                                                <Button className="btn btn-secondary" onClick={onCancelLogoImageChange} >
                                                                    Cancel
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                        <ul className="list-inline wizard mb-0">
                                                            <li className="next list-inline-item float-end">
                                                                <Button variant="primary" type="submit">
                                                                    Next
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </VerticalForm>
                                                )}
                                            />
                                            <Step
                                                id="dumbledore"
                                                render={({ previous }) => (
                                                    <Row>
                                                        <Col sm={12}>
                                                            <div className="text-center">
                                                                <h2 className="mt-0">
                                                                    <i className="mdi mdi-check-all"></i>
                                                                </h2>
                                                                <h3 className="mt-0 mb-4">Team {teamName} Created !</h3>
                                                            </div>
                                                        </Col>

                                                        <Col className="d-flex justify-content-between">
                                                            <Button className="btn btn-primary" onClick={toggleInvite}>
                                                                <i className="mdi mdi-plus"></i> Invite Members
                                                            </Button>
                                                            <Modal show={isInviteOpen} onHide={toggleInvite}>
                                                                <Modal.Body>
                                                                    <Modal.Header onHide={toggleInvite} closeButton>
                                                                        <h4 className="modal-title">Invite a new member</h4>
                                                                    </Modal.Header>
                                                                    <form className="ps-3 pe-3 mt-3" onSubmit={onInvite}>
                                                                        <Form.Group>
                                                                            <Form.Label htmlFor="email">Invite by Email</Form.Label>
                                                                            <InputGroup className="mb-3">
                                                                                <Form.Control
                                                                                    id="email"
                                                                                    type="email"
                                                                                    placeholder="example@email.com"
                                                                                />
                                                                                <Button type="submit">
                                                                                    Send Invitation
                                                                                </Button>
                                                                            </InputGroup>
                                                                        </Form.Group>
                                                                    </form>
                                                                </Modal.Body>
                                                            </Modal>
                                                            <Button variant="primary">Done</Button>
                                                        </Col>
                                                    </Row>
                                                )}
                                            />
                                        </Steps>
                                    </>
                                )}
                            />
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
}

export default CreateTeam;