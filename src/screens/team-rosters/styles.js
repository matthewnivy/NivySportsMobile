import {StyleSheet, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../comman';

export const styles = StyleSheet.create({
  closeButtonContainer: {
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('2%'),
  },
  container: {
    flex: 1,
  },
  dropDownStyling: {
    marginTop: Platform.isPad
      ? hp(4)
      : Platform.OS === 'android'
      ? hp(0)
      : hp(0),
    // top: 0,
    marginLeft: wp(-3),
    backgroundColor: colors.inputFieldBackgroundColor,
    justifyContent: 'center',
    width: Platform.isPad ? wp(85) : wp(85),
    height: Platform.isPad ? hp(20) : hp(45),
    borderColor: '#C6C6C6',
    borderWidth: 1,
  },
  dropDownTextHighlightStyling: {
    color: colors.backgroundColor,
    backgroundColor: colors.buttonPrimary,
  },
  dropDownTextStyling: {
    backgroundColor: colors.inputFieldBackgroundColor,
    color: 'black',
    borderRadius: 0,
    paddingLeft: wp(3),
    fontFamily: fontFamily.regular,
    fontSize: Platform.isPad ? fontSize.big : fontSize.normal,
    borderColor: '#C6C6C6',
    borderWidth: 1,
  },
  mainDropDownModalText: {
    fontFamily: fontFamily.regular,
    fontSize: Platform.isPad ? fontSize.big : fontSize.normal,
  },
  mainLabelTextIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainModalContainer: {
    backgroundColor: colors.inputFieldBackgroundColor,
    paddingLeft: wp(3),
    marginTop: Platform.isPad ? wp(2) : wp(0),
    width: Platform.isPad ? wp(85) : wp(90),
    height: Platform.isPad ? hp(10) : 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    borderColor: colors.buttonPrimary,
    borderWidth: 1,
  },
  modalDropDownTextStyle: {
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    paddingLeft: 3,
  },
  rosterMainContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingLeft: 5,
    borderColor: 'purple',
    borderWidth: 1 / 2,
  },
  flx2: {
    flex: 2,
  },
  flx1: {
    flex: 1,
  },
});
