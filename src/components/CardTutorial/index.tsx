import React from 'react';
import { ImageSourcePropType } from 'react-native';

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
        <Block onPress={() => modal(modulo, title)}>
          <Title>{title}</Title>
          <ImageTutorial source={thumbnail} />
        </Block>
      </Container>
    </>
  );
};

export default CardTutorial;
