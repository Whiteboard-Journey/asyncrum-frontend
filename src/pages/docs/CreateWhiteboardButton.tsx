import { Button, Modal } from 'react-bootstrap';
import { useWhiteboard } from './hooks';

const CreateWhiteboardButton = () => {
  const { isCreateWhiteboardOpen, toggleCreateWhiteboard, onCreateWhiteboard } = useWhiteboard();

  return (
    <>
      <Button onClick={toggleCreateWhiteboard}>
        <i className="mdi mdi-plus"></i> Create Whiteboard
      </Button>
      <Modal show={isCreateWhiteboardOpen} onHide={toggleCreateWhiteboard}>
        <Modal.Body>
          <Modal.Header onHide={toggleCreateWhiteboard} closeButton>
            <h4 className="modal-title">Create a new whiteboard</h4>
          </Modal.Header>
          <form className="ps-3 pe-3" onSubmit={onCreateWhiteboard}>
            <div className="mt-3 mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input className="form-control" type="text" id="title" maxLength={255} required placeholder="Untitled" />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                className="form-control"
                type="textarea"
                id="description"
                maxLength={255}
                required
                placeholder="Description"
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
    </>
  );
};

export default CreateWhiteboardButton;
