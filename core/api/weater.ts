import axios from 'axios';
import {resolve} from './helpers';
import {GeolocationData} from '../../hooks/useGeolocation';

export const getWeater = ({latitude, longitude}: GeolocationData) => {
  return resolve(
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=6bb37151a908a8727bf34fb0388fce61`,
    ),
  );
};
