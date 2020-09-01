import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Container, Content } from './styles';
import { StyleSheet } from 'react-native';

const TextCard: React.FC = ({ children }) => (
  <Container style={styles.container}>
    <Content>{children}</Content>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    height: hp('18%'),
    width: wp('80%')
  },
});

export default TextCard;
