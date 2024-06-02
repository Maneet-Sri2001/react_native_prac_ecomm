import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { moderateScale } from '../../utils/responsiveScaling'
import { screenHeight } from '../../utils/constants'

const ImageSlider = ({images}) => {
  return (
    <View style={styles.imageCont}>
      <FlatList
      style={styles.image}
      data={[1, 2, 3, 4]}
      renderItem={() => <Image source={require('../../assets/images/cart.png')} style={styles.image} />}
      />
    </View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({
  imageCont: {
    width: '100%',
    height: moderateScale(screenHeight/3),
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(15),
  },
  image: {
    width: '100%',
    height: '100%',
    
  }
})