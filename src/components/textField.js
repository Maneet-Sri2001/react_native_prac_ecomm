import { StyleSheet, View, TextInput, Pressable, Image } from 'react-native';
import React, {useState} from 'react';
import { moderateScale, widthPercentageToDP } from '../utils/responsiveScaling';
import { colorScheme, fonts } from '../utils/constants';

const TextField = ({ placeholder, text, setText, isPassword = false, maxLength = 25 }) => {

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <View style={styles.primaryView}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colorScheme.secondaryText}
        keyboardType="default"
        textContentType={isPassword ? 'password' : 'username'}
        maxLength={maxLength}
        style={styles.textField}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        value={text}
        enablesReturnKeyAutomatically
        onChangeText={txt => setText(txt)} />

      {isPassword ? <Pressable onPressOut={() => setPasswordVisibility(!passwordVisibility)}>
        <Image
          source={passwordVisibility ? require('../assets/images/eye_show.png') : require('../assets/images/eye_hide.png')}
          style={styles.passImg} />
      </Pressable> : null}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  primaryView: {
    width: widthPercentageToDP(80),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: colorScheme.secondaryBackground,
    borderWidth: moderateScale(1),
    borderColor: colorScheme.primary,
  },
  textField: {
    width: widthPercentageToDP(70),
    fontFamily: fonts.regular,
    fontSize: moderateScale(14),
    color: colorScheme.text,
    paddingLeft: moderateScale(15),
  },
  passImg: {
    width: moderateScale(15),
    height: moderateScale(15),
    resizeMode: 'contain',
    paddingHorizontal: moderateScale(20),
  }
});