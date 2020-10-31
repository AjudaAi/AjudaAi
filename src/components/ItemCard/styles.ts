import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  height: 80px;
  width: 80px;
  background: ${theme.colors.profile};
  border-radius: 6px;
  padding-top: 8px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  margin: 15px 15px;
`;

export const ItemText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-family: 'QuesatRegular';
`;

export const TutorialImage = styled.Image`
  width: 48px;
  height: 48px;
`;
