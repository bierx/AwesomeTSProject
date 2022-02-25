import {weaterActionsTypes} from '../actionTypes';
import {GeolocationData} from '../../hooks/useGeolocation';

export const getWeater = (position: GeolocationData) => ({
  type: weaterActionsTypes.GET_DATA,
  payload: position,
});

export const setWeater = (payload: any) => ({
  type: weaterActionsTypes.GET_DATA_SUCCESS,
  payload,
});

export const setWeaterError = (payload: any) => ({
  type: weaterActionsTypes.GET_DATA_ERROR,
  payload,
});
