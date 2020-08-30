import React, { useEffect, useState, useCallback } from 'react';
import Profile from '../../components/Profile';
import { Container, SubTitle, Title } from './styles';

import dataPage from './dataPagesWelcome';

const Wellcome: React.FC = () => {
  const [currentIdStateWelcome, setCurrentIdStateWelcome] = useState(0);

  const nextStep = useCallback(() => {
    setCurrentIdStateWelcome(prev => dataPage[prev].nextId);
  }, []);

  const prevStep = useCallback(() => {
    // setCurrentIdStateWelcome(prev => dataPage[prev].prevId);
  }, []);

  useEffect(() => {}, []);

  return (
    <Container>
      <Title>Assistente Ajuda aí!</Title>
      <SubTitle>Apoio por voz</SubTitle>
      <Profile />
    </Container>
  );
};

export default Wellcome;
