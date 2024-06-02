import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale } from '../utils/responsiveScaling';
import { colorScheme, fonts } from '../utils/constants';

const ProfileTabItem = ({ title, tabImage, itemCount }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Tab Pressed >>> ', title)}>
      <View style={[styles.primaryView, { justifyContent: itemCount === 0 ? 'flex-start' : 'space-between' }]}>
        <View style={styles.titleView}>
          <Image source={tabImage} style={styles.tabImage} />
          <Text style={styles.tabText}>{title}</Text>
        </View>
        {itemCount !== 0 ? <Text style={styles.secondText}>{itemCount}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTabItem;

const styles = StyleSheet.create({
  primaryView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(15),
    backgroundColor: colorScheme.background,
    marginHorizontal: moderateScale(20),
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: moderateScale(16),
    fontFamily: fonts.regular,
    paddingLeft: moderateScale(15),
    color: colorScheme.text,
  },
  secondText: {
    fontSize: moderateScale(12),
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(10),
    backgroundColor: colorScheme.secondaryText,
    borderRadius: moderateScale(15),
    fontFamily: fonts.regular,
    color: colorScheme.text,
  },
});
