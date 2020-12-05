import {Platform, Dimensions} from 'react-native';

const Constants = {
  PLATFORM: {
    IOS: 'ios',
    ANDROID: 'android',
  },
};

const {width, height} = Dimensions.get('window');

const isIOS = () => Platform.OS === Constants.PLATFORM.IOS;

const isIphoneX = () => {
  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }
  return isIOS() && ratio >= 2.0;
};

export {isIphoneX};
