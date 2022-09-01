import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { Wizard, Steps, Step } from 'react-albus';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateTeamNameForm from './CreateTeamNameForm';
import CreateTeamImageForm from './CreateTeamImageForm';
import InviteMemberButton from './InviteMemberButton';

const CreateTeam = () => {
  const [teamId, setTeamId] = useState<number>();
  const [teamName, setTeamName] = useState<string>();

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
                          <CreateTeamNameForm next={next} setTeamId={setTeamId} setTeamName={setTeamName} />
                        )}
                      />
                      <Step id="logo" render={({ next }) => <CreateTeamImageForm next={next} teamId={teamId} />} />
                      <Step
                        id="dumbledore"
                        render={() => (
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
                              <InviteMemberButton teamId={teamId} />
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
