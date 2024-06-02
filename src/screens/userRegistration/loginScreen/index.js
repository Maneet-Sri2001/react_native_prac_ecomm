import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/login';
import PrimaryButton from '../../../components/primaryButton';
import Spacer from '../../../components/spacer';
import TextField from '../../../components/textField';
import { showSnackBar } from '../../../utils/appUtils';
import { moderateScale } from '../../../utils/responsiveScaling';
import { colorScheme, fonts } from '../../../utils/constants';


const LoginScreen = (props) => {
  const [userName, setUserName] = useState('hbingley1');
  const [password, setPassword] = useState('CQutx25i8r');

  const onBtnClick = () => {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (userName == null || userName.trim() === '') {
      showSnackBar('Username can not bt empty', true);
      return;
    }
    if (password == null || password.trim() === '') {
      showSnackBar('Password can not bt empty', true);
      return;
    }
    // if (regularExpression.test(password) === false) {
    //   snowSnackBar('Password is not valid', true);
    //   return;
    // }
    let data = {
      username: userName,
      password: password,
    };

    props
      .loginUser(data)
      .then(res => {
        showSnackBar('Login Successful');
        // props.setIsLoggedIn(true);
      })
      .catch(err => {
        let {message, request, response} = err;
        let showMsg = response.data.message + ' : ' + message;
        showSnackBar(showMsg, true);
      });

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={colorScheme.statusBar} />
      <View style={styles.view}>
        <Image source={require('../../../assets/images/appIcon.png')} style={styles.image} />
        <Text style={styles.text}>Happy to onboard you</Text>
        <Spacer height={moderateScale(40)} />
        <TextField
          placeholder={'User Name'}
          text={userName}
          setText={setUserName} />
        <Spacer height={moderateScale(15)} />
        <TextField
          placeholder={'Password'}
          text={password}
          setText={setPassword}
          isPassword={true}
          maxLength={16} />
        <Spacer height={moderateScale(20)} />
        <PrimaryButton
          title={'Submit'}
          btnPress={onBtnClick}
        />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  view: {
    backgroundColor: colorScheme.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: moderateScale(150),
    height: moderateScale(150),
    resizeMode: 'contain',
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(26),
    color: colorScheme.text,
  },
});
