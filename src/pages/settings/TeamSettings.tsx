import { Row, Col, Card, Button } from 'react-bootstrap';
import LeftPanel from './LeftPanel';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { readTeam as readTeamAPI } from 'helpers';
import { Member, Team } from './types';
import MemberCard from './MemberCard';
import TeamInfoForm from './TeamInfoForm';
import TeamImageForm from './TeamImageForm';
import InviteMemberButton from './InviteMemberButton';

const TeamSettings = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [team, setTeam] = useState<Team>();
  const [teamname, setTeamname] = useState<string>();
  const [previewImage, setPreviewImage] = useState<string>();

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
                      <TeamInfoForm team={team} teamname={teamname} setTeamname={setTeamname} />
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>
                      <TeamImageForm team={team} previewImage={previewImage} setPreviewImage={setPreviewImage} />
                    </Col>
                  </Row>
                  <hr />
                  <Row className="mb-3">
                    <Col>
                      <span className="h4 mb-1 me-3">Members</span>
                      <InviteMemberButton teamId={team?.id} />
                    </Col>
                  </Row>
                  <Row>
                    {team?.members.map((member: Member, i: number) => {
                      return (
                        <Col key={i} sm={6} lg={4} xl={3} className="mb-4">
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
