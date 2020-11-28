import React, { useCallback, useState } from 'react';
import { Dimensions, ImageSourcePropType } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Container, ContainerCarousel, ImageSlide } from './styles';

import wpp from '../../assets/images/tutorials/whatsapp.png';
import gmail from '../../assets/images/tutorials/gmail.png';

interface PropsItems {
  image: ImageSourcePropType;
}

const CarouselAjudaAi: React.FC = () => {
  const { width: viewportWidth } = Dimensions.get('window');

  const values: PropsItems[] = [
    {
      image: wpp,
    },
    {
      image: gmail,
    },
  ]

  const [data, setData ] = useState(values);  
  
  const handleRenderItem = useCallback(({ item, _ }: any) => {

    return (
      <ContainerCarousel>
        <ImageSlide source={item.image} />
      </ContainerCarousel>
    );
  }, []);

  return (
    <Container>
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
    </Container>
  );
}

export default CarouselAjudaAi;