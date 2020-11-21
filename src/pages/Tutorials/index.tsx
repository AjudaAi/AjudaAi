import React from 'react';

import Profile from '../../components/Profile';
import CardTutorial from '../../components/CardTutorial';
import theme from '../../styles/theme';

import imgAvatar from '../../assets/images/avatar/perguntando.png';
import whatsapp from '../../assets/images/tutorials/whatsapp.png';
import tutorialWhatsapp from '../../assets/tutorials/whatsapp/slide1.1.png';

import tutorialsWhatsapp from './modules/whatsapp/content';

import TextCard from '../../components/TextCard';

import { Container, LinearGradientStyled, Text, Section } from './styles';

const Tutorials: React.FC = () => {
  return (
    <Container>
      <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
        <Profile avatar={imgAvatar} iconImage={whatsapp} profileSize="small" />
        <TextCard sizeTextCard="small">
          Toque e escute o que tutorial ensina!
        </TextCard>

        <Section>
          <Text>Aulas disponíveis</Text>
          <CardTutorial 
            title="Como mandar áudios e outras coisas!"
            thumbnail={tutorialWhatsapp}
            data={tutorialsWhatsapp}
          />
        </Section>
      </LinearGradientStyled>
    </Container>
  );
}

export default Tutorials;