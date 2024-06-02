import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import React from 'react';
import { moderateScale } from '../../utils/responsiveScaling';
import { colorScheme, fonts, screenWidth } from '../../utils/constants';

const DrawerToolBar = ({ title, showMenu, menuBtnClick }) => {

  return (
    <View
      style={{
        backgroundColor: colorScheme.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: showMenu ? moderateScale(10) : 0,
      }}>
      <View style={styles.view}>
        <TouchableOpacity onPress={menuBtnClick}>
          <Image
            source={
              !showMenu
                ? require('../../assets/images/menu.png')
                : require('../../assets/images/back.png')
            }
            style={styles.iconMenu}
          />
        </TouchableOpacity>
        {title === 'Home' ? <TouchableOpacity>
          <TextInput
            placeholder="Search"
            placeholderTextColor={colorScheme.text}
            style={styles.textInput}
            editable={false} />
        </TouchableOpacity> : <Text style={styles.title}>{title}</Text>}
      </View>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/notification.png')}
          style={styles.sideIconMenu}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerToolBar;

const styles = StyleSheet.create({
  contView: {
    backgroundColor: colorScheme.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(18),
    fontFamily: fonts.medium,
    paddingLeft: moderateScale(15),
  },
  iconMenu: {
    width: moderateScale(30),
    height: moderateScale(30),
    resizeMode: 'contain',
    marginLeft: moderateScale(15),
    tintColor: colorScheme.secondaryBackground,
  },
  sideIconMenu: {
    width: moderateScale(25),
    height: moderateScale(25),
    resizeMode: 'contain',
    marginRight: moderateScale(15),
    tintColor: colorScheme.secondaryBackground,
  },
  textInput: {
    backgroundColor: colorScheme.secondaryBackground,
    height: moderateScale(30),
    width: screenWidth * 0.7,
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(20),
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    paddingLeft: moderateScale(15),
    paddingVertical: moderateScale(3),
  },
});
