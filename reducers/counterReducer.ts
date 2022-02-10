import {stepsActionsTypes} from '../actionTypes';
import {CountActions, StepsStatePayload} from '../types/types';

const initialState: StepsStatePayload = {
  count: 0,
};

const countReducer = (state = initialState, action: CountActions) => {
  switch (action.type) {
    case stepsActionsTypes.COUNTER_CHANGE_SUCCESS:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
