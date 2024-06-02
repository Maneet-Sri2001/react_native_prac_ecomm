import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageSlider from '../../components/productDetail/imageSlider'

const ProductDetailScreen = () => {
  return (
    <View style={styles.primaryView}>
      <ImageSlider />
      <Text>ProductDetailScreen</Text>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  primaryView: {
    flexDirection: 'column',
    flex: 1,
  },
});
