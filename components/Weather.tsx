import React from 'react';
import {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import {getWeater} from '../core/actions/weater';
import {getWeaterLoading} from '../core/selectors/weaterSelector';
import WeatherInfo from './WeatherInfo';
import {useGeolocation} from '../hooks/useGeolocation';

import * as S from '../styles/global';

const Weather = () => {
  const isLoading = useSelector(getWeaterLoading);
  const dispatch = useDispatch();
  const [error, position] = useGeolocation();

  useEffect(() => {
    if (!error) {
      dispatch(getWeater(position));
    }
  }, [dispatch, position, error]);

  return (
    <S.Container>
      <S.Header>Today's weather</S.Header>
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} size={32} />
      ) : (
        <WeatherInfo error={error} />
      )}
    </S.Container>
  );
};

export default Weather;
