import { APICore } from './apiCore';

const api = new APICore();
const baseURL = '/api/v1/bookmarks';

const createBookmark = (params: { recordId: string; emoji: string; content: string; time: number; position: {x: number, y: number}; drawing: string; scale: number; author: string }) => {
  return api.create(baseURL, params);
};

const readAllBookmarks = (params: { recordId: string }) => {
  return api.get(baseURL, params);
};

const updateBookmark = (bookmarkId: number, params: { emoji: string; content: string; time: number; position: {x: number, y: number}; drawing: string; scale: number; author: string }) => {
  return api.updatePatch(baseURL + `/${bookmarkId}`, params);
};

const deleteBookmark = (bookmarkId: number) => {
  return api.delete(baseURL + `/${bookmarkId}`);
};

export { createBookmark, readAllBookmarks, updateBookmark, deleteBookmark };
