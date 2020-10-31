import React from 'react';
import { FlatList } from 'react-native';

import Profile from '../../components/Profile';
import ItemCard from '../../components/ItemCard';
import theme from '../../styles/theme';

import imgAvatar from '../../assets/images/perguntando.png';

import { Container, LinearGradientStyled, Content } from './styles';

const AppScreen: React.FC = () => {
  const app = [
    { name: 'Whatsapp', icon: 'whatsapp' },
    { name: 'Telegram', icon: 'telegram' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Instagram', icon: 'instagram' },
  ];

  const numColumns = 2;

  return (
    <Container>
      <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
        <Content>
          <Profile avatar={imgAvatar} profileSize="small" />
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            data={app}
            renderItem={obj => {
              return <ItemCard text={obj.item.name} icon={obj.item.icon} />;
            }}
          />
        </Content>
      </LinearGradientStyled>
    </Container>
  );
};

export default AppScreen;
