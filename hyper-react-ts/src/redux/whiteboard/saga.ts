import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
    readAllWhiteboard as readAllWhiteboardApi,
    // createWhiteboard as createWhiteboardApi
} from 'helpers';
import { whiteboardApiResponseSuccess, whiteboardApiResponseError } from './actions';
import { WhiteboardActionTypes } from './constants';

type TokenData = {
    payload: {
        token: string;
    };
    type: string;
};

type WhiteboardData = {
    payload: {
        title: string;
        description: string;
        scope: string;
    }
    type: string;
}

/**
 * Read all whiteboards
 */
function* readAllWhiteboard({ payload: { token }}: TokenData): SagaIterator {
    try {
        const response = yield call(readAllWhiteboardApi, { token });
        const whiteboards = response.data.whiteboards;
        yield put(whiteboardApiResponseSuccess(WhiteboardActionTypes.READ_ALL_WHITEBOARD, whiteboards));
    } catch (error: any) {
        yield put(whiteboardApiResponseError(WhiteboardActionTypes.READ_ALL_WHITEBOARD, error));
    }
}

// function* createWhiteboard({ payload: { title, description, scope }}: WhiteboardData): SagaIterator {
//     try {
//         const response = yield call(createWhiteboardApi, { title, description, scope });
//         yield put(whiteboardApiResponseSuccess(WhiteboardActionTypes.CREATE_WHITEBOARD, response));
//     } catch (error: any) {
//         yield put (whiteboardApiResponseError(WhiteboardActionTypes.CREATE_WHITEBOARD, error))
//     }
// }

export function* watchReadAllWhiteboard() {
    yield takeEvery(WhiteboardActionTypes.READ_ALL_WHITEBOARD, readAllWhiteboard);
}

// export function* watchCreateWhiteboard() {
//     yield takeEvery(WhiteboardActionTypes.CREATE_WHITEBOARD, createWhiteboard);
// }

function* whiteboardSaga() {
    // yield all([fork(watchReadAllWhiteboard), fork(watchCreateWhiteboard)]); 
    yield all([fork(watchReadAllWhiteboard)]);
}

export default whiteboardSaga;
