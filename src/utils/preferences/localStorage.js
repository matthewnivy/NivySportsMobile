import {PreferencesKeys} from './preferencesKeys';
import {storeValue, getValue} from './asyncStoragePreferences';

export const getLogionSessionDetails = async () => {
  let authToken = await getValue(PreferencesKeys.authToken);
  return {
    authToken: authToken.value || '',
  };
};
export const setLogionSessionDetails = async value => {
  await storeValue(PreferencesKeys.authToken, value);
};

export const getAuthTokenDetails = async () => {
  let authToken = await getValue(PreferencesKeys.authToken);
  let bearerToken = authToken.value || '';
  return bearerToken;
};

export const setFcmTokenDetails = async value => {
  await storeValue(PreferencesKeys.fcmToken, value);
};

export const getFcmTokenDetails = async () => {
  let fcmToken = await getValue(PreferencesKeys.fcmToken);
  let bearerToken = fcmToken.value || '';
  return bearerToken;
};

export const removeLoginSessionDetails = async () => {
  await storeValue(PreferencesKeys.authToken, '');
  await setFcmTokenDetails(PreferencesKeys.fcmToken, '');
};
