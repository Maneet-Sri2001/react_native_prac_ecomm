import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale } from '../../utils/responsiveScaling';
import { colorScheme, screenWidth } from '../../utils/constants';

const ImageGrid = ({ productDetail, onProductClick }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onProductClick}>
      <View style={styles.card}>
        <Image source={{ uri: productDetail.thumbnail }} style={styles.productImg} />
      </View>
    </TouchableOpacity>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  card: {
    elevation: moderateScale(2),
    backgroundColor: colorScheme.white,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 2.1,
    padding: moderateScale(5),
    marginVertical: moderateScale(4),
    marginHorizontal: moderateScale(5),
  },
  productImg: {
    width: screenWidth / 2.25,
    height: screenWidth / 2.25,
    resizeMode: 'contain',
    backgroundColor: colorScheme.background,
    borderRadius: moderateScale(5),
  },
});
