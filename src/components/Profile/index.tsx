import React from 'react';

import { BoxModelGradient, Container, Avatar, GlassModel } from './styles';

import theme from '../../styles/theme';

interface PropsImages {
  avatar: any;
}

const Profile: React.FC<PropsImages> = ({ avatar }) => {
  return (
    <Container>
      <BoxModelGradient colors={theme.colors.gradientBackgroundColor}>
        <GlassModel>
          <Avatar source={avatar} />
        </GlassModel>
      </BoxModelGradient>
    </Container>
  );
}

export default Profile;
