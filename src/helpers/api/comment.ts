import { APICore } from './apiCore';

const api = new APICore();
const baseURL = '/api/v1/comments';

const createComment = (params: { bookmarkId: string; author: string; description: string }) => {
  return api.create(baseURL, params);
};

const readAllComments = (params: { bookmarkId: string }) => {
  return api.get(baseURL, params);
};

const updateComment = (
  CommentId: number,
  params: {
    description: string;
  }
) => {
  return api.updatePatch(baseURL + `/${CommentId}`, params);
};

const deleteComment = (CommentId: number) => {
  return api.delete(baseURL + `/${CommentId}`);
};

export { createComment, readAllComments, updateComment, deleteComment };
