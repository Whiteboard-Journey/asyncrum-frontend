import { Row, Col, Card, Button } from 'react-bootstrap';
import LeftPanel from './LeftPanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Member } from './types';
import MemberCard from './MemberCard';
import TeamInfoForm from './TeamInfoForm';
import TeamImageForm from './TeamImageForm';
import InviteMemberButton from './InviteMemberButton';
import { useTeamSettings } from './hooks';
import { useRedux } from 'hooks';

const TeamSettings = () => {
  const { appSelector } = useRedux();
  const { currentTeam } = appSelector((state) => ({
    currentTeam: state.Team.currentTeam,
  }));

  const {
    loading,
    previewImage,
    fileInput,
    onSubmitTeamInfo,
    onChangeLogoImage,
    onSaveLogoImage,
    onCancelChangeLogoImage,
    onInvite,
  } = useTeamSettings();

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
                      <TeamInfoForm teamname={currentTeam.name} onSubmitTeamInfo={onSubmitTeamInfo} />
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>
                      <TeamImageForm
                        fileInput={fileInput}
                        previewImage={previewImage}
                        onChangeLogoImage={onChangeLogoImage}
                        onSaveLogoImage={onSaveLogoImage}
                        onCancelChangeLogoImage={onCancelChangeLogoImage}
                      />
                    </Col>
                  </Row>
                  <hr />
                  <Row className="mb-3">
                    <Col>
                      <span className="h4 mb-1 me-3">Members</span>
                      <InviteMemberButton onInvite={onInvite} />
                    </Col>
                  </Row>
                  <Row>
                    {currentTeam?.members?.map((member: Member, i: number) => {
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
                      <h4>Leave {currentTeam.name} team</h4>
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
