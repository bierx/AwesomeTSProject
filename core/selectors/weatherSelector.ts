import {Store} from '../../types/types';

export const getWeatherData = (state: Store) => state?.weather.data;
export const getWeatherLoading = (state: Store) => state?.weather.isLoading;
