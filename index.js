/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {LogLevel, OneSignal} from 'react-native-onesignal';

import {name as appName} from './app.json';
import App from './App';

// Remove this method to stop OneSignal Debugging
OneSignal.Debug.setLogLevel(LogLevel.Verbose);

// OneSignal Initialization
OneSignal.initialize('5bd8546b-0afe-4126-9e43-17c17d118f61');

// requestPermission will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission
OneSignal.Notifications.requestPermission(true);

// Method for listening for notification clicks
OneSignal.Notifications.addEventListener('click', event => {
  console.log('OneSignal: notification clicked:', event);
});

AppRegistry.registerComponent(appName, () => App);
