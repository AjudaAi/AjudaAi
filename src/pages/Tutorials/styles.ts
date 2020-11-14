import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  position: relative;
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

export const Text = styled.Text`
  align-self: flex-start;
  color: #9BFCFF;
  font-family: 'RalewayRegular';
  font-size: 18px;
  text-align: left;
`;

export const Section = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  width: 80%;
`;