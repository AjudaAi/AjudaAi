import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { Container, SubTitle, Image, LinearGradientStyled } from './styles';
import logo from '../../assets/images/logo.png';
import theme from '../../styles/theme';

const SplashScreen: React.FC = ({ navigation }) => {
  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key');
        setTimeout(() => {
          if (value !== null) {
            // value previously stored
            navigation.navigate('Dashboard');
          } else {
            navigation.navigate('Home');
          }
        }, 3000);
      } catch (e) {
        // error reading value
      }
    })();

    (async () => {
      try {
        await AsyncStorage.setItem('@storage_Key', 'stored value');
      } catch (e) {
        // saving error
      }
    })();
  }, []);

  return (
    <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
      <Container>
        <Image source={logo} />
        <SubTitle>Ajuda ai!</SubTitle>
      </Container>
    </LinearGradientStyled>
  );
};

export default SplashScreen;
