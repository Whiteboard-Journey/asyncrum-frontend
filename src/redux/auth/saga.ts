import { all, fork, put, takeEvery, call, take } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from 'helpers/api/apiCore';
import {
  login as loginApi,
  logout as logoutApi,
  readMember as readMemberApi,
  signup as signupApi,
  forgotPassword as forgotPasswordApi,
} from 'helpers';
import { authApiResponseSuccess, authApiResponseError } from './actions';
import { AuthActionTypes } from './constants';

type UserData = {
  payload: {
    username: string;
    password: string;
    fullname: string;
    email: string;
  };
  type: string;
};

type TokenData = {
  payload: {
    token: string;
  };
  type: string;
};

const api = new APICore();

/**
 * Login the user
 * @param {*} payload - username and password
 */
function* login({ payload: { email, password }, type }: UserData): SagaIterator {
  try {
    const response = yield call(loginApi, { email, password });
    const user = response.data;
    // NOTE - You can change this according to response format from your api
    api.setLoggedInUser(user);
    setAuthorization(user['token']);
    yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, user));
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, error));
    api.setLoggedInUser(null);
    setAuthorization(null);
  }
}

function* oauthLogin({ payload: { token }, type }: TokenData): SagaIterator {
  try {
    yield take(AuthActionTypes.OAUTH_LOGIN_USER);
    const response = yield call(readMemberApi, { token });

    let user = response.data;
    user['token'] = token;
    // NOTE - You can change this according to response format from your api
    api.setLoggedInUser(user);
    setAuthorization(token);
    yield put(authApiResponseSuccess(AuthActionTypes.OAUTH_LOGIN_USER, user));
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.OAUTH_LOGIN_USER, error));
    api.setLoggedInUser(null);
    setAuthorization(null);
  }
}

/**
 * Logout the user
 */
function* logout(): SagaIterator {
  try {
    yield call(logoutApi);
    api.setLoggedInUser(null);
    setAuthorization(null);
    yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}));
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, error));
  }
}

function* signup({ payload: { fullname, email, password } }: UserData): SagaIterator {
  try {
    const response = yield call(signupApi, { fullname, email, password });
    const user = response.data;
    // api.setLoggedInUser(user);
    // setAuthorization(user['token']);
    yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, user));
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error));
    api.setLoggedInUser(null);
    setAuthorization(null);
  }
}

function* forgotPassword({ payload: { username } }: UserData): SagaIterator {
  try {
    const response = yield call(forgotPasswordApi, { username });
    yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD, response.data));
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD, error));
  }
}
export function* watchLoginUser() {
  yield takeEvery(AuthActionTypes.LOGIN_USER, login);
}

export function* watchOAuthLoginUser() {
  yield takeEvery(AuthActionTypes.OAUTH_LOGIN_USER, oauthLogin);
}

export function* watchLogout() {
  yield takeEvery(AuthActionTypes.LOGOUT_USER, logout);
}

export function* watchSignup() {
  yield takeEvery(AuthActionTypes.SIGNUP_USER, signup);
}

export function* watchForgotPassword() {
  yield takeEvery(AuthActionTypes.FORGOT_PASSWORD, forgotPassword);
}

function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchOAuthLoginUser),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchForgotPassword),
  ]);
}

export default authSaga;