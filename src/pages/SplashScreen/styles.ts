import styled from 'styled-components/native';

export const Container = styled.View`
  align-content: center;
  justify-content: center;
`;

export const SubTitle = styled.Text`
  color: ${(props => props.theme.colors.textPrimary)};
  font-family: 'QuesatBold';
  font-size: 45px;
  text-align: center;
  transform: translateY(28px);
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
`;
