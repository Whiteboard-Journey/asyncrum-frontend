import { toast } from 'react-toastify';
import {
  updateProfileInfo as updateProfileInfoAPI,
  createProfileImage as createProfileImageAPI,
  uploadProfileImage as uploadProfileImageAPI,
} from 'helpers';
import { APICore } from 'helpers/api/apiCore';
import { useRef, useState } from 'react';

const api = new APICore();
const user = api.getLoggedInUser();

const usePersonalSettings = () => {
  const [userFullname, setUserFullname] = useState<string>(user.fullname);
  const [previewImage, setPreviewImage] = useState<string>(user.profileImageUrl);
  const [profileImageFile, setProfileImageFile] = useState<null | File>();

  const fileInput = useRef<HTMLInputElement>(null);

  const onSubmitProfileInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullname = ((e.target as HTMLFormElement).elements as { [key: string]: any })['fullname'].value;
    const nickname = '';
    await updateProfileInfoAPI({ fullname, nickname });
    setUserFullname(fullname);
    user.fullname = fullname;
    sessionStorage.setItem('asyncrum_user', JSON.stringify(user));
    (e.target as HTMLFormElement).reset();
    changeInfoNotify();
  };

  const onChangeProfileImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

  const onSaveProfileImage = async (e: React.MouseEvent<HTMLElement>) => {
    if (!profileImageFile) {
      return;
    } else {
      const createProfileImageAPIResponse = await createProfileImageAPI();
      const presignedURL = createProfileImageAPIResponse.data.preSignedURL;
      await uploadProfileImageAPI(presignedURL, profileImageFile);
      changeImageNotify();
    }
  };

  const onCancelChangeProfileImage = () => {
    setPreviewImage(user.profileImageUrl);
    setProfileImageFile(null);
  };

  const changeInfoNotify = () => toast(<div>Personal information changed successfully!</div>);

  const changeImageNotify = () =>
    toast(
      <div>
        Profile image saved successfully!
        <br />
        The change might take a few minutes to be applied.
      </div>
    );

  return {
    userFullname,
    previewImage,
    profileImageFile,
    fileInput,
    onSubmitProfileInfo,
    onChangeProfileImage,
    onSaveProfileImage,
    onCancelChangeProfileImage,
  };
};

export default usePersonalSettings;
