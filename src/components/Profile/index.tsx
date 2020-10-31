import React from 'react';

import { BoxModelGradient, Container, Avatar, GlassModel } from './styles';

import theme from '../../styles/theme';

interface PropsProfile {
  avatar: any;
  profileSize: 'small' | 'default';
}

const Profile: React.FC<PropsProfile> = ({ avatar, profileSize }) => {
  return (
    <Container>
      <BoxModelGradient
        size={profileSize}
        colors={theme.colors.gradientBackgroundColor}
      >
        <GlassModel size={profileSize}>
          <Avatar source={avatar} size={profileSize} />
        </GlassModel>
      </BoxModelGradient>
    </Container>
  );
};

export default Profile;
