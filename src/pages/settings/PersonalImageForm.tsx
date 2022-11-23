import { Button } from 'react-bootstrap';
import { usePersonalSettings } from './hooks';

const PersonalImageForm: React.FC = () => {
  const { previewImage, fileInput, onChangeProfileImage, onSaveProfileImage, onCancelChangeProfileImage } =
    usePersonalSettings();

  return (
    <>
      <div style={{ height: 190, position: 'relative' }}>
        <p className="mb-1" style={{ fontWeight: '600' }}>
          Profile Image
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
            accept="image/png"
            style={{ display: 'none' }}
            name="profileImage"
            onChange={onChangeProfileImage}
            ref={fileInput}
          />
          <div
            className="overlay rounded"
            onClick={() => {
              if (fileInput.current) {
                fileInput.current.click();
              }
            }}>
            <div className="overlay-text">click to upload</div>
          </div>
        </div>
      </div>
      <Button className="me-2" onClick={onSaveProfileImage}>
        Save
      </Button>
      <Button className="btn btn-secondary" onClick={onCancelChangeProfileImage}>
        Cancel
      </Button>
    </>
  );
};

export default PersonalImageForm;
