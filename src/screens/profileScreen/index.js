import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colorScheme, fonts, screenHeight } from '../../utils/constants';
import { moderateScale } from '../../utils/responsiveScaling';
import ProfileTabItem from '../../components/profileTabItem';

const ProfileSection = () => {
  return (
    <View style={styles.primaryView}>
      <View style={styles.topView} >
        <Image source={require('../../assets/images/user.png')} style={styles.userImg} />
        <Text style={styles.userText}>Maneet Srivastav</Text>
        <Text style={styles.userSubText}>maneetsrivastav6@gmail.com</Text>
      </View>
      <View style={styles.secondView}>
        <ProfileTabItem tabImage={require('../../assets/images/user.png')} title={'Account Detail'} itemCount={0} />
        <ProfileTabItem tabImage={require('../../assets/images/order_history.png')} title={'Order History'} itemCount={5} />
        <ProfileTabItem tabImage={require('../../assets/images/saved_location.png')} title={'Saved Address'} itemCount={2} />
        <ProfileTabItem tabImage={require('../../assets/images/saved_payment.png')} title={'Payment Details'} itemCount={0} />
        <ProfileTabItem tabImage={require('../../assets/images/help.png')} title={'Help & Support'} itemCount={0} />
      </View>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  primaryView: {
    backgroundColor: colorScheme.primary,
  },
  topView: {
    height: screenHeight / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondView: {
    backgroundColor: colorScheme.white,
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
    flexGrow: 1,
    paddingVertical: moderateScale(20),
  },
  userImg: {
    width: moderateScale(100),
    height: moderateScale(100),
    resizeMode: 'stretch',
  },
  userText: {
    fontSize: moderateScale(20),
    fontFamily: fonts.medium,
    color: colorScheme.white,
    marginTop: moderateScale(10),
  },
  userSubText: {
    marginTop: moderateScale(5),
    fontFamily: fonts.regular,
    color: colorScheme.secondaryBackground,
    fontSize: moderateScale(14),
  },
});
