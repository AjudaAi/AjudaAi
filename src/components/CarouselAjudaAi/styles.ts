import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import theme from '../../styles/theme/index';

const { height: viewportHeight,  width: viewportWidth } = Dimensions.get('window');

export const Container = styled.View`
  align-items: center;
  background: ${theme.colors.primary};
  justify-content: center;
  height: 100%;
`;

export const ImageSlide = styled.Image`
  width: ${viewportWidth};
  height: 50%;
`;
export const ContainerCarousel = styled.View`
  align-items: center; 
  justify-content: center;
  height: ${viewportHeight};
  width: ${viewportWidth};
  /* padding: 0 2px; */
`;