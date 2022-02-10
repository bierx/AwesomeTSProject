import {all, fork} from 'redux-saga/effects';
import stepsSaga from '../sagas/stepsSaga';

export function* rootSaga() {
  yield all([fork(stepsSaga)]);
}
