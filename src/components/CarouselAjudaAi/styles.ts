import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height: viewportHeight } = Dimensions.get('window');

export const LinearGradientStyled = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ImageSlide = styled.Image`
  width: 100%;
  height: 50%;
`;
export const ContainerCarousel = styled.View`
  align-items: center; 
  justify-content: center;
  height: ${viewportHeight};
  width: 100%;
`;