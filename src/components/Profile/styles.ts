import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface PropsAvatar {
  size?: 'small' | 'default';
}

export const Container = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

export const BoxModelGradient = styled(LinearGradient)<PropsAvatar>`
  position: relative;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;

  ${props =>
    props.size == 'small' &&
    css`
      width: 150px;
      height: 150px;
    `};
`;

export const GlassModel = styled.View<PropsAvatar>`
  width: 265px;
  height: 265px;
  background: ${props => props.theme.colors.profile};
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ${props =>
    props.size == 'small' &&
    css`
      width: 120px;
      height: 120px;
    `};
`;

export const Avatar = styled.Image<PropsAvatar>`
  width: 200px;
  height: 200px;
  border-radius: 250px;

  ${props =>
    props.size == 'small' &&
    css`
      width: 100px;
      height: 100px;
    `};
`;
