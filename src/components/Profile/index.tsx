import React from 'react';

import { BoxModelGradient, Container,Block, Avatar, GlassModel, IconApp } from './styles';

import theme from '../../styles/theme';

interface PropsProfile {
  avatar: any;
  profileSize: 'small' | 'default';
  iconImage?: any;
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
