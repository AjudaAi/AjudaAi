import React from 'react';

import { Container, SubTitle, Image } from './styles';
import logo from '../../assets/logo.jpg';

const SplashScreen: React.FC = () => {
    return(
        <Container>
            <Image source={logo} />
            <SubTitle>Ajuda ai!</SubTitle>
        </Container>
    );
}

export default SplashScreen;
