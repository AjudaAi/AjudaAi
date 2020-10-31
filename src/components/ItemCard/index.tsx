import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, ItemText, TutorialImage } from './styles';

interface PropsItemCard {
  text: string;
  image: ImageSourcePropType;
}

const ItemCard: React.FC<PropsItemCard> = ({ image, text }) => {
  return (
    <Container>
      <TutorialImage source={image} />
      <ItemText>{text}</ItemText>
    </Container>
  );
};

export default ItemCard;
