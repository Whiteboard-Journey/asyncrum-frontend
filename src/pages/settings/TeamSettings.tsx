import { Row, Col, Card, Button, InputGroup, Form, Modal } from 'react-bootstrap';
import { FormInput } from 'components';
import LeftPanel from './LeftPanel';
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToggle } from 'hooks';
import {
  createLogoImage as createLogoImageAPI,
  readTeam as readTeamAPI,
  updateTeamInfo as updateTeamInfoAPI,
  inviteMember as inviteMemberAPI,
  uploadLogoImage as uploadLogoImageAPI,
} from 'helpers';

type Member = {
  fullname: string;
  profileImageUrl: string;
};

type Team = {
  id: number;
  name: string;
  pictureUrl: string;
  members: Member[];
};

type Invitation = {
  memberId: null;
  memberEmail: string;
};

const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <Card className="d-block mx-2 mb-2 h-100">
      <Card.Body>
        <div className="text-center mb-2">
          <img src={member.profileImageUrl} className="rounded avatar-lg" alt="member" referrerPolicy="no-referrer" />
        </div>
        <h4 className="text-center font-weight-bold mt-3 mb-0">{member.fullname}</h4>
      </Card.Body>
    </Card>
  );
};

const TeamSettings = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [team, setTeam] = useState<Team>();
  const [teamname, setTeamname] = useState<string>();
  const [previewImage, setPreviewImage] = useState<string>();
  const [logoImageFile, setLogoImageFile] = useState<null | File>();
  const [isInviteOpen, toggleInvite] = useToggle();

  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getTeamData();
  }, []);

  useEffect(() => {
    setPreviewImage(team?.pictureUrl);
  }, [team]);

  const getTeamData = async () => {
    const readTeamAPIResponse = await readTeamAPI();
    const teaminfo: Team = {
      id: readTeamAPIResponse.data.id,
      name: readTeamAPIResponse.data.name,
      pictureUrl: readTeamAPIResponse.data.pictureUrl,
      members: readTeamAPIResponse.data.members.map((member: Member) => ({
        fullname: member.fullname,
        profileImageUrl: member.profileImageUrl,
      })),
    };
    setTeam(teaminfo);
    setTeamname(teaminfo.name);
    setPreviewImage(teaminfo.pictureUrl);
    setLoading(false);
    return teaminfo;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) {
      setPreviewImage(team?.pictureUrl);
      return;
    } else {
      setLogoImageFile(e.target.files[0]);
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImage(reader.result as string);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const onCancelLogoImageChange = () => {
    setPreviewImage(team?.pictureUrl);
    setLogoImageFile(null);
  };

  const onSaveLogoImage = async (e: React.MouseEvent<HTMLElement>) => {
    if (!logoImageFile || !team) {
      return;
    } else {
      const createLogoImageAPIResponse = await createLogoImageAPI(team.id);
      const presignedURL = createLogoImageAPIResponse.data.preSignedURL;
      await uploadLogoImageAPI(presignedURL, logoImageFile);
      notify();
    }
  };

  const onSubmitTeamInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!team) {
      return;
    }
    const name = ((e.target as HTMLFormElement).elements as { [key: string]: any })['name'].value;
    await updateTeamInfoAPI(team.id, { name });
    setTeamname(name);
    (e.target as HTMLFormElement).reset();
    changeInfoNotify();
  };

  const onInvite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!team) {
      return;
    }
    const email = ((e.target as HTMLFormElement).elements as { [key: string]: any })['email'].value;
    const invitationData: Invitation = {
      memberId: null,
      memberEmail: email,
    };
    await inviteMemberAPI(team.id, invitationData);
    (e.target as HTMLFormElement).reset();
    invitationNotify(email);
  };

  const changeInfoNotify = () => toast(<div>Team Information changed successfully!</div>);

  const invitationNotify = (email: string) =>
    toast(
      <div>
        Invitation sent to <b>{email}</b>!
      </div>
    );

  const notify = () =>
    toast(
      <div>
        Team logo saved successfully!
        <br />
        The change might take a few minutes to be applied.
      </div>
    );

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">Settings</h4>
          </div>
        </Col>
      </Row>
      {!loading && (
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
                      <form onSubmit={onSubmitTeamInfo}>
                        <FormInput
                          label="Team Name"
                          type="text"
                          name="name"
                          containerClass={'mb-3'}
                          key="name"
                          placeholder={teamname}
                          required
                        />
                        <Button color="primary" type="submit">
                          Save Changes
                        </Button>
                      </form>
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>
                      <div style={{ height: 190, position: 'relative' }}>
                        <p className="mb-1" style={{ fontWeight: '600' }}>
                          Team Logo
                        </p>
                        <div className="overlay-container">
                          <img
                            src={previewImage}
                            alt="profile preview"
                            className="rounded ratio ratio-1x1"
                            style={{ position: 'absolute', width: 150, height: 150, cursor: 'pointer' }}
                            referrerPolicy="no-referrer"
                          />
                          <input
                            type="file"
                            // accept='image/jpg, image/png, image/jpeg'
                            accept="image/png"
                            style={{ display: 'none' }}
                            name="logoImage"
                            onChange={onChange}
                            ref={fileInput}
                          />
                          <div
                            className="overlay rounded"
                            onClick={() => {
                              fileInput.current!.click();
                            }}
                          >
                            <div className="overlay-text">click to upload</div>
                          </div>
                        </div>
                      </div>
                      <Button className="me-2" onClick={onSaveLogoImage}>
                        Save
                      </Button>
                      <Button className="btn btn-secondary" onClick={onCancelLogoImageChange}>
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="mb-3">
                    <Col>
                      <span className="h4 mb-1 me-3">Members</span>
                      <Button className="btn btn-primary" onClick={toggleInvite}>
                        <i className="mdi mdi-plus"></i> Invite
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
                                <Form.Control id="email" type="email" placeholder="example@email.com" />
                                <Button type="submit">Send Invitation</Button>
                              </InputGroup>
                            </Form.Group>
                          </form>
                        </Modal.Body>
                      </Modal>
                    </Col>
                  </Row>
                  <Row>
                    {team?.members.map((member: Member, i: number) => {
                      return (
                        <Col sm={6} lg={4} xl={3} className="mb-4">
                          <MemberCard member={member} />
                        </Col>
                      );
                    })}
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <h4>Leave {teamname} team</h4>
                      <p>By leaving the team, you will lose access to all its contents.</p>
                      <Button className="btn btn-danger">Leave Team</Button>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
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
