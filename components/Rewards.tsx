import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {getCurrentSteps} from '../core/selectors/stepsSelector';

import * as S from '../styles/global';

const Container = styled(View)`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Rewards = () => {
  const steps = useSelector(getCurrentSteps);
  return (
    <Container>
      <Text>Steps: {steps}</Text>
      <Text>Prizes: {steps * 5}</Text>
      <Link to="/">
        <S.Link>Back</S.Link>
      </Link>
    </Container>
  );
};

export default Rewards;
