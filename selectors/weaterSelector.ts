import {Store} from '../types/types';

export const getWeaterData = (state: Store) => state?.weater.data;
export const getWeaterLoading = (state: Store) => state?.weater.isLoading;
