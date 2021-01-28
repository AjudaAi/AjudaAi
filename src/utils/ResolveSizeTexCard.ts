import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface PropsSizeTextCard {
  size: 'small' | 'medium' | 'large';
}

export function resolveSizeTexCard({ size }: PropsSizeTextCard) {
  if (size === 'small') {
    return {
      height: hp('12%'),
      width: wp('80%'),
    };
  }
  if (size === 'large') {
    return {
      height: hp('28%'),
      width: wp('80%'),
    };
  }
  return {
    height: hp('14%'),
    width: wp('80%'),
  };
}
