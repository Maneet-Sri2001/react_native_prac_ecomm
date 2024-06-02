/* eslint-disable prettier/prettier */
import {Dimensions, PixelRatio} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const widthPercentageToDP = widthPercent => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const scale = size => (screenWidth / guidelineBaseWidth) * size;
const verticalScale = size => (screenHeight / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {
  widthPercentageToDP,
  heightPercentageToDP,
  verticalScale,
  moderateScale,
};
