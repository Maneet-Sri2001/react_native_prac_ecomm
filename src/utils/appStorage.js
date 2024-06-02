import { View, Text } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key, value) => {
  try {
    const toString = JSON.stringify(value);
    await AsyncStorage.setItem(key, toString);
    return;
  } catch (err) {
    console.log('Save Data Error > ', err);
    return;
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value === null ? {} : JSON.parse(value);
  } catch (err) {
    console.log('Save Data Error > ', err);
    return {};
  }
}

export {saveData, getData};