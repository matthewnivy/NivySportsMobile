import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../comman';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: colors.buttonPrimary,
    height: APPBAR_HEIGHT,
  },
});
