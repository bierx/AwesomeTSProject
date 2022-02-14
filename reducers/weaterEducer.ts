import {weaterActionsTypes} from '../actionTypes';
import {WeaterActions, WeaterStatePayload} from '../types/types';

const initialState: WeaterStatePayload = {
  data: null,
  isLoading: false,
};

const userReducer = (state = initialState, action: WeaterActions) => {
  switch (action.type) {
    case weaterActionsTypes.GET_DATA:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case weaterActionsTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload,
        isLoading: false,
      };
    case weaterActionsTypes.GET_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
