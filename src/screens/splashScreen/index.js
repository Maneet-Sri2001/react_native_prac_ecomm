import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { moderateScale } from '../../utils/responsiveScaling';
import { fonts, colorScheme } from '../../utils/constants';

const SplashScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      if (props.isLoggedIn) {
        props.navigation.navigate('AppStack');
      } else {
        props.navigation.navigate('AuthStack');
      }
    }, 1000);
  });
  
  return (
    <View style={styles.primaryView}>
      <StatusBar backgroundColor={colorScheme.primary} />
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userAuth.isLoggedIn,
});

export default connect(mapStateToProps, null)(SplashScreen);

const styles = StyleSheet.create({
  primaryView: {
    backgroundColor: colorScheme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(22),
    color: colorScheme.white,
  }
});