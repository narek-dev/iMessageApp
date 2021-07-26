import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'save_token';

// SAVE DATA
export const saveData = async token => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, token + '');
  } catch (e) {
    alert('Failed to save the data to the storage');
  }
};

// READ DATA
export const readData = async () => {
  let result = null;
  try {
    const userToken = await AsyncStorage.getItem(STORAGE_KEY);
    if (userToken !== null) {
      result = userToken;
    }
  } catch (e) {
    alert('Failed to fetch the data from storage');
  }
  return new Promise( res => res(result));
};

// REMOVE DATA
export const removeData = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    alert('Failed to remove token');
  }
}
