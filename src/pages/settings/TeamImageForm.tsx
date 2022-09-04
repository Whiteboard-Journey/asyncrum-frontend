import { Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { TeamImageFormProps } from './types';

const TeamImageForm: React.FC<TeamImageFormProps> = ({
  fileInput,
  previewImage,
  onChangeLogoImage,
  onSaveLogoImage,
  onCancelChangeLogoImage,
}: TeamImageFormProps) => {
  return (
    <>
      <div style={{ height: 190, position: 'relative' }}>
        <p className="mb-1" style={{ fontWeight: '600' }}>
          Team Logo
        </p>
        <div className="overlay-container">
          <img
            src={previewImage}
            alt="profile preview"
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
      <Button className="me-2" onClick={onSaveLogoImage}>
        Save
      </Button>
      <Button className="btn btn-secondary" onClick={onCancelChangeLogoImage}>
        Cancel
      </Button>
    </>
  );
};

export default TeamImageForm;
