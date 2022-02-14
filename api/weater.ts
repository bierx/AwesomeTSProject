import axios from 'axios';
import {resolve} from './helpers';

export const getWeater = () => {
  return resolve(
    axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=London&&APPID=6bb37151a908a8727bf34fb0388fce61',
    ),
  );
};
