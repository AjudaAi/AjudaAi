import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { ButtonContainer, ItemText, TutorialImage } from './styles';

interface PropsItemCard {
  text: string;
  texto: string;
  image: ImageSourcePropType;
  pipView(): void;
}

const ItemCard: React.FC<PropsItemCard> = ({ image, text, pipView }) => {
  return (
    <ButtonContainer onPress={pipView}>
      <TutorialImage source={image} />
      <ItemText>{text}</ItemText>
    </ButtonContainer>
  );
};

export default ItemCard;
