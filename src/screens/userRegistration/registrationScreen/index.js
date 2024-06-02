import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { colorScheme, fonts } from '../../../utils/constants';
import { moderateScale, widthPercentageToDP } from '../../../utils/responsiveScaling';

const UserSetUp = ({navigation}) => {
  const [userDetail, setUserDetail] = useState({
    userName: '',
    userBio: '',
    userImg: '',
  });

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      return;
    });
  }, [navigation]);

  const saveUserDetail = () => {
    if (userDetail.userName !== '') {
      console.log('User ', userDetail);
      // navigation.navigate('');
    } else {
      console.log('User Name Required');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Update Info</Text>
        <TouchableOpacity onPress={saveUserDetail}>
          <Text style={styles.topBarText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <View style={styles.imageCont}>
          <Image
            source={require('../../../assets/images/user.png')}
            style={styles.image}
          />
          <TouchableOpacity style={styles.imageBtn}>
            <Image
              source={require('../../../assets/images/add_camera.png')}
              style={styles.addIcon}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Your User Name"
          placeholderTextColor={colorScheme.secondaryText}
          keyboardType="name-phone-pad"
          textContentType="name"
          maxLength={25}
          style={styles.textField}
          value={userDetail.userName}
          onChangeText={text => setUserDetail({userName: text, userBio: userDetail.userBio})}
        />
        <TextInput
          placeholder="About yourself"
          placeholderTextColor={colorScheme.secondaryText}
          keyboardType="name-phone-pad"
          textContentType="name"
          maxLength={60}
          style={styles.textField}
          value={userDetail.userBio}
          numberOfLines={3}
          onChangeText={text => setUserDetail({ userName: userDetail.userName, userBio: text})}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserSetUp;

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  view: {
    backgroundColor: colorScheme.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: colorScheme.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarText: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    color: colorScheme.text,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(15),
  },
  image: {
    width: moderateScale(150),
    height: moderateScale(150),
    resizeMode: 'contain',
    tintColor: colorScheme.secondaryBackground,
    margin: moderateScale(10),
  },
  imageCont: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageBtn: {
    position: 'absolute',
    backgroundColor: colorScheme.statusBarBg,
    borderRadius: moderateScale(15),
    padding: moderateScale(6),
  },
  addIcon: {
    width: moderateScale(22),
    height: moderateScale(22),
    resizeMode: 'contain',
    tintColor: colorScheme.white,
  },
  textField: {
    width: widthPercentageToDP(70),
    backgroundColor: colorScheme.secondaryBackground,
    textAlign: 'center',
    borderRadius: moderateScale(10),
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    color: colorScheme.text,
    marginTop: moderateScale(30),
  },
});
