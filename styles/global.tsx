import styled from 'styled-components';

import {Text, View} from 'react-native';

export const Header = styled(Text)`
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;
  color: #000;
`;

export const Link = styled(Text)`
  text-decoration: underline;
`;

export const Button = styled(Text)`
  background: red;
  color: #fff;
  border-radius: 3px;
  padding: 5px;
`;

export const Container = styled(View)`
  padding: 20px;
  border: 1px solid #eee;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;
