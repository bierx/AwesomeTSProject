import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styled from 'styled-components';
import {Dimensions, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHorse} from '@fortawesome/free-solid-svg-icons';
import {NativeRouter, Route, Routes} from 'react-router-native';

import StepInfo from './components/StepsInfo';
import Welcome from './components/Welcome';

const LogoHeader = styled(Text)`
  color: red;
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  padding-left: 15px;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
`;
const Logo = styled(FontAwesomeIcon)`
  color: red;
  position: absolute;
  top: 80px;
  left: ${Dimensions.get('window').width / 2 - 25}px;
`;

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
`;

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaProvider>
        <LogoHeader>Steppe®</LogoHeader>
        <Logo icon={faHorse} size={64} />
        <Container>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="steps" element={<StepInfo />} />
          </Routes>
        </Container>
      </SafeAreaProvider>
    </NativeRouter>
  );
}
