import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProfileImage as createProfileImageAPI, uploadProfileImage as uploadProfileImageAPI } from 'helpers';
import { APICore } from 'helpers/api/apiCore';

const PersonalImageForm: React.FC = () => {
  const api = new APICore();
  const user = api.getLoggedInUser();
  const [previewImage, setPreviewImage] = useState<string>(user.profileImageUrl);
  const [profileImageFile, setProfileImageFile] = useState<null | File>();

  const fileInput = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) {
      setPreviewImage(user.profileImageUrl);
      return;
    } else {
      setProfileImageFile(e.target.files[0]);
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImage(reader.result as string);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const onCancelProfileImageChange = () => {
    setPreviewImage(user.profileImageUrl);
    setProfileImageFile(null);
  };

  const onSaveProfileImage = async (e: React.MouseEvent<HTMLElement>) => {
    if (!profileImageFile) {
      return;
    } else {
      const createProfileImageAPIResponse = await createProfileImageAPI();
      const presignedURL = createProfileImageAPIResponse.data.preSignedURL;
      await uploadProfileImageAPI(presignedURL, profileImageFile);
      notify();
    }
  };

  const notify = () =>
    toast(
      <div>
        Profile image saved successfully!
        <br />
        The change might take a few minutes to be applied.
      </div>
    );

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
            // accept='image/jpg, image/png, image/jpeg'
            accept="image/png"
            style={{ display: 'none' }}
            name="profileImage"
            onChange={onChange}
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
      <Button className="me-2" onClick={onSaveProfileImage}>
        Save
      </Button>
      <Button className="btn btn-secondary" onClick={onCancelProfileImageChange}>
        Cancel
      </Button>
    </>
  );
};

export default PersonalImageForm;
