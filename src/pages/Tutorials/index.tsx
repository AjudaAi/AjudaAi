import React, { useRef, useCallback, useMemo } from 'react';
import { Modalize } from 'react-native-modalize';

import Profile from '../../components/Profile';
import CardTutorial from '../../components/CardTutorial';
import theme from '../../styles/theme';

// TODO deixar dinamico a troca do icone whatsapp
import imgAvatar from '../../assets/images/avatar/perguntando.png';
import whatsapp from '../../assets/images/tutorials/whatsapp.png';

import CarouselAjudaAi from '../../components/CarouselAjudaAi';

import TextCard from '../../components/TextCard';

import CardTutorialDTO from '../../dtos/ICardTutorialDTO';
import { thumbnailTutorials } from './modules/whatsapp/content';

import { Container, CardTutorialList, LinearGradientStyled, Text, Section } from './styles';

const Tutorials: React.FC = () => {
  const cardTutorials = useMemo<CardTutorialDTO[]>(() => {
    return thumbnailTutorials;
  }, [thumbnailTutorials]);

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = useCallback(() => {
    modalizeRef.current?.open();
  }, []);

  return (
    <Container>
      <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
        <Profile avatar={imgAvatar} iconImage={whatsapp} profileSize="small" />
        <TextCard sizeTextCard="small">Toque e escute o que tutorial ensina!</TextCard>
        <Text>Aulas disponíveis</Text>
        
        <CardTutorialList
          horizontal
          showsHorizontalScrollIndicator
          data={cardTutorials}
          keyExtractor={(cardTutorial) => cardTutorial.modulo}
          renderItem={({item}) => (
            <CardTutorial
                title={item.title}
                thumbnail={item.thumbnail}
                modal={onOpen}
              />
          )}
        />
        
        <Modalize
          ref={modalizeRef}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          snapPoint={900}
        >

          <CarouselAjudaAi tutorial="whatsapp" modulo={1} />
          <CarouselAjudaAi tutorial="whatsapp" modulo={2} />
        
        </Modalize>
      </LinearGradientStyled>
    </Container>
  );
};

export default Tutorials;
