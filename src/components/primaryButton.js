import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { moderateScale, widthPercentageToDP } from '../utils/responsiveScaling';
import { colorScheme, fonts } from '../utils/constants';

const PrimaryButton = ({title, btnPress}) => {
  return (
    <TouchableOpacity onPress={btnPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: widthPercentageToDP(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    backgroundColor: colorScheme.primary,
    marginVertical: moderateScale(20),
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(14),
    color: colorScheme.white,
    paddingVertical: moderateScale(12),
  },
});
