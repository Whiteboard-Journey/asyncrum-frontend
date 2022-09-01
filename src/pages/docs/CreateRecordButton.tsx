import { Button, Modal } from 'react-bootstrap';
import { useModal } from './hooks';
import { VideoRecorder } from 'components';

const CreateRecordButton = () => {
  const { isOpen: isRecordOpen, size, className, scroll, toggleModal: toggleRecord, openModalWithClass } = useModal();

  return (
    <>
      <Button
        onClick={() => {
          openModalWithClass('modal-full-width');
        }}
      >
        <i className="mdi mdi-plus"></i> Record
      </Button>
      <Modal show={isRecordOpen} onHide={toggleRecord} dialogClassName={className} size={size} scrollable={scroll}>
        <Modal.Body>
          <Modal.Header onHide={toggleRecord} closeButton>
            <h4 className="modal-title">Record</h4>
          </Modal.Header>
          <VideoRecorder />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateRecordButton;
