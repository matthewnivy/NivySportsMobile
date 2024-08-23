import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../comman';

export const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1,
  },
  closButtonContainer: {
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('2%'),
  },
});
