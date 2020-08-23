import React from 'react';

import { Container, SubTitle, Image } from './styles';
import logo from '../../assets/logo.jpg';

/*
 - Container
 - Logo
 - Subtitulo
*/

const LogoContainer: React.FC = () => (
  <Container>
    <Image source={logo} />
    <SubTitle>Ajuda ai!</SubTitle>
  </Container>
);

export default LogoContainer;
