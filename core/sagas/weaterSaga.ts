import {put, takeLatest, all, call} from 'typed-redux-saga';

import {weaterActionsTypes} from '../actionTypes';
import {setWeater, setWeaterError} from '../actions/weater';
import * as API from '../api/weater';
import {GeolocationData} from '../../hooks/useGeolocation';

interface GetWeaterProps {
  payload: GeolocationData;
}

export function* getWeater({payload}: GetWeaterProps) {
  try {
    const [result, error] = yield* call(API.getWeater, payload);

    if (result) {
      yield put(setWeater(result.data));
    } else {
      yield put(setWeaterError(error));
    }
  } catch (error) {
    yield put(setWeaterError(error));
  }
}

function* stepsSaga() {
  yield all([takeLatest(weaterActionsTypes.GET_DATA, getWeater)]);
}

export default stepsSaga;
