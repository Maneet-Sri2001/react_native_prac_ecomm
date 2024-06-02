import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoardScreen from '../screens/dashboardScreen';
import ProductDetailScreen from '../screens/productDetailScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="DashBoard"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        animationTypeForReplace: 'pop',
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};