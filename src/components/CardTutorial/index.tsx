import React from 'react';
import { ImageSourcePropType, View } from 'react-native';

import { Container, ImageTutorial, Block, Title } from './styles';

interface ICardTutorial {
  thumbnail: ImageSourcePropType;
  title: string;
  modulo: number;
  modal(modulo: Number, tutorial: any): void;
}

const CardTutorial: React.FC<ICardTutorial> = ({
  thumbnail,
  title,
  modal,
  modulo,
}: ICardTutorial) => {
  return (
    <>
      <Container>
        <View style={{ alignItems: 'center', paddingBottom:50}}>
          <Title>{title}</Title>
        </View>
        <Block onPress={() => modal(modulo, title)}>
          <ImageTutorial source={thumbnail} />
        </Block>
      </Container>
    </>
  );
};

export default CardTutorial;
