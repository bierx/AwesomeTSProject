import {put, takeLatest, all} from 'redux-saga/effects';
import {getCurrentSteps} from '../selectors/stepsSelector';
import {stepsActionsTypes} from '../actionTypes';
import {changeCountSuccess} from '../actions/counts';
import {_select} from './helpers';

export function* count() {
  const steps = yield* _select(getCurrentSteps);
  console.log('get currenst steps in sagas', steps);
  const effect: object = yield put(changeCountSuccess(steps + 1));
  console.log('site effect from saga', effect);
}

function* stepsSaga() {
  yield all([takeLatest(stepsActionsTypes.COUNTER_CHANGE, count)]);
}

export default stepsSaga;
