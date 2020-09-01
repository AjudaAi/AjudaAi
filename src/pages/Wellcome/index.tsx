import React, { useEffect, useState, useCallback } from 'react';

import Profile from '../../components/Profile';
import CardText from '../../components/TextCard';

import dataPage from './dataPagesWelcome';

import { Container, SubTitle, Title } from './styles';

const Wellcome: React.FC = () => {
  const [currentIdStateWelcome, setCurrentIdStateWelcome] = useState(2);

  const nextStep = useCallback(() => {
    setCurrentIdStateWelcome(prev => dataPage[prev].nextId);
  }, []);

  const prevStep = useCallback(() => {
    // setCurrentIdStateWelcome(prev => dataPage[prev].prevId);
  }, []);

  useEffect(() => {}, []);

  return (
    <Container>
      <Title>{dataPage[currentIdStateWelcome].title}</Title>
      <SubTitle>{dataPage[currentIdStateWelcome].subtitle}</SubTitle>
      <Profile avatar={dataPage[currentIdStateWelcome].profile} />
      {dataPage[currentIdStateWelcome].textCard &&
        (<CardText>{dataPage[currentIdStateWelcome].textCard}</CardText>
      )}
    </Container>
  );
};

export default Wellcome;
