import { Row, Col } from 'react-bootstrap';
import MeetingCard from './MeetingCard';
import CreateMeetingButton from './CreateMeetingButton';
import { useMeeting } from './hooks';
import { useRedux } from 'hooks';

const MeetingContainer = () => {
  const { appSelector } = useRedux();
  const { currentTeam } = appSelector((state) => ({
    currentTeam: state.Team.currentTeam,
  }));
  const { onDeleteMeeting } = useMeeting();

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">Meetings</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row className="mb-4">
        <Col sm={4}>
          <CreateMeetingButton />
        </Col>
      </Row>
      {currentTeam?.openMeetings && currentTeam.openMeetings.length > 0 && (
        <Row>
          {currentTeam.openMeetings.map((meeting: string) => {
            return (
              <Col md={4} xxl={2} key={'mt-' + meeting}>
                <MeetingCard meeting={meeting} onDeleteMeeting={onDeleteMeeting} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};
export default MeetingContainer;
