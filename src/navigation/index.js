import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './appStack';
import AuthStack from './authStack';
import SplashScreen from '../screens/splashScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          animationTypeForReplace: 'pop',
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='AuthStack' component={AuthStack} />
        <Stack.Screen name='AppStack' component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}