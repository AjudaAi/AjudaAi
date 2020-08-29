import React from 'react';

import { BoxModelGradient, Container, Avatar, GlassModel } from './styles';

import avatar from '../../assets/images/ola.png';
import theme from '../../styles/theme';

const Profile: React.FC = () => {
  return (
    <Container>
      <BoxModelGradient colors={theme.colors.gradientBackgroundColor}>
        <GlassModel>
          <Avatar source={avatar}/>
        </GlassModel>
      </BoxModelGradient>
    </Container>
  );
}

export default Profile;