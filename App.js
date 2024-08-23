import React from 'react';
import {StatusBar, StyleSheet, View, SafeAreaView, Alert} from 'react-native';
import {colors} from './src/comman';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

import SplashScreen from 'react-native-splash-screen';
import {ContextProvider} from './src/context-api/ContextProvider';
import RootNavigation from './src/navigation';
import {setFcmTokenDetails} from './src/utils/preferences/localStorage';
import {addCustomerDeviceIdApi} from './src/utils/rest-apis';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  console.disableYellowBox = true;

  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
  return (
    <ContextProvider>
      <MyStatusBar
        backgroundColor={colors.buttonPrimary}
        barStyle="light-content"
      />
      <RootNavigation />
    </ContextProvider>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: colors.buttonPrimary,
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: colors.buttonPrimary,
  },
});

export default App;
