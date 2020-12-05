import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

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
  color: #9BFCFF;
  font-family: 'RalewayRegular';
  font-size: 18px;
  text-align: left;
`;

export const Section = styled.View`
  position: relative;
  flex-direction: row;
  width: 80%;
`;