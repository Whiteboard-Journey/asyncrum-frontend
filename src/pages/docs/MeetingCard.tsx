import { Card, Dropdown, Modal } from 'react-bootstrap';
import { useMeetingCard } from './hooks';

type Props = {
  meeting: string;
  onDeleteMeeting: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const MeetingCard = ({ meeting, onDeleteMeeting }: Props) => {
  const { isDeleteOpen, toggleDelete, closeModalAfterFunction } =
    useMeetingCard();
  return (
    <Card className="d-block">
      <Card.Body>

      <Dropdown className="card-widgets" align="end">
        <Dropdown.Toggle variant="link" as="a" className="card-drop arrow-none cursor-pointer p-0 shadow-none">
          <i className="dripicons-dots-3"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Share</Dropdown.Item>
          <Dropdown.Item className="text-danger" onClick={toggleDelete}>
            Delete
          </Dropdown.Item>
          
          <Modal show={isDeleteOpen} onHide={toggleDelete}>
            <Modal.Body>
              <Modal.Header onHide={toggleDelete} closeButton>
                <h4 className="modal-title">Delete {meeting}</h4>
              </Modal.Header>
              <p className="mt-4 mb-4 text-center font-weight-bolds">
                Are you sure you want to delete this meeting permanently?
              </p>
              <form
                className="ps-3 pe-3"
                onSubmit={(event) => closeModalAfterFunction(onDeleteMeeting, event, toggleDelete)}
              >
                <input type="hidden" id="id" value={meeting} />
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
      <a href={`https://${process.env.REACT_APP_JITSI_URL}/${meeting}`} className="text-title">
        <h4 className="mt-0">
            {meeting}
        </h4>
      </a>
      </Card.Body>
    </Card>
  );
};

export default MeetingCard;
