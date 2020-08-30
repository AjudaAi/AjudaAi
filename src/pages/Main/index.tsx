import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import SplashScreen from '../SplashScreen';
import Wellcome from '../Wellcome';

import theme from '../../styles/theme';

import { Container, LinearGradientStyled } from './styles';

const Main: React.FC = () => {
  const [currentStepPages, setCurrentStepPages] = useState(0);
  const [stepsComponents, setStepsComponents] = useState([
    <SplashScreen />,
    <Wellcome />,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentStepPages(1);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
          <StatusBar
            backgroundColor={theme.colors.sideBarColor}
            barStyle="default"
            translucent
          />
          <SplashScreen />
          {/* {stepsComponents[currentStepPages]} */}
        </LinearGradientStyled>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
