import {put, takeLatest, all, call} from 'typed-redux-saga';

import {weatherActionsTypes} from '../actionTypes';
import {setWeather, setWeatherError} from '../actions/weather';
import * as API from '../api/weather';
import {GeolocationData} from '../../hooks/useGeolocation';

interface GetWeatherProps {
  payload: GeolocationData;
}

export function* getWeather({payload}: GetWeatherProps) {
  try {
    const [result, error] = yield* call(API.getWeather, payload);

    if (result) {
      yield put(setWeather(result.data));
    } else {
      yield put(setWeatherError(error));
    }
  } catch (error) {
    yield put(setWeatherError(error));
  }
}

function* stepsSaga() {
  yield all([takeLatest(weatherActionsTypes.GET_DATA, getWeather)]);
}

export default stepsSaga;
