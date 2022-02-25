import React from 'react';
import {Link} from 'react-router-native';
import {useSelector} from 'react-redux';

import {getUserName} from '../core/selectors/userSelectors';

import * as S from '../styles/global';

const Welcome = () => {
  const userName = useSelector(getUserName);

  return (
    <>
      <S.Header>Hi {userName} </S.Header>
      <Link testID="stepsLink" to="/steps">
        <S.Link testID="stepsLinkText">See your steps</S.Link>
      </Link>
      <Link testID="weaterLink" to="/weater">
        <S.Link testID="weaterLinkText">See weater</S.Link>
      </Link>
    </>
  );
};

export default Welcome;
