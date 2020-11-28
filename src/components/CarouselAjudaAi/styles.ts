import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import theme from '../../styles/theme/index';

const { height: viewportHeight,  width: viewportWidth } = Dimensions.get('window');


export const Container = styled.View`
  align-items: center;
  background: ${theme.colors.primary};
  justify-content: center;
`;

export const ImageSlide = styled.Image`
  width: 300px;
  height: 300px;
`;
export const ContainerCarousel = styled.View`
  align-items: center; 
  justify-content: center;
  height: ${viewportHeight};
`;