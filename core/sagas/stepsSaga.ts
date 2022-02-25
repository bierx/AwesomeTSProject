import {put, takeEvery, all} from 'redux-saga/effects';
import {getCurrentSteps} from '../selectors/stepsSelector';
import {stepsActionsTypes} from '../actionTypes';
import {changeCountSuccess} from '../actions/counts';
import {_select} from './helpers';

export function* count() {
  const steps = yield* _select(getCurrentSteps);
  yield put(changeCountSuccess(steps + 1));
}

function* stepsSaga() {
  yield all([takeEvery(stepsActionsTypes.COUNTER_CHANGE, count)]);
}

export default stepsSaga;
