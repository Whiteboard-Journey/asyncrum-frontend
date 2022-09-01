import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { VerticalForm } from 'components';
import { toast } from 'react-toastify';
import { createLogoImage as createLogoImageAPI, uploadLogoImage as uploadLogoImageAPI } from 'helpers';
import { CreateTeamImageFormProps } from './types';
import defaultImage from 'assets/images/asyncrum-logo-small.png';

const CreateTeamImageForm: React.FC<CreateTeamImageFormProps> = ({ next, teamId }: CreateTeamImageFormProps) => {
  const [previewImage, setPreviewImage] = useState<string>(defaultImage);
  const [logoImageFile, setLogoImageFile] = useState<null | File>();
  const fileInput = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) {
      setPreviewImage(defaultImage);
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

  const onCancelLogoImageChange = () => {
    setPreviewImage(defaultImage);
    setLogoImageFile(null);
  };

  const onSaveLogoImage = async (e: React.MouseEvent<HTMLElement>) => {
    if (!teamId || !logoImageFile) {
      return;
    } else {
      const createLogoImageAPIResponse = await createLogoImageAPI(teamId);
      const presignedURL = createLogoImageAPIResponse.data.preSignedURL;
      await uploadLogoImageAPI(presignedURL, logoImageFile);
      notify();
    }
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
            <div className="d-flex align-items-center justify-content-center">
              <Button className="me-2" onClick={onSaveLogoImage}>
                Save
              </Button>
              <Button className="btn btn-secondary" onClick={onCancelLogoImageChange}>
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
