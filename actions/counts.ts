import {stepsActionsTypes} from '../actionTypes';

export const changeCountInit = () => ({
  type: stepsActionsTypes.COUNTER_CHANGE,
});

export const changeCountSuccess = (payload: number) => ({
  type: stepsActionsTypes.COUNTER_CHANGE_SUCCESS,
  payload,
});
