import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontSize, fontFamily} from '../../comman';

export const styles = StyleSheet.create({
  mainModalContainer: {
    backgroundColor: colors.inputFieldBackgroundColor,
    paddingLeft: wp(3),
    width: Platform.isPad ? wp(85) : wp(85),
    height: Platform.isPad ? hp(10) : hp(10),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
  },
  modalDropDownTextStyle: {
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    paddingLeft: 3,
  },
  dropDownTextHighlightStyling: {
    color: colors.backgroundColor,
    backgroundColor: colors.buttonPrimary,
  },
  mainLabelTextIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropDownTextStyling: {
    backgroundColor: colors.inputFieldBackgroundColor,
    color: 'black',
    borderRadius: 0,
    paddingLeft: wp(3),
    fontFamily: fontFamily.regular,
    fontSize: Platform.isPad ? fontSize.big : fontSize.normal,
  },
  dropDownStyling: {
    marginTop: Platform.isPad
      ? hp(4)
      : Platform.OS === 'android'
      ? hp(0)
      : hp(3.5),
    marginLeft: wp(-3),
    backgroundColor: colors.inputFieldBackgroundColor,
    justifyContent: 'center',
    width: Platform.isPad ? wp(85) : wp(85),
    height: Platform.isPad ? hp(20) : hp(20),
  },
});
