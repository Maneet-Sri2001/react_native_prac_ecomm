import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale } from '../../utils/responsiveScaling';
import { colorScheme, fonts, screenWidth } from '../../utils/constants';

const ProductCard = ({ productDetail, onCartClick, onProductClick }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onProductClick(productDetail)}>
      <View style={styles.card}>
        <Image source={{ uri: productDetail.thumbnail }} style={styles.productImg} />
        <Text style={styles.productTitle} numberOfLines={1}>{productDetail.title}</Text>
        <View style={styles.bottomView}>
          <Text style={styles.priceText}>₹ {productDetail.price}</Text>
          <TouchableOpacity onPress={() => onCartClick(productDetail)} activeOpacity={0.8}>
            <View style={styles.cartIcon}>
              <Image source={require('../../assets/images/cart.png')} style={styles.cart} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    elevation: moderateScale(5),
    backgroundColor: colorScheme.white,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 2.1,
    padding: moderateScale(5),
    marginVertical: moderateScale(8),
    marginHorizontal: moderateScale(5),
  },
  productImg: {
    width: screenWidth / 2.25,
    height: screenWidth / 2.25,
    resizeMode: 'contain',
    backgroundColor: colorScheme.background,
    borderRadius: moderateScale(5),
  },
  productTitle: {
    fontFamily: fonts.regular,
    color: colorScheme.text,
    fontSize: moderateScale(16),
    paddingVertical: moderateScale(8),
  },
  bottomView: {
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  priceText: {
    fontFamily: fonts.medium,
    color: colorScheme.secondaryText,
    fontSize: moderateScale(14),
    paddingVertical: moderateScale(8),
  },
  cartIcon: {
    elevation: moderateScale(2),
    backgroundColor: colorScheme.background,
    borderRadius: moderateScale(20),
    padding: moderateScale(8),
  },
  cart: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
    tintColor: colorScheme.primary,
  },
});
