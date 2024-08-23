import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

import BackIcon from '../../comman/images/backIcon.svg';

import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import {colors} from '../../comman';

const WebViewStack = () => {
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const urlLink = route?.params?.urlLink;
  const closeWebViewHandler = route?.params?.closeWebViewHandler;
  console.log('route', route);
  useEffect(() => {
    // Ensure urlLink is defined before calling showLoadingIndicator
    if (urlLink) {
        setLoading(false);
    }
  }, [urlLink]);
  return (
    <SafeAreaView style={styles.webViewContainer}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={40} color={colors.buttonPrimary} />
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.closButtonContainer}
            onPress={closeWebViewHandler}>
            <BackIcon width={60} height={50} />
          </TouchableOpacity>
          <WebView source={{uri: urlLink}} />
        </>
      )}
    </SafeAreaView>
  );
};

export default WebViewStack;
