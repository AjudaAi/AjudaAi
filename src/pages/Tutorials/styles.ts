import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native';

import CardTutorial from '../../dtos/ICardTutorialDTO';

export const Container = styled.View`
  position: relative;
  flex: 1;
`;

export const LinearGradientStyled = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  display: flex;
  width: 80%;
  color: #9bfcff;
  font-family: 'RalewayRegular';
  font-size: 18px;
  text-align: left;
  padding-bottom: 10px;
`;

export const Section = styled.View`
  position: relative;
  width: 80%;
`;

export const CardTutorialList = styled(
  FlatList as new () => FlatList<CardTutorial>,
)`
  width: 80%;
  height: 100%;
`;
