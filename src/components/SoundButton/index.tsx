import React from 'react';

import { Container, ButtonIcon } from './styles';

interface IconProps {
    icon: any;
}

const handleSound = () => {
  //TODO
}

const SoundButton: React.FC<IconProps> = ({ icon }) => {
  return (
    <Container>
        <ButtonIcon onPress={() => {}}>{icon}</ButtonIcon>
    </Container>
  );
}

export default SoundButton;