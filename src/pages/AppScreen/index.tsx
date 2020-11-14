import React, { useCallback } from 'react';
import PictureInPicture from 'react-native-picture-in-picture';

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

const AppScreen: React.FC = ({ navigation }) => {
  const app = [
    { name: 'Whatsapp', image: imageWhatsapp },
    { name: 'Gmail', image: imageGmail },
    { name: 'Telegram', image: imageTelegram },
    { name: 'Tiktok', image: imageTiktok },
    { name: 'Nubank', image: imageNubank },
    { name: 'Drive', image: imageGoogleDrive },
  ];

  const pipHandler = useCallback(() => {
    // TODO inserir rota para tela de tutoriais
    // PictureInPicture.start();
    navigation.navigate('Tutorials');
  }, []);

  return (
    <Container>
      <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
        <Content>
          <Profile avatar={imgAvatar} profileSize="small" />
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            data={app}
            renderItem={obj => {
              return <ItemCard pipView={pipHandler} text={obj.item.name} image={obj.item.image} />;
            }}
          />
        </Content>
      </LinearGradientStyled>
    </Container>
  );
};

export default AppScreen;
