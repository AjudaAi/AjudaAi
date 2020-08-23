import React from 'react';
import { StatusBar } from 'react-native';

import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import theme from './styles/theme';
import LogoContainer from './components/LogoContainer';

const App: React.FC = () => {
  return (
    <View>
      <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
        <LogoContainer />
        <StatusBar
          backgroundColor={theme.colors.sideBarColor}
          barStyle="default"
          translucent
        />
      </LinearGradientStyled>
    </View>
  );
};

const View = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 32px;
`;

const LinearGradientStyled = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 100%;
  width: 100%;
`;

export default App;
