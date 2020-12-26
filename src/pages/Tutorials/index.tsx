import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Modalize } from 'react-native-modalize';

import Profile from '../../components/Profile';
import CardTutorial from '../../components/CardTutorial';
import theme from '../../styles/theme';

import imgAvatar from '../../assets/images/avatar/perguntando.png';
import whatsapp from '../../assets/images/logoTutorial/whatsapp.png';

import CarouselAjudaAi from '../../components/CarouselAjudaAi';
import TextCard from '../../components/TextCard';

import CardTutorialDTO from '../../dtos/ICardTutorialDTO';
import TutorialsDTO from '../../dtos/ITutorialsDTO';

import thumbnailTutorials from '../../shared/thumbnails';
import { chooseTutorial } from '../../utils/ChooseTutorial';

import {
  Container,
  CardTutorialList,
  LinearGradientStyled,
  Text,
  Section,
} from './styles';

const Tutorials: React.FC = ({ route }) => {
  const { tutorial } = route.params;
  const [cardTutorials, setCardTutorials] = useState<CardTutorialDTO[]>();

  const [tutorialsAll, setTutorialsAll] = useState<TutorialsDTO[]>([]);

  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    const tutorials = thumbnailTutorials.filter(
      thumbnail => thumbnail.tutorial === tutorial.toLowerCase(),
    );

    setCardTutorials(tutorials);
  }, []);

  const onOpen = useCallback(
    (modulo: number, tutorial: any) => {
      const filteredTutorial = chooseTutorial({ tutorial, modulo });

      if (!filteredTutorial) {
        throw new Error('Not found tutorial');
      }

      setTutorialsAll(filteredTutorial);

      setTimeout(() => {
        modalizeRef.current?.open();
      }, 200);
    },
    [tutorialsAll],
  );

  return (
    <Container>
      <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
        {/* TODO deixar dinamico a troca do icone whatsapp */}
        <Profile avatar={imgAvatar} iconImage={whatsapp} profileSize="small" />
        <TextCard sizeTextCard="small">
          Toque e escute o que tutorial ensina!
        </TextCard>
        <Text>Aulas disponíveis</Text>

        <CardTutorialList
          horizontal
          showsHorizontalScrollIndicator
          data={cardTutorials}
          keyExtractor={cardTutorial => cardTutorial.modulo}
          renderItem={({ item }) => (
            <CardTutorial
              modulo={item.modulo}
              title={item.title}
              thumbnail={item.thumbnail}
              modal={() => onOpen(item.modulo, item.tutorial)}
            />
          )}
        />

        {tutorialsAll &&
          tutorialsAll.map(t => (
            <Modalize
              key={t.id}
              ref={modalizeRef}
              scrollViewProps={{ showsVerticalScrollIndicator: false }}
              snapPoint={900}
            >
              <CarouselAjudaAi tutorial={t.tutorial} modulo={t.modulo} />
            </Modalize>
          ))}
      </LinearGradientStyled>
    </Container>
  );
};

export default Tutorials;
