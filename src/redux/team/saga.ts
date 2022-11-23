import { all, fork, put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore } from 'helpers/api/apiCore';
import {
  createTeam as createTeamApi,
  readTeam as readTeamApi,
  readAllTeam as readAllTeamApi,
  updateTeam as updateTeamApi,
  removeMember as removeMemberApi,
} from 'helpers';
import { teamApiResponseSuccess, teamApiResponseError } from './actions';
import { TeamActionTypes } from './constants';

type TeamData = {
  payload: {
    id: number;
    name: string;
    code: string;
    pictureUrl: string;
  };
  type: string;
};

type LeaveData = {
  payload: {
    teamId: number;
    memberId: number;
  };
  type: string;
};

const api = new APICore();

function* create({ payload: { name, code }, type }: TeamData): SagaIterator {
  try {
    const response = yield call(createTeamApi, { name, code });
    const id = response.data.id;
    const allTeamResponse = yield call(readAllTeamApi);
    const allTeam = allTeamResponse.data.teams;
    const currentTeamResponse = yield call(readTeamApi, id);
    const currentTeam = currentTeamResponse.data;
    api.setTeamList(allTeam);
    api.setCurrentTeam(currentTeam);
    yield put(teamApiResponseSuccess(TeamActionTypes.CREATE_TEAM, allTeam, currentTeam));
  } catch (error: any) {
    yield put(teamApiResponseError(TeamActionTypes.CREATE_TEAM, error));
  }
}

function* readAll(): SagaIterator {
  try {
    const response = yield call(readAllTeamApi);
    const allTeam = response.data.teams;
    const currentTeamResponse = yield call(readTeamApi, allTeam[0].id);
    const currentTeam = currentTeamResponse.data;
    api.setTeamList(allTeam);
    api.setCurrentTeam(currentTeam);
    yield put(teamApiResponseSuccess(TeamActionTypes.READ_ALL_TEAM, allTeam, currentTeam));
  } catch (error: any) {
    yield put(teamApiResponseError(TeamActionTypes.READ_ALL_TEAM, error));
  }
}

function* read({ payload: { id }, type }: TeamData): SagaIterator {
  try {
    const response = yield call(readTeamApi, id);
    const currentTeam = response.data;
    api.setCurrentTeam(currentTeam);
    yield put(teamApiResponseSuccess(TeamActionTypes.READ_TEAM, null, currentTeam));
  } catch (error: any) {
    yield put(teamApiResponseError(TeamActionTypes.READ_TEAM, error));
  }
}

function* update({ payload: { id, name }, type }: TeamData): SagaIterator {
  try {
    yield call(updateTeamApi, id, { name });
    const allTeamResponse = yield call(readAllTeamApi);
    const allTeam = allTeamResponse.data.teams;
    const response = yield call(readTeamApi, id);
    const currentTeam = response.data;
    api.setTeamList(allTeam);
    api.setCurrentTeam(currentTeam);
    yield put(teamApiResponseSuccess(TeamActionTypes.UPDATE_TEAM, allTeam, currentTeam));
  } catch (error: any) {
    yield put(teamApiResponseError(TeamActionTypes.UPDATE_TEAM, error));
  }
}

function* leave({ payload: { teamId, memberId }, type }: LeaveData): SagaIterator {
  try {
    yield call(removeMemberApi, teamId, memberId);
    const response = yield call(readAllTeamApi);
    const allTeam = response.data.teams;
    const currentTeamResponse = yield call(readTeamApi, allTeam[0].id);
    const currentTeam = currentTeamResponse.data;
    api.setTeamList(allTeam);
    api.setCurrentTeam(currentTeam);
    yield put(teamApiResponseSuccess(TeamActionTypes.LEAVE_TEAM, allTeam, currentTeam));
  } catch (error: any) {
    yield put(teamApiResponseError(TeamActionTypes.LEAVE_TEAM, error));
  }
}

export function* watchCreateTeam() {
  yield takeEvery(TeamActionTypes.CREATE_TEAM, create);
}

export function* watchReadAllTeam() {
  yield takeLatest(TeamActionTypes.READ_ALL_TEAM, readAll);
}

export function* watchReadTeam() {
  yield takeLatest(TeamActionTypes.READ_TEAM, read);
}

export function* watchUpdateTeam() {
  yield takeEvery(TeamActionTypes.UPDATE_TEAM, update);
}

export function* watchLeaveTeam() {
  yield takeEvery(TeamActionTypes.LEAVE_TEAM, leave);
}

function* teamSaga() {
  yield all([
    fork(watchCreateTeam),
    fork(watchReadAllTeam),
    fork(watchReadTeam),
    fork(watchUpdateTeam),
    fork(watchLeaveTeam),
  ]);
}

export default teamSaga;
