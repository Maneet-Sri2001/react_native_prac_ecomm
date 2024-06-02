import { Dimensions, StatusBar } from 'react-native';

export const bottombarHeight =
  Dimensions.get('screen').height == Dimensions.get('window').height
    ? Dimensions.get('screen').height -
    Dimensions.get('window').height +
    StatusBar.currentHeight
    : StatusBar.currentHeight;

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const colorScheme = {
  primary: '#FF5A5F',
  secondary: '#FF94A1',
  gradient: ['#FF5A5F', '#FF94A1'],
  background: '#F5F5F5',
  secondaryBackground: '#FFEBEE',
  text: '#333333',
  secondaryText: '#888888',
  accent: '#333333',
  successBg: '#C8E6C9',
  successText: '#4CAF50',
  errorBackground : '#FFEBEE',
  errorText: '#FF5A5F',
  statusBarText: '#FFFFFF',
  statusBarBg: '#FF5A5F',
  link: '#FF94A1',
  white: '#FFFFFF',
  transparent: 'transparent',
};

export const fonts = {
  regular: 'Livvic-Medium',
  bold: 'Livvic-Bold',
  medium: 'Livvic-SemiBold',
  thin: 'Livvic-Regular',
};
