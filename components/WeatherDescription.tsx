import React from 'react';
import {View, Text} from 'react-native';
import {getWeatherData} from '../core/selectors/weatherSelector';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faTemperatureLow,
  faHandHoldingWater,
  faWind,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const WeatherDetails = styled(View)`
  margin-top: 30px;
  borde: 1px solid red;
  border-radius: 10px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const WeatherDetailsItems = styled(View)`
  align-items: flex-end;
  justif-content: flex-end;
`;

const WeatherDetailsRow = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 20px;
  border: 1px solid #eee;
`;

const TextSecondary = styled(Text)`
  font-size: 15px;
  color: red;
  font-weight: 700;
  margin: 7px;
`;

const WeatherDescription = () => {
  const currentWeatherDetails = useSelector(getWeatherData);
  const unitsSystem = 'metric';

  if (!currentWeatherDetails) {
    return null;
  }

  const {
    main: {feels_like, humidity, pressure},
    wind: {speed},
  } = currentWeatherDetails;

  const windSpeed =
    unitsSystem === 'metric'
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/h`;

  return (
    <WeatherDetails>
      <WeatherDetailsRow>
        <FontAwesomeIcon icon={faTemperatureLow} size={24} />
        <WeatherDetailsItems>
          <Text>Feels like:</Text>
          <TextSecondary testID="feelsLike">{feels_like} °</TextSecondary>
        </WeatherDetailsItems>
      </WeatherDetailsRow>
      <WeatherDetailsRow>
        <FontAwesomeIcon icon={faHandHoldingWater} size={24} />
        <WeatherDetailsItems>
          <Text>Humidity:</Text>
          <TextSecondary testID="humidity">{humidity} %</TextSecondary>
        </WeatherDetailsItems>
      </WeatherDetailsRow>
      <WeatherDetailsRow>
        <FontAwesomeIcon icon={faTachometerAlt} size={24} />
        <WeatherDetailsItems>
          <Text>Pressure:</Text>
          <TextSecondary testID="pressure">{pressure} hPa</TextSecondary>
        </WeatherDetailsItems>
      </WeatherDetailsRow>
      <WeatherDetailsRow>
        <FontAwesomeIcon icon={faWind} size={24} />
        <WeatherDetailsItems>
          <Text>Wind Speed:</Text>
          <TextSecondary testID="windSpeed">{windSpeed}</TextSecondary>
        </WeatherDetailsItems>
      </WeatherDetailsRow>
    </WeatherDetails>
  );
};

export default WeatherDescription;
