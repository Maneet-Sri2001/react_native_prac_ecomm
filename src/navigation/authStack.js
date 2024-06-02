import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/userRegistration/loginScreen';
import RegistrationScreen from '../screens/userRegistration/registrationScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        animationTypeForReplace: 'pop',
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="UserSetUp" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};