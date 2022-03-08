import React from 'react';
import {Link} from 'react-router-native';

import Weather from './Weather';
import StepsIfo from './StepsInfo';
import {useDate} from '../hooks/useDate';

import * as S from '../styles/global';

const Welcome = () => {
  const {wish} = useDate();
  return (
    <>
      <S.Header>{wish}</S.Header>
      <Weather />
      <StepsIfo />
      <Link testID="rewardsLink" to="/rewards">
        <S.Button testID="rewardsLinkText">Rewards</S.Button>
      </Link>
    </>
  );
};

export default Welcome;
