import React, { useCallback } from 'react';
import PictureInPicture from 'react-native-picture-in-picture';

import { FlatList } from 'react-native';

import Profile from '../../components/Profile';
import ItemCard from '../../components/ItemCard';
import theme from '../../styles/theme';

import imgAvatar from '../../assets/images/avatar/perguntando.png';

import imageGmail from '../../assets/images/logoTutorial/gmail.png';
import imageNubank from '../../assets/images/logoTutorial/nubank.png';
import imageTelegram from '../../assets/images/logoTutorial/telegram.png';
import imageOlx from '../../assets/images/logoTutorial/olx.png';
import imageWhatsapp from '../../assets/images/logoTutorial/whatsapp.png';
import imageGoogleDrive from '../../assets/images/logoTutorial/google-drive.png';

import {
  Container,
  LinearGradientStyled,
  Content,
  TitleText,
  TitleSub,
} from './styles';

const AppScreen: React.FC = ({ navigation }) => {
  const app = [
    { name: 'Whatsapp', image: imageWhatsapp },
    { name: 'Gmail', image: imageGmail },
    { name: 'Telegram', image: imageTelegram },
    { name: 'Olx', image: imageOlx },
    { name: 'Nubank', image: imageNubank },
    { name: 'Drive', image: imageGoogleDrive },
  ];

  const pipHandler = useCallback((tutorial: string) => {
    // TODO inserir rota para tela de tutoriais
    // PictureInPicture.start();
    navigation.navigate('Tutorials', { tutorial });
  }, []);

  return (
    <Container>
      <LinearGradientStyled colors={theme.colors.gradientBackgroundColor}>
        <Content>
          <TitleText>Escolha um aplicativo</TitleText>
          <TitleSub>Lista de aulas</TitleSub>
          <Profile avatar={imgAvatar} profileSize="small" />
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            data={app}
            renderItem={obj => {
              return (
                <ItemCard
                  pipView={() => pipHandler(obj.item.name)}
                  text={obj.item.name}
                  image={obj.item.image}
                />
              );
            }}
          />
        </Content>
      </LinearGradientStyled>
    </Container>
  );
};

export default AppScreen;
