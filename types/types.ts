import {
  stepsActionsTypes,
  userActionsTypes,
  weaterActionsTypes,
} from '../actionTypes';

export interface StepsStatePayload {
  count: number;
}

export interface UserStatePayload {
  name: string;
}

export interface WeaterStatePayload {
  data: any;
  error?: any;
  isLoading: boolean;
}

export interface GetWeterData {
  type: typeof weaterActionsTypes.GET_DATA;
}

export interface SetWeterData {
  type: typeof weaterActionsTypes.GET_DATA_SUCCESS;
  payload: WeaterStatePayload;
}

export interface GetWeterDataError {
  type: typeof weaterActionsTypes.GET_DATA_ERROR;
  payload: WeaterStatePayload;
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
export type WeaterActions = GetWeterData | SetWeterData | GetWeterDataError;

export interface Store {
  steps: StepsStatePayload;
  user: UserStatePayload;
  weater: WeaterStatePayload;
}
