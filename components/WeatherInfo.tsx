import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import {getWeaterData} from '../core/selectors/weaterSelector';
import {useSelector} from 'react-redux';
import {useDate} from '../hooks/useDate';
interface CurrentWeatherProps {
  error?: string;
}

const WeatherInfo = styled(View)`
  align-items: center;
  color: #000;
`;

const TextPrimary = styled(Text)`
  font-size: 40px;
  color: red;
`;

const WeatherDescription = styled(Text)`
  text-transform: capitalize;
`;

const Time = styled(Text)`
  font-size: 11px;
`;

const CurrentWeather: FC<CurrentWeatherProps> = ({error}) => {
  const currentWeatherDetails = useSelector(getWeaterData);
  const {fullTime} = useDate();

  if (error) {
    return <Text>Please Allow Geolocalization</Text>;
  }

  if (!currentWeatherDetails) {
    return null;
  }

  const {
    main: {temp},
    weather: [details],
    name,
  } = currentWeatherDetails;

  const {description} = details;

  return (
    <>
      <WeatherInfo>
        <Text testID="location">{name}</Text>
        <Time>{fullTime}</Time>
        <TextPrimary testID="weatherTemp">{temp}°</TextPrimary>
        <WeatherDescription testID="weatherDesc">
          {description}
        </WeatherDescription>
      </WeatherInfo>
    </>
  );
};

export default CurrentWeather;
