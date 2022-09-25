import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  createTeam as createTeamAPI,
  readTeam as readTeamAPI,
  updateTeamInfo as updateTeamInfoAPI,
  createLogoImage as createLogoImageAPI,
  uploadLogoImage as uploadLogoImageAPI,
  inviteMember as inviteMemberAPI,
} from 'helpers';
import { Member, Team, Invitation } from '../types';
import { APICore } from 'helpers/api/apiCore';
import defaultImage from 'assets/images/asyncrum-logo-small.png';

const useTeamSettings = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [team, setTeam] = useState<Team>();
  const [teamname, setTeamname] = useState<string>();
  const [previewImage, setPreviewImage] = useState<string>();
  const [logoImageFile, setLogoImageFile] = useState<null | File>();

  const fileInput = useRef<HTMLInputElement>(null);

  const api = new APICore();
  const user = api.getLoggedInUser();

  useEffect(() => {
    if (user.teams) {
      getTeamData();
    }
  }, []);

  useEffect(() => {
    setPreviewImage(team?.pictureUrl);
  }, [team]);

  const onCreateTeam = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = ((e.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement).value;
    const code = name.slice(0, 3) + Date.now();
    const createTeamAPIResponse = await createTeamAPI({ name, code });
    const newTeamId = createTeamAPIResponse.data.id;
    if (user['teams']) {
      user['teams'].push(newTeamId);
    } else {
      user['teams'] = [newTeamId];
    }
    user['currentTeam'] = newTeamId;
    const readTeamAPIResponse = await readTeamAPI(newTeamId);
    const teaminfo: Team = {
      id: readTeamAPIResponse.data.id,
      name: readTeamAPIResponse.data.name,
      code: readTeamAPIResponse.data.code,
      pictureUrl: readTeamAPIResponse.data.pictureUrl,
      members: readTeamAPIResponse.data.members.map((member: Member) => ({
        fullname: member.fullname,
        profileImageUrl: member.profileImageUrl,
      })),
    };
    setTeam(teaminfo);
    setTeamname(teaminfo.name);
    setPreviewImage(defaultImage);
  };

  const getTeamData = async () => {
    const readTeamAPIResponse = await readTeamAPI(user.currentTeam);
    const teaminfo: Team = {
      id: readTeamAPIResponse.data.id,
      name: readTeamAPIResponse.data.name,
      code: readTeamAPIResponse.data.code,
      pictureUrl: readTeamAPIResponse.data.pictureUrl,
      members: readTeamAPIResponse.data.members.map((member: Member) => ({
        fullname: member.fullname,
        profileImageUrl: member.profileImageUrl,
      })),
    };
    setTeam(teaminfo);
    setTeamname(teaminfo.name);
    setPreviewImage(teaminfo.pictureUrl);
    setLoading(false);
    return teaminfo;
  };

  const onSubmitTeamInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!team) {
      return;
    }
    const name = ((e.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement).value;
    await updateTeamInfoAPI(user.currentTeam, { name });
    setTeamname(name);
    (e.target as HTMLFormElement).reset();
    changeInfoNotify();
  };

  const onChangeLogoImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

  const onSaveLogoImage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!logoImageFile || !team) {
      return;
    } else {
      const createLogoImageAPIResponse = await createLogoImageAPI(user.currentTeam);
      const presignedURL = createLogoImageAPIResponse.data.preSignedURL;
      await uploadLogoImageAPI(presignedURL, logoImageFile);
      changeImageNotify();
    }
  };

  const onCancelChangeLogoImage = () => {
    setPreviewImage(team?.pictureUrl ? team?.pictureUrl : defaultImage);
    setLogoImageFile(null);
  };

  const onInvite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.currentTeam) {
      return;
    }
    const email = ((e.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement).value;
    const invitationData: Invitation = {
      memberId: null,
      memberEmail: email,
    };
    await inviteMemberAPI(user.currentTeam, invitationData);
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
    team,
    teamname,
    previewImage,
    defaultImage,
    logoImageFile,
    fileInput,
    setTeamname,
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
