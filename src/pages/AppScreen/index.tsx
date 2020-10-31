import React from 'react';
import { FlatList } from 'react-native';

import Profile from '../../components/Profile';
import ItemCard from '../../components/ItemCard';
import theme from '../../styles/theme';

import imgAvatar from '../../assets/images/perguntando.png';

import imageGmail from '../../assets/images/tutorials/gmail.png';
import imageNubank from '../../assets/images/tutorials/nubank.png';
import imageTelegram from '../../assets/images/tutorials/telegram.png';
import imageTiktok from '../../assets/images/tutorials/tiktok.png';
import imageWhatsapp from '../../assets/images/tutorials/whatsapp.png';
import imageGoogleDrive from '../../assets/images/tutorials/google-drive.png';

import { Container, LinearGradientStyled, Content } from './styles';

const AppScreen: React.FC = () => {
  const app = [
    { name: 'Whatsapp', image: imageWhatsapp },
    { name: 'Gmail', image: imageGmail },
    { name: 'Telegram', image: imageTelegram },
    { name: 'Tiktok', image: imageTiktok },
    { name: 'Nubank', image: imageNubank },
    { name: 'Drive', image: imageGoogleDrive },
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
              return <ItemCard text={obj.item.name} image={obj.item.image} />;
            }}
          />
        </Content>
      </LinearGradientStyled>
    </Container>
  );
};

export default AppScreen;
