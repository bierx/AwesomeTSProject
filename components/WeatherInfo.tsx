import React from 'react';
import {Text, Image, View} from 'react-native';
import styled from 'styled-components';
import {getWeaterData} from '../selectors/weaterSelector';
import {useSelector} from 'react-redux';
import WeatherDescriptions from './WeatherDescription';

const WeatherInfo = styled(View)`
  align-items: center;
  color: #000;
`;

const WeatherIcon = styled(Image)`
  width: 100px;
  height: 100px;
`;

const TextPrimary = styled(Text)`
  font-size: 40px;
  color: red;
`;

const TextSecondary = styled(Text)`
  font-size: 20px;
  color: #000;
  font-weight: 500;
  margin-top: 10px;
`;

const WeatherDescription = styled(Text)`
  text-transform: capitalize;
`;

const CurrentWeather = () => {
  const currentWeatherDetails = useSelector(getWeaterData);

  if (!currentWeatherDetails) {
    return null;
  }

  const {
    main: {temp},
    weather: [details],
    name,
  } = currentWeatherDetails;

  const {icon, main, description} = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <>
      <WeatherInfo>
        <Text>{name}</Text>
        <WeatherIcon source={{uri: iconUrl}} />
        <TextPrimary>{temp}°</TextPrimary>
        <WeatherDescription>{description}</WeatherDescription>
        <TextSecondary>{main}</TextSecondary>
      </WeatherInfo>
      <WeatherDescriptions />
    </>
  );
};

export default CurrentWeather;
