import { all, fork, put, takeEvery, call, take } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore } from 'helpers/api/apiCore';
import {
  createTeam as createTeamApi,
  readTeam as readTeamApi,
  readAllTeam as readAllTeamApi,
  updateTeam as updateTeamApi,
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

const api = new APICore();

function* create({ payload: { name, code }, type }: TeamData): SagaIterator {
  try {
    const response = yield call(createTeamApi, { name, code });
    const id = response.data;
    const allTeamResponse = yield call(readAllTeamApi);
    const allTeam = allTeamResponse.data.teams
    const currentTeamResponse = yield call(readTeamApi, id);
    const currentTeam = currentTeamResponse.data
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
    api.setTeamList(allTeam);
    api.setCurrentTeam(allTeam[0]);
    yield put(teamApiResponseSuccess(TeamActionTypes.READ_ALL_TEAM, allTeam, allTeam[0]));
  } catch (error: any) {
    yield put(teamApiResponseError(TeamActionTypes.READ_ALL_TEAM, error));
  }
}

function* read({ payload: { id }, type}: TeamData): SagaIterator {
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
    const allTeam = allTeamResponse.data.teams
    const response = yield call(readTeamApi, id);
    const currentTeam = response.data;
    api.setTeamList(allTeam);
    api.setCurrentTeam(currentTeam);
    yield put(teamApiResponseSuccess(TeamActionTypes.UPDATE_TEAM, allTeam, currentTeam));
  } catch (error: any) {
    yield put(teamApiResponseError(TeamActionTypes.UPDATE_TEAM, error));
  }
}

export function* watchCreateTeam() {
  yield takeEvery(TeamActionTypes.CREATE_TEAM, create);
}

export function* watchReadAllTeam() {
  yield takeEvery(TeamActionTypes.READ_ALL_TEAM, readAll);
}

export function* watchReadTeam() {
  yield takeEvery(TeamActionTypes.READ_TEAM, read);
}

export function* watchUpdateTeam() {
  yield takeEvery(TeamActionTypes.UPDATE_TEAM, update);
}

function* teamSaga() {
  yield all([
    fork(watchCreateTeam),
    fork(watchReadAllTeam),
    fork(watchReadTeam),
    fork(watchUpdateTeam),
  ]);
}

export default teamSaga;
