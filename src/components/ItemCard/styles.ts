import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import theme from '../../styles/theme';

export const Container = styled.View`
  height: 110px;
  width: 120px;
  background: ${theme.colors.profile};
  border-radius: 6px;
  padding-top: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  margin: 15px 15px;
`;

export const Item = styled.View`
  align-items: center;
  justify-content: center;
  width: 73px;
  height: 70px;
  background: #25d366;
  border-radius: 4px;

  margin-top: 10px;
`;

export const ItemText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  margin: 5px 0 7px 0;
  font-family: 'QuesatRegular';
`;

export const Icon = styled(FontAwesome)`
  align-items: center;
  color: #fff;
`;
