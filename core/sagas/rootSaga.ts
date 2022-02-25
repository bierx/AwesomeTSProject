import {all, fork} from 'redux-saga/effects';
import stepsSaga from './stepsSaga';
import weaterSaga from './weaterSaga';

export function* rootSaga() {
  yield all([fork(stepsSaga), fork(weaterSaga)]);
}
