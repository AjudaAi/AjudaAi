import React, { useCallback } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import theme from '../../styles/theme';
import { chooseTutorial } from '../../utils/ChooseTutorial';
import { ContainerCarousel, ImageSlide, LinearGradientStyled } from './styles';
interface DataCarousel {
  tutorial: 'whatsapp' | 'olx'| 'gmail' | 'telegram' | 'nubank' | 'drive';
  modulo: number;
}

const CarouselAjudaAi: React.FC<DataCarousel> = (tutorial: DataCarousel) => {
  const { width: viewportWidth } = Dimensions.get('window');
  
  const data = chooseTutorial(tutorial);
  
  const handleRenderItem = useCallback(({ item, _ }: any) => {
    return (
      <ContainerCarousel>
        <ImageSlide source={item.image} />
      </ContainerCarousel>
    );
  }, []);

  return (
    <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
      <Carousel
        layout={'tinder'}
        layoutCardOffset={8} 
        data={data}
        renderItem={handleRenderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </LinearGradientStyled>
  );
}

export default CarouselAjudaAi;