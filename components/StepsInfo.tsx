import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoePrints} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-native';
import {useSelector} from 'react-redux';
import {getCurrentSteps} from '../core/selectors/stepsSelector';

import * as S from '../styles/global';

const Steps = styled(Text)`
  border-radius: 100px;
  font-size: 80px;
  width: 200px;
  height: 200px;
  border: 5px solid red;
  text-align: center;
  line-height: 190px;
  font-weight: bold;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 1;
  margin-top: 20px;
`;

const StepsIfo = () => {
  const steps = useSelector(getCurrentSteps);
  return (
    <>
      <Link to="/">
        <S.Link>Back to home</S.Link>
      </Link>
      <S.Header>Your current steps</S.Header>
      <FontAwesomeIcon icon={faShoePrints} size={64} />
      <Steps testID="steps">{steps}</Steps>
    </>
  );
};

export default StepsIfo;
