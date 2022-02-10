import React from 'react';
import styled from 'styled-components';
import {Dimensions, View, Text, SafeAreaView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHorse} from '@fortawesome/free-solid-svg-icons';
import {NativeRouter, Route, Routes} from 'react-router-native';

import StepInfo from './components/StepsInfo';
import Welcome from './components/Welcome';
import {useSelector} from 'react-redux';
import {getUserName} from './selectors/userSelectors';

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

const UserStatus = styled(Text)`
  font-size: 11px;
  text-align: right;
  margin-right: 10px;
`;

export default function App() {
  const userName = useSelector(getUserName);
  return (
    <NativeRouter>
      <SafeAreaView>
        <UserStatus>Logged in as {userName}</UserStatus>
        <LogoHeader>Steppe®</LogoHeader>
        <Logo icon={faHorse} size={64} />
      </SafeAreaView>
      <Container>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="steps" element={<StepInfo />} />
        </Routes>
      </Container>
    </NativeRouter>
  );
}
