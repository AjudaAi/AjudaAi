import React from 'react';

import { Container, ItemText, Item, Icon } from './styles';

interface PropsItemCard {
  text: string;
  icon: string;
}

const ItemCard: React.FC<PropsItemCard> = ({ icon, text }) => {
  return (
    <Container>
      <Item>
        <Icon name={icon} size={60} />
      </Item>
      <ItemText>{text}</ItemText>
    </Container>
  );
};

export default ItemCard;
