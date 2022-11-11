import ScreenRecorder from 'components/ScreenRecorder';
import { Button, Modal } from 'react-bootstrap';
import { useMeeting } from './hooks';

const CreateMeetingButton = () => {
  const {
    isCreateMeetingOpen,
    toggleCreateMeeting,
    isRecordOpen,
    toggleRecord,
    currentMeetingId,
    currentMeetingName,
    onCreateMeeting,
  } = useMeeting();

  return (
    <>
      <Button onClick={toggleCreateMeeting}>
        <i className="mdi mdi-plus"></i> Start a new meeting
      </Button>
      <Modal show={isCreateMeetingOpen} onHide={toggleCreateMeeting}>
        <Modal.Body>
          <Modal.Header onHide={toggleCreateMeeting} closeButton>
            <h4 className="modal-title">Start a new meeting</h4>
          </Modal.Header>
          <form className="ps-3 pe-3" onSubmit={onCreateMeeting}>
            <div className="mt-3 mb-3">
              <label htmlFor="meetingName" className="form-label">
                Meeting Name
              </label>
              <input
                className="form-control"
                type="text"
                id="meetingName"
                maxLength={255}
                required
                placeholder="Meeting Name"
              />
            </div>

            <div className="mb-3 text-center">
              <button className="btn btn-primary" type="submit">
                Create
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={isRecordOpen} onHide={toggleRecord} size="xl">
        <Modal.Body>
          <Modal.Header onHide={toggleRecord} closeButton>
            <h4 className="modal-title">Record a meeting video</h4>
          </Modal.Header>
          <ScreenRecorder meetingId={currentMeetingId!} meetingName={currentMeetingName} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateMeetingButton;
