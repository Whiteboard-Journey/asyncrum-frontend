import { Row, Col } from 'react-bootstrap';
import MeetingCard from './MeetingCard';
import CreateMeetingButton from './CreateMeetingButton';
import { useMeeting } from './hooks';
import { Meeting } from './types';

const MeetingContainer = () => {
  const { meetings, meetingLoading, onDeleteMeeting, onEnterMeeting, onEndMeeting } = useMeeting();

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
      {!meetingLoading && meetings.length > 0 && (
        <Row>
          {meetings.map((meeting: Meeting) => {
            return (
              <Col md={6} xxl={3} key={'mt-' + meeting.id}>
                <MeetingCard
                  meeting={meeting}
                  onDeleteMeeting={onDeleteMeeting}
                  onEnterMeeting={onEnterMeeting}
                  onEndMeeting={onEndMeeting}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};
export default MeetingContainer;
