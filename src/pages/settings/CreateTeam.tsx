import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateTeamNameForm from './CreateTeamNameForm';
import CreateTeamImageForm from './CreateTeamImageForm';
import InviteMemberButton from './InviteMemberButton';
import { useTeamSettings } from './hooks';

const CreateTeam = () => {
  const {
    team,
    fileInput,
    defaultImage,
    onCreateTeam,
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
                        render={({ next }) => <CreateTeamNameForm next={next} onCreateTeam={onCreateTeam} />}
                      />
                      <Step
                        id="logo"
                        render={({ next }) => (
                          <CreateTeamImageForm
                            next={next}
                            fileInput={fileInput}
                            previewImage={defaultImage}
                            onChangeLogoImage={onChangeLogoImage}
                            onSaveLogoImage={onSaveLogoImage}
                            onCancelChangeLogoImage={onCancelChangeLogoImage}
                          />
                        )}
                      />
                      <Step
                        id="finished"
                        render={() => (
                          <Row>
                            <Col sm={12}>
                              <div className="text-center">
                                <h2 className="mt-0">
                                  <i className="mdi mdi-check-all"></i>
                                </h2>
                                <h3 className="mt-0 mb-4">Team {team?.name} Created !</h3>
                              </div>
                            </Col>

                            <Col className="d-flex justify-content-between">
                              <InviteMemberButton onInvite={onInvite} />
                              <Link to="/settings/team">
                                <Button variant="primary">Done</Button>
                              </Link>
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
};

export default CreateTeam;
