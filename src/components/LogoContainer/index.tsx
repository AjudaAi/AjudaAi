import React from 'react';

import logo from '../../assets/logo.jpg';

import { Container, SubTitle, Image } from './styles';
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
