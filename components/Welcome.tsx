import React from 'react';
import {Link} from 'react-router-native';
import {useSelector} from 'react-redux';

import {getUserName} from '../selectors/userSelectors';

import * as S from '../styles/global';

const Welcome = () => {
  const userName = useSelector(getUserName);

  return (
    <>
      <S.Header>Hi {userName} </S.Header>
      <Link to="/steps">
        <S.Link>See your steps</S.Link>
      </Link>
    </>
  );
};

export default Welcome;
