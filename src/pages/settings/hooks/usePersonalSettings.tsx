import { toast } from 'react-toastify';
import {
  updateProfileInfo as updateProfileInfoAPI,
  createProfileImage as createProfileImageAPI,
  uploadProfileImage as uploadProfileImageAPI,
} from 'helpers';
import { useRef, useState } from 'react';
import { useRedux } from 'hooks';

const usePersonalSettings = () => {
  const { appSelector } = useRedux();

  const { user } = appSelector((state) => ({
    user: state.Auth.user,
  }));

  const [userFullname, setUserFullname] = useState<string>(user.fullname);
  const [previewImage, setPreviewImage] = useState<string>(user.profileImageUrl);
  const [profileImageFile, setProfileImageFile] = useState<null | File>();

  const fileInput = useRef<HTMLInputElement>(null);

  const onSubmitProfileInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let fullname = ((e.target as HTMLFormElement).elements.namedItem('fullname') as HTMLInputElement).value;
    fullname = fullname === '' ? user.fullname : fullname;
    let timezone = ((e.target as HTMLFormElement).elements.namedItem('timezone') as HTMLInputElement).value;
    timezone = timezone === '' ? user.timeZone : timezone;
    const fcmRegistrationToken = sessionStorage.getItem('fcmRegistrationToken');
    await updateProfileInfoAPI({ fullname, timezone, fcmRegistrationToken });
    setUserFullname(fullname);
    user.fullname = fullname;
    user.timeZone = timezone;
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
    e.preventDefault();
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
