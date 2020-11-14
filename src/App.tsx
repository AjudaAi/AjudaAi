import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from 'styled-components';

import OpeningTutorial from './pages/OpeningTutorial';
import AppScreen from './pages/AppScreen';
import Tutorials from './pages/Tutorials';

import theme from './styles/theme';

const App: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={OpeningTutorial} />
          <Stack.Screen name="Dashboard" component={AppScreen} />
          <Stack.Screen name="Tutorials" component={Tutorials} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
