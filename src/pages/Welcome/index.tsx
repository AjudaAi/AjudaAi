import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Profile from '../../components/Profile';
import CardText from '../../components/TextCard';
import Button from '../../components/Button';
import SoundButton from '../../components/SoundButton';

import dataPage from './dataPagesWelcome';

import { Container, SubTitle, Title, ContainerButton } from './styles';

const Welcome: React.FC = () => {
  const [currentIdStateWelcome, setCurrentIdStateWelcome] = useState(0);
  const nextStep = useCallback(() => {
    if (prev => dataPage[prev].nextId !== null) {
      setCurrentIdStateWelcome(prev => dataPage[prev].nextId);
    } else {
      setCurrentIdStateWelcome(7);
    }
  }, []);

  const prevStep = useCallback(() => {
    if (prev => dataPage[prev].prevId !== null) {
      setCurrentIdStateWelcome(prev => dataPage[prev].prevId);
    }else {
      setCurrentIdStateWelcome(7);
    }
  }, []);

  return (
    <Container>
      <Title>{dataPage[currentIdStateWelcome].title}</Title>
      <SubTitle>{dataPage[currentIdStateWelcome].subtitle}</SubTitle>
      <Profile avatar={dataPage[currentIdStateWelcome].profile} />

      <SoundButton icon={<Icon name="volume-up" size={28}/>}/>

      {dataPage[currentIdStateWelcome].textCard &&
        (<CardText>{dataPage[currentIdStateWelcome].textCard}</CardText>
      )}
      <ContainerButton>
        {dataPage[currentIdStateWelcome].buttonText1 &&
          <Button onPress={() => nextStep()}>{dataPage[currentIdStateWelcome].buttonText1}</Button>
        }
      </ContainerButton>

    </Container>
  );
};

export default Welcome;
