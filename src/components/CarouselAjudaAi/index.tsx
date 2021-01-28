import { position } from 'polished';
import React, { useCallback , useState} from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Text } from '../../pages/Tutorials/styles';

import theme from '../../styles/theme';
import { chooseTutorial } from '../../utils/ChooseTutorial';
import { ContainerCarousel, ImageSlide, LinearGradientStyled } from './styles';
interface DataCarousel {
  tutorial: 'whatsapp' | 'olx'| 'gmail' | 'telegram' | 'nubank' | 'drive';
  modulo: number;
}


const CarouselAjudaAi: React.FC<DataCarousel> = (tutorial: DataCarousel) => {

  const { width: viewportWidth } = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);
  
  const data = chooseTutorial(tutorial);
  
  const handleRenderItem = useCallback(({ item, index}: any) => {
    return (
      <ContainerCarousel>
        <ImageSlide source={item.image} />
      </ContainerCarousel>
    );
  }, []);

   //paginação do carrosel 
   const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'transparent',
           position:'absolute',
           zIndex:1001,
           top:'80%',
           height:65
          
          }}
        dotStyle={{
            width: 10,
            height:10,
            borderRadius: 5,
            marginHorizontal: 20,
            marginBottom:60,
            backgroundColor: 'rgba(238, 238, 238, 238)',
           
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
      />
    );
  }


  return (
    <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
      <Carousel
       data={data}
        layout={'tinder'}
        renderItem={handleRenderItem}
        layoutCardOffset={8} 
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {pagination()}
    </LinearGradientStyled>

  );
}

export default CarouselAjudaAi;