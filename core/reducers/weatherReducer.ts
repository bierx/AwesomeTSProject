import {weatherActionsTypes} from '../actionTypes';
import {WeatherActions, WeatherStatePayload} from '../../types/types';

const initialState: WeatherStatePayload = {
  data: null,
  isLoading: false,
};

const userReducer = (state = initialState, action: WeatherActions) => {
  switch (action.type) {
    case weatherActionsTypes.GET_DATA:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case weatherActionsTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload,
        isLoading: false,
      };
    case weatherActionsTypes.GET_DATA_ERROR:
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
