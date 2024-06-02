import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { moderateScale } from '../../utils/responsiveScaling';
import { colorScheme, fonts, screenHeight, screenWidth } from '../../utils/constants';
import DrawerTabButton from '../../components/drawer/drawerTabItem';
import DrawerToolBar from '../../components/drawer/drawerToolBar';
import ProfileSection from '../profileScreen';
import { logoutUser } from '../../redux/actions/login';
import HomeScreen from '../homeScreen';

const DashBoardNavigation = (props) => {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(true);

  const offSetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeBtnOffSet = useRef(new Animated.Value(0)).current;

  const showDrawer = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.85,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(offSetValue, {
      // YOur Random Value...
      toValue: showMenu ? 0 : screenWidth * 0.75,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeBtnOffSet, {
      // YOur Random Value...
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };

  useEffect(() => {
    showDrawer();
    if (currentTab === 'My Account') {
      props.logoutUser({}).then(res => {
        console.log('logout >> ', res);
      }).catch(err => {
        console.log('logout err >> ', err);
      });
    }
  }, [currentTab]);

  const getCurrentScreen = () => {
    switch (currentTab) {
      case 'My Account':
        return <ProfileSection />;
        case 'Home':
        return <HomeScreen {...props} />
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorScheme.primary} />
      <View style={styles.view}>
        <Image
          source={require('../../assets/images/user.png')}
          style={styles.userImg}
        />
        <Text style={styles.userText}>Maneet Srivastav</Text>
        <TouchableOpacity>
          <Text style={styles.userSubText}>maneetsrivastav6@gmail.com</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.tabCont}>
          <DrawerTabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'Home'}
            image={require('../../assets/images/home.png')}
          />
          <DrawerTabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'My Cart'}
            image={require('../../assets/images/cart.png')}
          />
          <DrawerTabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'My Orders'}
            image={require('../../assets/images/order.png')}
          />
          <DrawerTabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'My Account'}
            image={require('../../assets/images/account.png')}
          />
          <DrawerTabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'Help'}
            image={require('../../assets/images/help.png')}
          />
        </View>

        <View>
          <DrawerTabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'LogOut'}
            image={require('../../assets/images/logout.png')}
          />
        </View>
      </View>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: showMenu ? 20 : 0,
          borderRadius: showMenu ? moderateScale(15) : 0,
          transform: [{ scale: scaleValue }, { translateX: offSetValue }],
        }}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeBtnOffSet,
              },
            ],
          }}>
          <DrawerToolBar
            title={currentTab}
            showMenu={showMenu}
            menuBtnClick={showDrawer}
          />
          {getCurrentScreen()}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme.secondaryBackground,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  view: {
    justifyContent: 'flex-start',
    padding: moderateScale(15),
  },
  userImg: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(20),
    marginTop: screenHeight / 12,
  },
  userText: {
    fontSize: moderateScale(18),
    fontFamily: fonts.medium,
    color: colorScheme.text,
    marginTop: moderateScale(10),
  },
  userSubText: {
    marginTop: moderateScale(5),
    fontFamily: fonts.regular,
    color: colorScheme.secondaryText,
    fontSize: moderateScale(14),
  },
  tabCont: {
    flexGrow: 1,
  },
  animatedView: {
    flexGrow: 1,
    backgroundColor: colorScheme.white,
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(20),
  },
  divider: {
    width: screenWidth / 1.75,
    backgroundColor: colorScheme.primary,
    height: moderateScale(2),
    marginVertical: moderateScale(30),
    borderRadius: moderateScale(10),
  },
});
