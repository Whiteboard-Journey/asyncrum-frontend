import { APICore } from './apiCore';
import axios from 'axios';

const api = new APICore();
const baseURL = '/api/v1/teams';

const createTeam = (params: { name: string; code: string }) => {
  return api.create(baseURL, params);
};

const createLogoImage = (teamId: number) => {
  return api.create(baseURL + `/${teamId}/image`, null);
};

const readAllTeam = () => {
  return api.get(baseURL, {pageIndex: 0, topId: 0});
};

const readTeam = (teamId: number) => {
  return api.get(baseURL + `/${teamId}`, null);
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

export { createTeam, createLogoImage, readAllTeam, readTeam, updateTeamInfo, inviteMember, uploadLogoImage };
