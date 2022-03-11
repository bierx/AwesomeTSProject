import {all, fork} from 'redux-saga/effects';
import stepsSaga from './stepsSaga';
import weatherSaga from './weatherSaga';

export function* rootSaga() {
  yield all([fork(stepsSaga), fork(weatherSaga)]);
}
