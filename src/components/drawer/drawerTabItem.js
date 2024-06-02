import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { moderateScale } from '../../utils/responsiveScaling';
import { colorScheme, fonts } from '../../utils/constants';

const DrawerTabButton = ({currentTab, setCurrentTab, title, image}) => {

  const tabPress = () => {
    if (title === 'LogOut') {
    } else {
      setCurrentTab(title);
    }
  };

  return (
    <TouchableOpacity onPress={tabPress}>
      <View
        style={
          [style.primaryView,
          {backgroundColor: currentTab === title ? colorScheme.primary : colorScheme.transparent}]
        }>

        <Image
          source={image}
          style={
            [style.tabImage,
            {tintColor: currentTab === title ? colorScheme.white : colorScheme.accent}]
          }
        />
        <Text
          style={
            [style.tabText, {color: currentTab === title ? colorScheme.white : colorScheme.text}]
          }>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerTabButton;

const style = StyleSheet.create({
  primaryView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(8),
    paddingLeft: moderateScale(13),
    paddingRight: moderateScale(35),
    borderRadius: moderateScale(8),
    marginTop: moderateScale(15),
  },
  tabImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    paddingLeft: moderateScale(15),
    fontFamily: fonts.medium,
    color: colorScheme.text,
  },
});
