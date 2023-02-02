import { APICore } from './apiCore';

const api = new APICore();
const baseURL = '/meetings';

const createMeeting = (params: { teamId: number; meetingName: string }) => {
  return;
};

const updateMeeting = (id: number, params: { status: boolean }) => {
  return api.updatePatch(baseURL + `/${id}`, params);
};

const readMeeting = (id: number) => {
  return api.get(baseURL + `/${id}`, null);
};

const readAllMeeting = (teamId: number) => {
  return api.get(baseURL, { teamId });
};

const deleteMeeting = (id: number) => {
  return api.delete(baseURL + `/${id}`);
};

const createMeetingRecord = (meetingId: number) => {
  return api.create(baseURL + `/${meetingId}`, {});
};

const addMeetingMember = (meetingId: number, params: { memberId: number }) => {
  return api.create(baseURL + `/${meetingId}/members`, params);
};

const removeMeetingMember = (meetingId: number, memberId: number) => {
  return api.delete(baseURL + `/${meetingId}/members/${memberId}`);
};

export {
  createMeeting,
  updateMeeting,
  readMeeting,
  readAllMeeting,
  deleteMeeting,
  createMeetingRecord,
  addMeetingMember,
  removeMeetingMember,
};
