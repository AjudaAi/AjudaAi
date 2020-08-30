import React from 'react';
import Profile from '../../components/Profile';
import { Container, SubTitle, Title } from './styles';

const Wellcome: React.FC = () => {
  return (
        <Container>
            <Title>Assistente Ajuda aí!</Title>
            <SubTitle>Apoio por voz</SubTitle>
            <Profile />
        </Container>
  );
}

export default Wellcome;