import { APICore } from './apiCore';
import axios from 'axios';

const api = new APICore();
const baseURL = '/api/v1/teams';

const changeTeam = async (teamId: number) => {
  const readTeamApiResponse = await readTeam(teamId);
  api.setCurrentTeam(readTeamApiResponse.data);
  window.location.reload();
};

const createTeam = (params: { name: string; code: string }) => {
  return api.create(baseURL, params);
};

const createLogoImage = (teamId: number) => {
  return api.create(baseURL + `/${teamId}/image`, null);
};

const readAllTeam = () => {
  return api.get(baseURL, { pageIndex: 0, topId: 0 });
};

const readTeam = (teamId: number) => {
  return api.get(baseURL + `/${teamId}`, null);
};

const updateTeam = (teamId: number, params: { name: string }) => {
  return api.updatePatch(baseURL + `/${teamId}`, params);
};

const inviteMember = (teamId: number, params: { memberId: null; memberEmail: string }) => {
  return api.create(baseURL + `/${teamId}/members/invitation`, params);
};

const uploadLogoImage = (presignedURL: string, logoImageFile: File) => {
  const uploadAxios = axios.create({
    transformRequest: [
      (_, headers: any) => {
        delete headers.common.Authorization;
        headers['Content-Type'] = 'image/png';
        return logoImageFile;
      },
    ],
  });
  return uploadAxios.put(presignedURL, logoImageFile);
};

const removeMember = (teamId: number, memberId: number) => {
  return api.delete(baseURL + '/' + teamId + '/members/' + memberId);
};

export {
  changeTeam,
  createTeam,
  createLogoImage,
  readAllTeam,
  readTeam,
  updateTeam,
  inviteMember,
  uploadLogoImage,
  removeMember,
};
