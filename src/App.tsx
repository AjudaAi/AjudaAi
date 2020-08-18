import React from 'react';
import { StatusBar } from 'react-native';

import styled from 'styled-components/native';

const App: React.FC = () => {
    return (
        <View>
            <Text>Hello World</Text>
            <StatusBar backgroundColor="#15ABE0" barStyle="default" translucent />
        </View>
    );
}

const View = styled.View`
    background: #15ABE0;
    flex: 1;

    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: #fff;
    font-size: 32px;
`;

export default App;
