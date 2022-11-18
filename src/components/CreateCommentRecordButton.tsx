import { Button, Modal } from 'react-bootstrap';
import { useModal } from '../pages/docs/hooks';
import { CommentVideoRecorder } from './';

const CreateCommentRecordButton = () => {
  const { isOpen: isRecordOpen, size, className, scroll, toggleModal: toggleRecord, openModalWithSize } = useModal();

  return (
    <>
      <Button
        onClick={() => {
          openModalWithSize('lg');
        }}
      >
        <i className="mdi mdi-plus"></i> Record
      </Button>
      <Modal show={isRecordOpen} onHide={toggleRecord} dialogClassName={className} size={size} scrollable={scroll}>
        <Modal.Body>
          <Modal.Header onHide={toggleRecord} closeButton>
            <h4 className="modal-title">Record</h4>
          </Modal.Header>
          <CommentVideoRecorder />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateCommentRecordButton;
