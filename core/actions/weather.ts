import {weatherActionsTypes} from '../actionTypes';
import {GeolocationData} from '../../hooks/useGeolocation';

export const getWeather = (position: GeolocationData) => ({
  type: weatherActionsTypes.GET_DATA,
  payload: position,
});

export const setWeather = (payload: any) => ({
  type: weatherActionsTypes.GET_DATA_SUCCESS,
  payload,
});

export const setWeatherError = (payload: any) => ({
  type: weatherActionsTypes.GET_DATA_ERROR,
  payload,
});
