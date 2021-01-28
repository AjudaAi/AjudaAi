import React from 'react';
import { StyleSheet } from 'react-native';
import { resolveSizeTexCard } from '../../utils/ResolveSizeTexCard';

import { Container, Content } from './styles';

export interface PropsTextCard {
  sizeTextCard: 'small' | 'medium' | 'large';
}

const TextCard: React.FC<PropsTextCard> = ({
  sizeTextCard,
  children,
}: PropsTextCard) => {
  const containerStyles = resolveSizeTexCard({ size: sizeTextCard });
  const styles = StyleSheet.create({ containerStyles });

  return (
    <Container style={styles.containerStyles}>
      <Content>{children}</Content>
    </Container>
  );
};

export default TextCard;
