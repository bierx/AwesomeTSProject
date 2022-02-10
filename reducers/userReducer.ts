import {userActionsTypes} from '../actionTypes';
import {UserActions, UserStatePayload} from '../types/types';

const initialState: UserStatePayload = {
  name: 'Lukasz',
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userActionsTypes.CHANGE_CHANGE:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
