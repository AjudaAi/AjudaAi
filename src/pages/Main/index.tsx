import React from 'react';
import { StatusBar } from 'react-native';

import SplashScreen from '../SplashScreen';

import { Container, LinearGradientStyled } from './styles';
import theme from '../../styles/theme';

const Main: React.FC = () =>  {
    return(
        <Container>
            <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
                <SplashScreen />
                <StatusBar
                    backgroundColor={theme.colors.sideBarColor}
                    barStyle="default"
                    translucent
                />
            </LinearGradientStyled>
        </Container>
    );
}

export default Main;