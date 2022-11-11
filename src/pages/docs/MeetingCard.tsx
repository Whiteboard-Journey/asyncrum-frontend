import { useEffect } from 'react';
import { Card, Dropdown, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useMoment, useMeetingCard } from './hooks';
import { Meeting } from './types';

type Props = {
  meeting: Meeting;
  onDeleteMeeting: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onEnterMeeting: (meetingId: number, meetingName: string) => void;
  onEndMeeting: (meetingId: number) => void;
};

const MeetingCard = ({ meeting, onDeleteMeeting, onEnterMeeting, onEndMeeting }: Props) => {
  const { isDeleteOpen, toggleDelete, isViewOpen, toggleView, closeModalAfterFunction } = useMeetingCard();
  const { getTimeFromNow } = useMoment();
  useEffect(() => {
    console.log(meeting.participants);
  });
  return (
    <Card className="d-block">
      <Card.Body>
        <Dropdown className="card-widgets" align="end">
          <Dropdown.Toggle variant="link" as="a" className="card-drop arrow-none cursor-pointer p-0 shadow-none">
            <i className="dripicons-dots-3"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Share</Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                onEndMeeting(meeting.id);
              }}>
              End Meeting
            </Dropdown.Item>
            <Dropdown.Item className="text-danger" onClick={toggleDelete}>
              Delete
            </Dropdown.Item>

            <Modal show={isDeleteOpen} onHide={toggleDelete}>
              <Modal.Body>
                <Modal.Header onHide={toggleDelete} closeButton>
                  <h4 className="modal-title">Delete {meeting.meetingName}</h4>
                </Modal.Header>
                <p className="mt-4 mb-4 text-center font-weight-bolds">
                  Are you sure you want to delete this meeting permanently?
                </p>
                <form
                  className="ps-3 pe-3"
                  onSubmit={(event) => closeModalAfterFunction(onDeleteMeeting, event, toggleDelete)}>
                  <input type="hidden" id="id" value={meeting.id} />
                  <div className="mb-3 text-center">
                    <button className="btn btn-danger" type="submit">
                      Delete
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </Dropdown.Menu>
        </Dropdown>
        <h4
          className="mt-0"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            if (meeting.status) {
              onEnterMeeting(meeting.id, meeting.meetingName);
            } else if (meeting.meetingFileUrl) {
              toggleView();
            }
          }}>
          {meeting.meetingName}
          {meeting.status ? <span className="badge bg-danger float-end me-3">live</span> : ''}
        </h4>
        <div className="mt-3">
          <span className="font-13">Participants: </span>
          {meeting &&
            meeting.participants.map((participant) => {
              return (
                <OverlayTrigger key={participant[0]} placement={'bottom'} overlay={<Tooltip>{participant[0]}</Tooltip>}>
                  <img src={participant[1]} className="rounded-circle avatar-xs" alt={participant[0]} />
                </OverlayTrigger>
              );
            })}
        </div>
        <p className="text-muted text-end font-12 mt-3 mb-1">
          Last modified: {getTimeFromNow(meeting.lastModifiedDate)}
        </p>
        <Modal show={isViewOpen} onHide={toggleView} size="xl">
          <Modal.Body>
            <Modal.Header onHide={toggleView} closeButton>
              <h4 className="modal-title">{meeting.meetingName}</h4>
            </Modal.Header>
            <div>
              <video className="d-block mx-auto" src={meeting.meetingFileUrl} width="960" height="540" controls></video>
            </div>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default MeetingCard;
