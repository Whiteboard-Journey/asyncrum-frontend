import { Button, Modal } from 'react-bootstrap';
import { useMeeting } from './hooks';

const CreateMeetingButton = () => {
  const { isCreateMeetingOpen, toggleCreateMeeting, onCreateMeeting } = useMeeting();

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
              <label htmlFor="roomName" className="form-label">
                Meeting Room Name
              </label>
              <input className="form-control" type="text" id="roomName" maxLength={255} required placeholder="Meeting Room Name" />
            </div>

            <div className="mb-3 text-center">
              <button className="btn btn-primary" type="submit">
                Create
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateMeetingButton;
