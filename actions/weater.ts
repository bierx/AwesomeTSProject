import {weaterActionsTypes} from '../actionTypes';

export const getWeater = () => ({
  type: weaterActionsTypes.GET_DATA,
});

export const setWeater = (payload: any) => ({
  type: weaterActionsTypes.GET_DATA_SUCCESS,
  payload,
});

export const setWeaterError = (payload: any) => ({
  type: weaterActionsTypes.GET_DATA_ERROR,
  payload,
});

