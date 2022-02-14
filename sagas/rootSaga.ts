import {all, fork} from 'redux-saga/effects';
import stepsSaga from '../sagas/stepsSaga';
import weaterSaga from '../sagas/weaterSaga';

export function* rootSaga() {
  yield all([fork(stepsSaga), fork(weaterSaga)]);
}
