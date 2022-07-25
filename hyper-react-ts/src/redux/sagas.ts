import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import layoutSaga from './layout/saga';
import whiteboardSaga from './whiteboard/saga';

export default function* rootSaga() {
    yield all([authSaga(), layoutSaga(), whiteboardSaga()]);
}
