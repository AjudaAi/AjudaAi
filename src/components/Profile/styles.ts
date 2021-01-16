import { ImageSourcePropType } from 'react-native';
import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface PropsAvatar {
  size?: 'small' | 'default';
  icon?: ImageSourcePropType;
}

export const Container = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 30px 0 40px 0;
`;

export const BoxModelGradient = styled(LinearGradient)<PropsAvatar>`
  position: relative;
  width: 280px;
  height: 280px;
  /* height: ${hp('39%')};
  width: ${wp('63.7%')}; */
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
  position: relative;
  width: 245px;
  height: 245px;
  /* height: ${hp('34%')};
  width: ${wp('55%')}; */
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
  position: relative;
  width: 190px;
  height: 190px;
  /* height: ${hp('29%')};
  width: ${wp('45%')}; */
  border-radius: 250px;

  ${props =>
    props.size == 'small' &&
    css`
      width: 100px;
      height: 100px;
    `};
`;

export const Block = styled.View`
  position: absolute;
  bottom: 0;
  right: 0%;
  width: 100%;
  height: 100%;
`;

export const IconApp = styled.Image<PropsAvatar>`
  position: absolute;
  right: -17px;
  bottom: -15px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
