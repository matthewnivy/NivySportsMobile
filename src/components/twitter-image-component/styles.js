import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {fontFamily, colors} from '../../comman';

export const styles = StyleSheet.create({
  rootContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageStyle: {
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  mainFotterContianer: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  horizontalSpacer: {
    marginHorizontal: 5,
  },
  followLabelStyle: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  heartIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIconText: {
    fontFamily: fontFamily.bold,
    marginLeft: 5,
  },
  retweetContianer: {
    flexDirection: 'row',
  },
  smallwidthStyle: {
    width: wp('2%'),
  },
  timeTextStyle: {
    fontFamily: fontFamily.bold,
    fontSize: 12,
    fontWeight: '500',
  },
  mt0: {
    marginTop: 0,
  },
  mt10: {
    marginTop: 10,
  },
  mainRetweetContainer: {
    paddingVertical: 10,
    borderBottomColor: colors.placeholderColor,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  secondaryFooterContainerTop: {
    paddingVertical: 10,
    borderBottomColor: colors.placeholderColor,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});
