import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import SplashScreen from '../SplashScreen';
import Wellcome from '../Wellcome';

import theme from '../../styles/theme';

import { Container, LinearGradientStyled } from './styles';

const Main: React.FC = () =>  {
    return(
      <ThemeProvider theme={theme}>
        <Container>
            <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
                <StatusBar
                    backgroundColor={theme.colors.sideBarColor}
                    barStyle="default"
                    translucent
                />
                <SplashScreen />
                <Wellcome />
            </LinearGradientStyled>
        </Container>
      </ThemeProvider>
    );
}

export default Main;
