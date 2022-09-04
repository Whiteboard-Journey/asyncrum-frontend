import { APICore } from './apiCore';
import axios from 'axios';

const api = new APICore();
const baseURL = '/api/v1/teams';
const user = api.getLoggedInUser();

const createTeam = (params: { name: string; code: string }) => {
  return api.create(baseURL, params);
};

const createLogoImage = (teamId: number) => {
  return api.create(baseURL + `/images/${teamId}`, null);
};

const readTeam = () => {
  return api.get(baseURL + `/${user.id}`, null);
};

const updateTeamInfo = (teamId: number, params: { name: string }) => {
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

export { createTeam, createLogoImage, readTeam, updateTeamInfo, inviteMember, uploadLogoImage };
