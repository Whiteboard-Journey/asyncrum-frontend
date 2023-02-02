import { Card, Dropdown, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { WhiteboardCardProps } from './types';
import { useMoment, useWhiteboardCard } from './hooks';
import { useRedux } from 'hooks';
import { currentTeam } from 'mock-server/demoData';

const whiteboardPageURL = '/whiteboard?url=';

const WhiteboardCard = ({ whiteboard, onEditWhiteboard, onDeleteWhiteboard }: WhiteboardCardProps) => {
  const { getTimeFromNow } = useMoment();
  const { isEditOpen, isDeleteOpen, isReadMore, toggleEdit, toggleDelete, toggleReadMore, closeModalAfterFunction } =
    useWhiteboardCard();

  return (
    <Card className="d-block">
      <Card.Body>
        <Dropdown className="card-widgets" align="end">
          <Dropdown.Toggle variant="link" as="a" className="card-drop arrow-none cursor-pointer p-0 shadow-none">
            <i className="dripicons-dots-3"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Share</Dropdown.Item>
            <Dropdown.Item onClick={toggleEdit}>Edit</Dropdown.Item>
            <Modal show={isEditOpen} onHide={toggleEdit}>
              <Modal.Body>
                <Modal.Header onHide={toggleEdit} closeButton>
                  <h4 className="modal-title">Edit Whiteboard Information</h4>
                </Modal.Header>
                <form
                  className="ps-3 pe-3"
                  onSubmit={(event) => closeModalAfterFunction(onEditWhiteboard, event, toggleEdit)}>
                  <input type="hidden" id="id" value={whiteboard.id} />
                  <div className="mt-3 mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="title"
                      maxLength={255}
                      required
                      placeholder={whiteboard.title}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="description"
                      maxLength={255}
                      required
                      placeholder={whiteboard.description}
                    />
                  </div>

                  <div className="mb-3 text-center">
                    <button className="btn btn-primary" type="submit">
                      Edit
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
            <Dropdown.Item>Duplicate</Dropdown.Item>
            <Dropdown.Item className="text-danger" onClick={toggleDelete}>
              Delete
            </Dropdown.Item>
            <Modal show={isDeleteOpen} onHide={toggleDelete}>
              <Modal.Body>
                <Modal.Header onHide={toggleDelete} closeButton>
                  <h4 className="modal-title">Delete {whiteboard.title}</h4>
                </Modal.Header>
                <p className="mt-4 mb-4 text-center font-weight-bolds">
                  Are you sure you want to delete this whiteboard permanently?
                </p>
                <form
                  className="ps-3 pe-3"
                  onSubmit={(event) => closeModalAfterFunction(onDeleteWhiteboard, event, toggleDelete)}>
                  <input type="hidden" id="id" value={whiteboard.id} />
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
        <h4 className="mt-0">
          <Link
            to={whiteboardPageURL + whiteboard.whiteboardFileUrl + '&id=' + currentTeam.code + '-' + whiteboard.id}
            className="text-title">
            {whiteboard.title.length > 25 ? whiteboard.title.slice(0, 25) + ' ...' : whiteboard.title}
          </Link>
        </h4>
        {whiteboard.description && (
          <p className="font-13 my-3">
            {isReadMore ? whiteboard.description.slice(0, 40) : whiteboard.description}
            {whiteboard.description.length > 40 ? (
              <span onClick={toggleReadMore} className="fw-bold text-info" role="button">
                {isReadMore ? ' ...read more' : ' show less'}
              </span>
            ) : (
              ''
            )}
          </p>
        )}
        <div>
          <span className="font-13">Author: </span>
          <OverlayTrigger placement={'bottom'} overlay={<Tooltip>{whiteboard.author}</Tooltip>}>
            <img src={whiteboard.authorProfileImageUrl} className="rounded-circle avatar-xs" alt={whiteboard.author} />
          </OverlayTrigger>
        </div>
        <p className="text-muted text-end font-12 mt-3 mb-1">
          Last modified: {getTimeFromNow(whiteboard.lastModifiedDate)}
        </p>
      </Card.Body>
    </Card>
  );
};

export default WhiteboardCard;
