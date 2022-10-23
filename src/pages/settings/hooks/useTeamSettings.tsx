import React, { useEffect, useRef, useState } from 'react';
import { useRedux } from 'hooks';
import { toast } from 'react-toastify';
import {
  createTeam as createTeamAPI,
  readAllTeam as readAllTeamApi,
  createLogoImage as createLogoImageAPI,
  uploadLogoImage as uploadLogoImageAPI,
  inviteMember as inviteMemberAPI,
} from 'helpers';
import { readTeam, updateTeam } from 'redux/actions';
import { Member, Team, Invitation } from '../types';
import { APICore } from 'helpers/api/apiCore';
import defaultImage from 'assets/images/asyncrum-logo-small.png';

const useTeamSettings = () => {
  const { dispatch, appSelector } = useRedux();

  const { teamList, currentTeam } = appSelector((state) => ({
    teamList: state.Team.teamList,
    currentTeam: state.Team.currentTeam,
  }));

  const [loading, setLoading] = useState<boolean>(true);
  const [previewImage, setPreviewImage] = useState<string>(currentTeam?.pictureUrl);
  const [logoImageFile, setLogoImageFile] = useState<null | File>();

  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentTeam) {
      getTeamData();
    }
  }, []);

  // useEffect(() => {
  //   setTeam(currentTeam);
  //   setPreviewImage(currentTeam?.pictureUrl);
  //   console.log(currentTeam);
  // }, [currentTeam]);

  const onCreateTeam = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = ((e.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement).value;
    const code = name.slice(0, 3) + Date.now();
    const createTeamAPIResponse = await createTeamAPI({ name, code });
    const newTeam = createTeamAPIResponse.data;
    // if (user['teams']) {
    //   user['teams'].push(newTeam);
    // } else {
    //   user['teams'] = [newTeam];
    // }
    // user['currentTeam'] = newTeam;
    // const readTeamAPIResponse = await readTeamAPI(newTeam.id);
    // const teaminfo: Team = {
    //   id: readTeamAPIResponse.data.id,
    //   name: readTeamAPIResponse.data.name,
    //   code: readTeamAPIResponse.data.code,
    //   pictureUrl: readTeamAPIResponse.data.pictureUrl,
    //   members: readTeamAPIResponse.data.members.map((member: Member) => ({
    //     fullname: member.fullname,
    //     profileImageUrl: member.profileImageUrl,
    //   })),
    // };
    // setTeam(teaminfo);
    // setTeamname(teaminfo.name);
    setPreviewImage(defaultImage);
  };

  const getTeamData = async () => {
    // const readTeamAPIResponse = await readTeamAPI(currentTeam.id);
    // const teaminfo: Team = {
    //   id: readTeamAPIResponse.data.id,
    //   name: readTeamAPIResponse.data.name,
    //   code: readTeamAPIResponse.data.code,
    //   pictureUrl: readTeamAPIResponse.data.pictureUrl,
    //   members: readTeamAPIResponse.data.members.map((member: Member) => ({
    //     fullname: member.fullname,
    //     profileImageUrl: member.profileImageUrl,
    //   })),
    // };
    // // setTeam(teaminfo);
    // setTeamname(teaminfo.name);
    // setPreviewImage(teaminfo.pictureUrl);
    setLoading(false);
    // return teaminfo;
  };

  const onSubmitTeamInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentTeam) {
      return;
    }
    const name = ((e.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement).value;
    dispatch(updateTeam(currentTeam.id, name));
    // dispatch(readTeam(currentTeam.id));
    // await updateTeamInfoAPI(currentTeam.id, { name });
    // setTeamname(name);
    (e.target as HTMLFormElement).reset();
    changeInfoNotify();
  };

  const onChangeLogoImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) {
      setPreviewImage(currentTeam?.pictureUrl);
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

  const onSaveLogoImage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!logoImageFile || !currentTeam) {
      return;
    } else {
      const createLogoImageAPIResponse = await createLogoImageAPI(currentTeam.id);
      const presignedURL = createLogoImageAPIResponse.data.preSignedURL;
      await uploadLogoImageAPI(presignedURL, logoImageFile);
      changeImageNotify();
    }
  };

  const onCancelChangeLogoImage = () => {
    setPreviewImage(currentTeam?.pictureUrl ? currentTeam?.pictureUrl : defaultImage);
    setLogoImageFile(null);
  };

  const onInvite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentTeam) {
      return;
    }
    const email = ((e.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement).value;
    const invitationData: Invitation = {
      memberId: null,
      memberEmail: email,
    };
    await inviteMemberAPI(currentTeam.id, invitationData);
    (e.target as HTMLFormElement).reset();
    invitationNotify(email);
  };

  const changeInfoNotify = () => {
    toast(<div>Team Information changed successfully!</div>);
  };

  const changeImageNotify = () =>
    toast(
      <div>
        Team logo saved successfully!
        <br />
        The change might take a few minutes to be applied.
      </div>
    );

  const invitationNotify = (email: string) =>
    toast(
      <div>
        Invitation sent to <b>{email}</b>!
      </div>
    );

  return {
    loading,
    previewImage,
    defaultImage,
    logoImageFile,
    fileInput,
    setPreviewImage,
    onCreateTeam,
    onSubmitTeamInfo,
    onChangeLogoImage,
    onSaveLogoImage,
    onCancelChangeLogoImage,
    onInvite,
  };
};

export default useTeamSettings;
