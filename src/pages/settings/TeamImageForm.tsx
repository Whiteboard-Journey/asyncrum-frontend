import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    createLogoImage as createLogoImageAPI,
    uploadLogoImage as uploadLogoImageAPI,
} from 'helpers';
import { TeamImageFormProps } from './types';

const TeamImageForm: React.FC<TeamImageFormProps> = ({team, previewImage, setPreviewImage}: TeamImageFormProps) => {
  const [logoImageFile, setLogoImageFile] = useState<null | File>();

  const fileInput = useRef<HTMLInputElement>(null);

  const onCancelLogoImageChange = () => {
    setPreviewImage(team?.pictureUrl);
    setLogoImageFile(null);
  };

  const onSaveLogoImage = async (e: React.MouseEvent<HTMLElement>) => {
    if (!logoImageFile || !team) {
      return;
    } else {
      const createLogoImageAPIResponse = await createLogoImageAPI(team.id);
      const presignedURL = createLogoImageAPIResponse.data.preSignedURL;
      await uploadLogoImageAPI(presignedURL, logoImageFile);
      notify();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) {
      setPreviewImage(team?.pictureUrl);
      return;
    } else {
      setLogoImageFile(e.target.files[0]);
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImage(reader.result as string);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const notify = () =>
    toast(
      <div>
        Team logo saved successfully!
        <br />
        The change might take a few minutes to be applied.
      </div>
    );

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
                            onChange={onChange}
                            ref={fileInput}
                          />
                          <div
                            className="overlay rounded"
                            onClick={() => {
                                if(fileInput.current){
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
                      <Button className="btn btn-secondary" onClick={onCancelLogoImageChange}>
                        Cancel
                      </Button>
        </>
    );
}

export default TeamImageForm;