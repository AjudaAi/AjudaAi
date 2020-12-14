import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { BoxModelGradient, Container,Block, Avatar, GlassModel, IconApp } from './styles';

import theme from '../../styles/theme';

interface PropsProfile {
  avatar: ImageSourcePropType;
  profileSize: 'small' | 'default';
  iconImage?: ImageSourcePropType;
}

const Profile: React.FC<PropsProfile> = ({ avatar, profileSize, iconImage }) => {
  return (
    <Container>
      <BoxModelGradient
        size={profileSize}
        colors={theme.colors.gradientBackgroundColor}
      >
        <GlassModel size={profileSize}>
          <Avatar source={avatar} size={profileSize} />
          <Block>
            <IconApp source={iconImage} />
          </Block>
        </GlassModel>
      </BoxModelGradient>
    </Container>
  );
};

export default Profile;
