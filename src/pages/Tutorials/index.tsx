import React from 'react';

import Profile from '../../components/Profile';

import imgAvatar from '../../assets/images/perguntando.png';
import whatsapp from '../../assets/images/tutorials/whatsapp.png';

import { Container } from './styles';

const Tutorials: React.FC = () => {
  return (
    <Container>
      <Profile avatar={imgAvatar} iconImage={whatsapp} profileSize="small" />
    </Container>
  );
}

export default Tutorials;