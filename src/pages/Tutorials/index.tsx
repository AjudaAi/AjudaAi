import React from 'react';

import Profile from '../../components/Profile';
import theme from '../../styles/theme';

import imgAvatar from '../../assets/images/perguntando.png';
import whatsapp from '../../assets/images/tutorials/whatsapp.png';

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
          {/* TODO Criar component(CARD) */}
        </Section>
      </LinearGradientStyled>
    </Container>
  );
}

export default Tutorials;