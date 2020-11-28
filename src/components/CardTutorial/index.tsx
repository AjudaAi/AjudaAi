import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, ImageTutorial, Block, Title } from './styles';

interface ICardTutorial {
  thumbnail: ImageSourcePropType;
  title: string;
  data?: any;
}

const CardTutorial: React.FC<ICardTutorial> = ({ thumbnail, title, data }: ICardTutorial) => {
  
  return (
    <Container>
      <Block>
        <Title>
          {title}
        </Title>
        <ImageTutorial source={thumbnail}/>

        {/* <Modal>
          <View>
            <Carrosel data={data}></Carrosel>
          </View>
        </Modal> */}
      </Block>
    </Container>
  );
}

export default CardTutorial;