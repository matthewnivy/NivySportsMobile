import {Platform} from 'react-native';
import DefaultPreference from 'react-native-default-preference';

if (Platform.OS === 'android') DefaultPreference.setName('NativeStorage');

export const storeValue = async (key, value) => {
  try {
    await DefaultPreference.set(key, value.toString());
    return true;
  } catch (e) {
    return false;
  }
};

export const clearStoreValue = async key => {
  try {
    await DefaultPreference.clearAll();
    return true;
  } catch (e) {
    return false;
  }
};

export const storeObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await DefaultPreference.set(key, jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};

export const getValue = async key => {
  try {
    const value = await DefaultPreference.get(key);
    if (value !== null) {
      return {
        value: value,
        error: null,
      };
    } else {
      return {
        value: null,
        error: 'Not Found',
      };
    }
  } catch (e) {
    return {
      value: null,
      error: 'Exception' + e,
    };
  }
};

export const getObject = async key => {
  try {
    const jsonValue = await DefaultPreference.get(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
