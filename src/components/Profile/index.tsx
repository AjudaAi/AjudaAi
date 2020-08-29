import React from 'react';
import { Text } from 'react-native';

import { BoxModel, Container } from './styles';


export const Profile: React.FC = () => {
  return (
    <Container>
      <BoxModel>
        <Text>Profile</Text>
      </BoxModel>
    </Container>
  );
}