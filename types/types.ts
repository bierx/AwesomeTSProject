import {stepsActionsTypes, userActionsTypes} from '../actionTypes';

export interface StepsStatePayload {
  count: number;
}

export interface UserStatePayload {
  name: string;
}

export interface ChangeCount {
  type: typeof stepsActionsTypes.COUNTER_CHANGE_SUCCESS;
  payload: StepsStatePayload;
}

export interface ChangeName {
  type: typeof userActionsTypes.CHANGE_CHANGE;
  payload: UserStatePayload;
}

export type CountActions = ChangeCount;
export type UserActions = ChangeName;

export interface Store {
  steps: StepsStatePayload;
  user: UserStatePayload;
}
