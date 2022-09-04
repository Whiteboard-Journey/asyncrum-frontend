import { Button } from 'react-bootstrap';
import { VerticalForm } from 'components';
import { CreateTeamImageFormProps } from './types';

const CreateTeamImageForm: React.FC<CreateTeamImageFormProps> = ({
  next,
  fileInput,
  previewImage,
  onChangeLogoImage,
  onSaveLogoImage,
  onCancelChangeLogoImage,
}: CreateTeamImageFormProps) => {
  return (
    <>
      <VerticalForm
        onSubmit={() => {
          if (next) {
            next();
          }
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <div style={{ height: 190, position: 'relative' }}>
              <p className="mb-1" style={{ fontWeight: '600' }}>
                Upload your team logo (optional)
              </p>
              <div className="overlay-container mx-auto">
                <img
                  src={previewImage}
                  alt="logo preview"
                  className="rounded ratio ratio-1x1"
                  style={{ position: 'absolute', width: 150, height: 150, cursor: 'pointer' }}
                  referrerPolicy="no-referrer"
                />
                <input
                  type="file"
                  // accept='image/jpg, image/png, image/jpeg'
                  accept="image/png"
                  style={{ display: 'none' }}
                  name="logoImage"
                  onChange={onChangeLogoImage}
                  ref={fileInput}
                />
                <div
                  className="overlay rounded"
                  onClick={() => {
                    if (fileInput.current) {
                      fileInput.current.click();
                    }
                  }}
                >
                  <div className="overlay-text">click to upload</div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Button className="me-2" onClick={onSaveLogoImage}>
                Save
              </Button>
              <Button className="btn btn-secondary" onClick={onCancelChangeLogoImage}>
                Cancel
              </Button>
            </div>
          </div>
        </div>

        <ul className="list-inline wizard mb-0">
          <li className="next list-inline-item float-end">
            <Button variant="primary" type="submit">
              Next
            </Button>
          </li>
        </ul>
      </VerticalForm>
    </>
  );
};

export default CreateTeamImageForm;
