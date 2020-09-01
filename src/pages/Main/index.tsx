import React, { useState, useEffect } from 'react';
import { StatusBar,  } from 'react-native';

import { ThemeProvider } from 'styled-components';

import SplashScreen from '../SplashScreen';
import Wellcome from '../Wellcome';

import theme from '../../styles/theme';

import { Container,Test, LinearGradientStyled } from './styles';

import Button from '../../components/Button';

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
          {/* <SplashScreen /> */}
          {stepsComponents[currentStepPages]}

          <Test>
            <Button text="Eu mesmo!" action={() => {}} />
            <Button text="Um familiar!" action={() => {}} />
          </Test>
          
          {/* <Button text="Um familiar" onPress={() => handleHello} /> */}
        </LinearGradientStyled>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
