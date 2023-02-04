import { APICore } from './apiCore';
import axios from 'axios';

const api = new APICore();
const baseURL = '/records';

const createRecord = (params: { title: string; description: string; scope: string; teamId: number | string }) => {
  return api.create(baseURL, params);
};

const readAllDailyStandups = (params: { teamId: string | number; scope: string; pageIndex: number }) => {
  return api.get(baseURL, params);
};

const readRecord = (id: number) => {
  return api.get(baseURL + `/${id}`, {});
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
  api.updatePatch(baseURL + '/' + id, { scope: 'team' });
};

export { createRecord, readAllDailyStandups, readRecord, uploadRecord, viewDailyStandup };
