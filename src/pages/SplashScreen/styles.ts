import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  align-content: center;
  justify-content: center;
`;

export const LinearGradientStyled = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 100%;
  width: 100%;
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
