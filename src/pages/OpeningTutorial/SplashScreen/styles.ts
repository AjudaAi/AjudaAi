import styled from 'styled-components/native';

export const Container = styled.View`
  align-content: center;
  justify-content: center;
`;

export const SubTitle = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-family: 'QuesatBold';
  font-size: 45px;
  text-align: center;
  transform: translateY(25px);
`;

export const Image = styled.Image`
  width: 600px;
  height: 200px;
`;
