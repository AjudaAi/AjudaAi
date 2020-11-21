import {
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

interface PropsSizeTextCard {
  size: 'small' | 'medium' | 'large';
}

export function resolveSizeTexCard({ size }: PropsSizeTextCard) {
  if(size === 'small') {
    return {
      height: hp('12%'),
      width: wp('80%')
    } 
  } else if(size === 'large') {
    return {
      height: hp('28%'),
      width: wp('80%')
    }
  } else {
    return {
      height: hp('18%'),
      width: wp('80%')
    }
  }
}