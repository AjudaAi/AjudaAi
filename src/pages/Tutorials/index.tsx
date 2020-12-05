import React, { useRef, useCallback } from 'react';
import { View } from 'react-native';
import { Modalize } from 'react-native-modalize';

import Profile from '../../components/Profile';
import CardTutorial from '../../components/CardTutorial';
import theme from '../../styles/theme';

// TODO deixar dinamico a troca do icone whatsapp
import imgAvatar from '../../assets/images/avatar/perguntando.png';
import whatsapp from '../../assets/images/tutorials/whatsapp.png';

import T1thumbanail from '../../assets/tutorials/whatsapp/tutorial1/slide1.1.png';
import T2thumbanail from '../../assets/tutorials/whatsapp/tutorial2/slide2.1.png';

import CarouselAjudaAi from '../../components/CarouselAjudaAi';

import TextCard from '../../components/TextCard';

import { Container, LinearGradientStyled, Text, Section } from './styles';

const Tutorials: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = useCallback(() => {
    modalizeRef.current?.open();
  }, []);

  return (
    <Container>
      <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
        <Profile avatar={imgAvatar} iconImage={whatsapp} profileSize="small" />
        <TextCard sizeTextCard="small">
          Toque e escute o que tutorial ensina!
        </TextCard>

        <Text>Aulas disponíveis</Text>
        {/* TODO Tornar dinamico listagem de tutorials */}
        <Section>
          <CardTutorial
            title="Como mandar áudio"
            thumbnail={T1thumbanail}
            modal={onOpen}
          />

          <CardTutorial
            title="Como fazer chamadas"
            thumbnail={T2thumbanail}
            modal={onOpen}
          />
        </Section>
        
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
