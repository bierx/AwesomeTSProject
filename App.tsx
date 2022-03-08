import React, {useCallback, useEffect} from 'react';
import RNShake from 'react-native-shake';
import styled from 'styled-components';
import {View, Text, SafeAreaView} from 'react-native';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import {NativeRouter, Route, Routes} from 'react-router-native';

import Rewards from './components/Rewards';
import WeaterInfo from './components/Weather';
import Welcome from './components/Welcome';
import {useDispatch, useSelector} from 'react-redux';
import {getUserName} from './core/selectors/userSelectors';
import {getCurrentSteps} from './core/selectors/stepsSelector';
import {changeCountInit} from './core/actions/counts';

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
  const steps = useSelector(getCurrentSteps);

  const dispatch = useDispatch();

  const handleShake = useCallback(() => {
    return dispatch(changeCountInit());
  }, [dispatch]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleShake();
    });
    return () => {
      subscription.remove();
    };
  }, [handleShake]);

  return (
    <InternetConnectionAlert
      onChange={connectionState => {
        console.log('Connection State: ', connectionState);
      }}>
      <NativeRouter>
        <SafeAreaView>
          <UserStatus testID="userName">Logged in as {userName}</UserStatus>
          {steps > 5 && (
            <View>
              <UserStatus>
                Your have earned one badge from {steps} steps
              </UserStatus>
            </View>
          )}
        </SafeAreaView>
        <Container>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="weater" element={<WeaterInfo />} />
          </Routes>
        </Container>
      </NativeRouter>
    </InternetConnectionAlert>
  );
}
