import {
  stepsActionsTypes,
  userActionsTypes,
  weatherActionsTypes,
} from '../core/actionTypes';

export interface StepsStatePayload {
  count: number;
}

export interface UserStatePayload {
  name: string;
}

export interface WeatherStatePayload {
  data: any;
  error?: any;
  isLoading: boolean;
}

export interface GetWetherData {
  type: typeof weatherActionsTypes.GET_DATA;
}

export interface SetWetherData {
  type: typeof weatherActionsTypes.GET_DATA_SUCCESS;
  payload: WeatherStatePayload;
}

export interface GetWetherDataError {
  type: typeof weatherActionsTypes.GET_DATA_ERROR;
  payload: WeatherStatePayload;
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
export type WeatherActions = GetWetherData | SetWetherData | GetWetherDataError;

export interface Store {
  steps: StepsStatePayload;
  user: UserStatePayload;
  weather: WeatherStatePayload;
}
