import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

import {isIphoneX} from './platforms';

const WIDTH = 360;
const HEIGHT = 640;
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const getHorizontalPercentage = (horizontalDp, wScreen = WIDTH) =>
  `${(horizontalDp * 100) / wScreen}%`;
const getVerticalPercentage = (verticalDp, hScreen = HEIGHT) =>
  `${(verticalDp * 100) / hScreen}%`;

const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;

const deviceHeight = isIphoneX()
  ? standardLength - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === 'android'
  ? standardLength - StatusBar.currentHeight
  : standardLength;

const responsiveFontValue = (fontSize, standardScreenHeight = HEIGHT) => {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

const responsiveWidth = (dp, wScreen) =>
  widthPercentageToDP(getHorizontalPercentage(dp, wScreen));
const responsiveHeight = (dp, hScreen) =>
  heightPercentageToDP(getVerticalPercentage(dp, hScreen));
const responsiveBorderRadius = (dp, wScreen, hScreen) =>
  (responsiveWidth(dp) + responsiveHeight(dp)) / 2;

export {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
};
