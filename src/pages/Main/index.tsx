import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import SplashScreen from '../SplashScreen';

import theme from '../../styles/theme';

import { Container, LinearGradientStyled } from './styles';

const Main: React.FC = () =>  {
    return(
      <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default Main;
