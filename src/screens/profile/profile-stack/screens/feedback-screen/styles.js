import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../../../../comman';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  topImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  backButtonStyle: {
    alignSelf: 'flex-end',
  },
  backArrowStyle: {
    height: 25,
    width: 25,
    marginBottom: 2,
  },
  headingTextHeader: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: hp('2.39%'),
    textTransform: 'capitalize',
    color: colors.buttonPrimary,
  },
  lastContainerTop: {
    width: wp('5%'),
  },
  mainLabelTextIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainDropDownModalText: {
    fontFamily: fontFamily.regular,
    fontSize: Platform.isPad ? fontSize.big : fontSize.normal,
  },
  mainModalContainer: {
    backgroundColor: colors.inputFieldBackgroundColor,
    paddingLeft: wp(3),
    marginTop: Platform.isPad ? wp(2) : wp(0),
    width: Platform.isPad ? wp(85) : wp(90),
    height: Platform.isPad ? hp(10) : 53.74,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    borderColor: '#C6C6C6',
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
    borderColor: '#C6C6C6',
    borderWidth: 1,
  },
  dropDownStyling: {
    marginTop: Platform.isPad
      ? hp(4)
      : Platform.OS === 'android'
      ? hp(0)
      : hp(3.5),
    // top: 0,
    marginLeft: wp(-3),
    backgroundColor: colors.inputFieldBackgroundColor,
    justifyContent: 'center',
    width: Platform.isPad ? wp(85) : wp(85),
    height: Platform.isPad ? hp(20) : hp(20),
    borderColor: '#C6C6C6',
    borderWidth: 1,
  },
  mainContentContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    paddingLeft: 10,
    height: 53.74,
    borderColor: colors.borderColor,
    borderWidth: 1,
    backgroundColor: colors.backgroundColor,
    borderRadius: 5,
  },
  textAreaInput: {
    paddingLeft: 10,
    height: 156.33,
    borderColor: colors.borderColor,
    borderWidth: 1,
    backgroundColor: colors.backgroundColor,
    borderRadius: 5,
  },
  errorTextContainer1: {
    width: Platform.isPad ? (WIDTH > 900 ? wp('80') : wp('80')) : wp(80),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  errorTextContainer2: {
    width: Platform.isPad ? (WIDTH > 900 ? wp('80') : wp('80')) : wp(80),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: wp(5),
  },
  errorTextContainer: {
    width: Platform.isPad ? (WIDTH > 900 ? wp('80') : wp('80')) : wp(30),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  errorText: {
    color: colors.dangerColor,
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    fontSize: Platform.isPad ? fontSize.large : fontSize.tiny,
  },
  labelText: {
    fontSize: 25,
    marginTop: 5,
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginBottom: 4,
    fontFamily: fontFamily.regular,
  },
  submitButtonStyle: {
    backgroundColor: colors.buttonPrimary,
    marginHorizontal: 20,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  bottomContainerText: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  scrollViewStyle: {
    flex: 1,
  },
});
