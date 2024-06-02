import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, VirtualizedList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadHomeScreen } from '../../redux/actions/homeScreen';
import { colorScheme, fonts } from '../../utils/constants';
import { moderateScale } from '../../utils/responsiveScaling';
import ProductCard from '../../components/homeScreen/productCard';
import ImageGrid from '../../components/homeScreen/imageGrid';
import { showSnackBar } from '../../utils/appUtils';

const HomeScreen = (props) => {

  const [homeScreenData, setHomeScreenData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (JSON.parse(props.homeScreenData) != null) {
      setHomeScreenData(JSON.parse(props.homeScreenData));
      props
      .loadHomeScreen()
      .then(res => {
        setHomeScreenData(res);
        setIsLoading(false);
      }).catch(err => {
        console.log(err);
      });
    } else {
      setIsLoading(true);
      props
      .loadHomeScreen()
      .then(res => {
        console.log(res);
        setHomeScreenData(res);
        setIsLoading(false);
      }).catch(err => {
        console.log(err);
      });
    }
  }, []);

  const productCardClick = (productDetail) => {
    props.navigation.navigate('ProductDetailScreen');
    console.log('Card Click > ', props);
  };

  const productCartIconClick = (productDetail) => {
    showSnackBar('Product added to card');
    console.log('Cart Icon click > ', productDetail);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <Text style={styles.text}>Smart Phone & Mobiles</Text>
        <Text style={styles.sideText}>View all</Text>
      </View>
      <FlatList
        data={homeScreenData.smartphone}
        renderItem={(data) => <ProductCard productDetail={data.item} onCartClick={productCartIconClick} onProductClick={productCardClick} />}
        horizontal={true} />
      <View style={styles.view}>
        <Text style={styles.text}>Laptops</Text>
        <Text style={styles.sideText}>View all</Text>
      </View>
      <FlatList
        data={homeScreenData.laptops}
        renderItem={(data) => <ProductCard productDetail={data.item} onCartClick={productCartIconClick} onProductClick={productCardClick} />}
        horizontal={true} />
      <View style={styles.view}>
        <Text style={styles.text}>Women Dresses</Text>
        <Text style={styles.sideText}>View all</Text>
      </View>
      <FlatList
        data={homeScreenData.women_dresses}
        renderItem={(data) => <ImageGrid productDetail={data.item} onCartClick={productCartIconClick} onProductClick={productCardClick} />}
        numColumns={2} />
      <View style={styles.view}>
        <Text style={styles.text}>Skin Care</Text>
        <Text style={styles.sideText}>View all</Text>
      </View>
      <FlatList
        data={homeScreenData.skincare}
        renderItem={(data) => <ProductCard productDetail={data.item} onCartClick={productCartIconClick} onProductClick={productCardClick} />}
        horizontal={true} />
      <View style={styles.view}>
        <Text style={styles.text}>Men Shirts</Text>
        <Text style={styles.sideText}>View all</Text>
      </View>
      <FlatList
        data={homeScreenData.men_shirt}
        renderItem={(data) => <ImageGrid productDetail={data.item} onCartClick={productCartIconClick} onProductClick={productCardClick} />}
        numColumns={2} />
      <View style={styles.view}>
        <Text style={styles.text}>Home Decorations</Text>
        <Text style={styles.sideText}>View all</Text>
      </View>
      <FlatList
        data={homeScreenData.home_decoration}
        renderItem={(data) => <ProductCard productDetail={data.item} onCartClick={productCartIconClick} onProductClick={productCardClick} />}
        horizontal={true} />
      <View style={styles.view}>
        <Text style={styles.text}>Furniture</Text>
        <Text style={styles.sideText}>View all</Text>
      </View>
      <FlatList
        data={homeScreenData.furniture}
        renderItem={(data) => <ProductCard productDetail={data.item} onCartClick={productCartIconClick} onProductClick={productCardClick} />}
        horizontal={true} />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  homeScreenData: state.homeScreen.homeScreenData,
});

const mapDispatchToProps = {
  loadHomeScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
  },
  text: {
    fontSize: moderateScale(16),
    fontFamily: fonts.medium,
    color: colorScheme.text,
  },
  sideText: {
    fontSize: moderateScale(12),
    fontFamily: fonts.medium,
    color: colorScheme.primary,
  },
  scrollView: {
    marginBottom: moderateScale(55),
  },
});
