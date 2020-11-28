import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, ImageTutorial, Block, Title } from './styles';

interface ICardTutorial {
  thumbnail: ImageSourcePropType;
  title: string;
  data?: any;
  modal(): void;
}

const CardTutorial: React.FC<ICardTutorial> = ({
  thumbnail,
  title,
  data,
  modal,
}: ICardTutorial) => {
  return (
    <>
      <Container>
        <Block onPress={modal}>
          <Title>{title}</Title>
          <ImageTutorial source={thumbnail} />
        </Block>
      </Container>
    </>
  );
};

export default CardTutorial;
