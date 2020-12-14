import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LinearGradientStyled = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 100%;
  width: 100%;
`;

export const Content = styled.View`
  margin-top: 13px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
 text-align: center;
 font-family: 'RalewayRegular';
 font-size: 26px;
 color: ${props => props.theme.colors.textPrimary};
`;

export const TitleSub = styled.Text`
  margin-bottom: 28px;
  textAlign: center;
  line-height: 22px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 18px;
  margin-top: 8px;
  font-family: 'RalewayRegular';
`;
