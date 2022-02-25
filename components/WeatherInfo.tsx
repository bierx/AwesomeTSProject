import React, {FC} from 'react';
import {Text, Image, View, ImageBackground} from 'react-native';
import styled from 'styled-components';
import {getWeaterData} from '../core/selectors/weaterSelector';
import {useSelector} from 'react-redux';
import WeatherDescriptions from './WeatherDescription';

interface CurrentWeatherProps {
  error?: string;
}

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

const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrLx0KdkVsDh0fZXikqarGr7lIRXI4ggxYZzg5wt4gW0xlIvt5g98o9GUBq-WvsP66LY&usqp=CAU',
};

const CurrentWeather: FC<CurrentWeatherProps> = ({error}) => {
  const currentWeatherDetails = useSelector(getWeaterData);

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

  const {icon, main, description} = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <ImageBackground source={image} resizeMode="cover">
      <WeatherInfo>
        <Text testID="location">{name}</Text>
        <WeatherIcon testID="weatherIcon" source={{uri: iconUrl}} />
        <TextPrimary testID="weatherTemp">{temp}°</TextPrimary>
        <WeatherDescription testID="weatherDesc">
          {description}
        </WeatherDescription>
        <TextSecondary testID="weatherMain">{main}</TextSecondary>
      </WeatherInfo>
      <WeatherDescriptions />
    </ImageBackground>
  );
};

export default CurrentWeather;
