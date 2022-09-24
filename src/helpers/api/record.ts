import { APICore } from './apiCore';
import axios from 'axios';

const api = new APICore();
const baseURL = '/api/v1/records';

const createRecord = (params: { title: string; description: string; scope: string; teamId: string; }) => {
  return api.create(baseURL, params);
};

const readAllDailyStandups = (params: { teamId: string; scope: string; pageIndex: number }) => {
  return api.get(baseURL, params);
};

const uploadRecord = (presignedURL: string, fileToUpload: File) => {
  const uploadAxios = axios.create({
    transformRequest: [
      (data: any, headers: any) => {
        delete headers.common.Authorization;
        headers['Content-Type'] = 'video/mp4';
        return data;
      },
    ],
  });
  return uploadAxios.put(presignedURL, fileToUpload);
};

const viewDailyStandup = (id: number) => {
  const params = {
    title: null,
    description: null,
    scope: 'team',
  };

  api.updatePatch(baseURL + '/' + id, params);
};

export { createRecord, readAllDailyStandups, uploadRecord, viewDailyStandup };
