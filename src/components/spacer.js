import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colorScheme } from '../utils/constants';

const Spacer = ({height = 10}) => {
  return (
    <View style={[styles.view, {height: height}]} />
  );
};

export default Spacer;

const styles = StyleSheet.create({
  view: {
    backgroundColor: colorScheme.transparent,
  },
});
