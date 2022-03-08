import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {getCurrentSteps} from '../core/selectors/stepsSelector';

import * as S from '../styles/global';

const Container = styled(View)`
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 20px;
  border: 1px solid #eee;
`;

const Steps = styled(Text)`
  border-radius: 50px;
  font-size: 40px;
  width: 100px;
  height: 100px;
  border: 5px solid red;
  text-align: center;
  line-height: 90px;
  font-weight: bold;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 1;
  margin-top: 20px;
`;

const StepsIfo = () => {
  const steps = useSelector(getCurrentSteps);
  return (
    <Container>
      <S.Header>Your steps</S.Header>
      <Steps testID="steps">{steps}</Steps>
    </Container>
  );
};

export default StepsIfo;
