import { APICore } from './apiCore';
import axios from 'axios';

const api = new APICore();
const baseURL = '/api/v1/whiteboards';

const readAllWhiteboard = (params: { scope: string; pageIndex: number }) => {
  return api.get(baseURL, params);
};

const readWhiteboard = (id: string) => {
  return api.get(baseURL + '/' + id, null);
};

const createWhiteboard = (params: { title: string; description: string; scope: string }) => {
  return api.create(baseURL, params);
};

const uploadWhiteboard = (presignedURL: string, formData: FormData) => {
  const uploadAxios = axios.create({
    transformRequest: [
      (_, headers: any) => {
        delete headers.common.Authorization;
        headers['content-type'] = 'application/octet-stream';
        return formData;
      },
    ],
  });
  return uploadAxios.put(presignedURL, formData);
};

const updateWhiteboard = (id: string, params: { title: string; description: string; scope: string }) => {
  return api.updatePatch(baseURL + '/' + id, params);
};

const deleteWhiteboard = (id: string) => {
  return api.delete(baseURL + '/' + id);
};

export { readAllWhiteboard, readWhiteboard, createWhiteboard, uploadWhiteboard, updateWhiteboard, deleteWhiteboard };
