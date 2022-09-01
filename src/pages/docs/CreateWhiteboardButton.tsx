import { Button, Modal } from 'react-bootstrap';
import { TDDocument, TDFile, TldrawApp } from '@krapi0314/tldraw';
import { useToggle } from 'hooks';
import {
  createWhiteboard as createWhiteboardAPI,
  readWhiteboard as readWhiteboardAPI,
  uploadWhiteboard as uploadWhiteboardAPI,
} from 'helpers';

const CreateWhiteboardButton = () => {
  const [isCreateWhiteboardOpen, toggleCreateWhiteboard] = useToggle();

  const scope = 'team';
  const whiteboardPageURL = '/whiteboard?url=';

  const onCreateWhiteboard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = ((event.target as HTMLFormElement).elements as { [key: string]: any })['title'].value;
    const description = ((event.target as HTMLFormElement).elements as { [key: string]: any })['description'].value;

    const createWhiteboardAPIResponse = await createWhiteboardAPI({ title, description, scope });
    const { id, preSignedURL } = createWhiteboardAPIResponse.data;
    const formData = createWhiteboardFormData(id, title);
    await uploadWhiteboardAPI(preSignedURL, formData);
    const readWhiteboardAPIResponse = await readWhiteboardAPI(id);
    window.location.href = whiteboardPageURL + readWhiteboardAPIResponse.data.whiteboardUrl + '&id=' + id;
  };

  const createWhiteboardFormData = (whiteboardID: string, title: string) => {
    const document: TDDocument = {
      id: whiteboardID,
      name: title,
      version: TldrawApp.version,
      pages: {
        page: {
          id: 'page',
          name: 'Page 1',
          childIndex: 1,
          shapes: {},
          bindings: {},
        },
      },
      pageStates: {
        page: {
          id: 'page',
          selectedIds: [],
          camera: {
            point: [0, 0],
            zoom: 1,
          },
        },
      },
      assets: {},
    };

    const file: TDFile = {
      name: document.name || 'New Document',
      fileHandle: null,
      document,
      assets: {},
    };

    const json = JSON.stringify(file, null, 2);

    const blob = new Blob([json], {
      type: 'application/vnd.Tldraw+json',
    });

    const fileToUpload = new File([blob], title);

    const formData = new FormData();
    formData.append('data', fileToUpload);

    return formData;
  };

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
