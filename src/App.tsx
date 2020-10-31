import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OpeningTutorial from './pages/OpeningTutorial';

const App: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={OpeningTutorial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
