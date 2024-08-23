import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

import BackIcon from '../../comman/images/backIcon.svg';
import {styles} from './styles';

const WebViewComponent = ({link, closeWebViewHandler}) => {
  const closeWebViewHandlerOff = () => closeWebViewHandler('');

  return (
    <View style={styles.webViewContainer}>
      <TouchableOpacity
        style={styles.closButtonContainer}
        onPress={closeWebViewHandlerOff}>
        <BackIcon width={60} height={50} />
      </TouchableOpacity>
      <WebView source={{uri: link}} />
    </View>
  );
};

export default WebViewComponent;
