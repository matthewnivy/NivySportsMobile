import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../comman';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

export const styles = StyleSheet.create({
  spacer: {
    height: hp('0.5%'),
  },
  mainContainer: {
    backgroundColor: colors.white,
    padding: wp('3%'),
    borderRadius: 10,
  },
  forgotPasswordLabelStyle: {
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    fontSize: wp('4.8%'),
  },
  forgotPasswordLabelStyle: {
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    fontSize: wp('4.8%'),
  },
  enterYourPhoneNumberToResetYourPasswordLabelStyle: {
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    fontSize: wp('2.6%'),
  },
  closeContainer: {
    flexDirection: 'row-reverse',
  },
  input: {
    paddingLeft: 10,
    height: 53.74,
    borderColor: colors.borderColor,
    borderWidth: 1,
    backgroundColor: colors.backgroundColor,
  },
  errorTextContainer1: {
    width: Platform.isPad ? (WIDTH > 900 ? wp('80') : wp('80')) : wp(80),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  errorText: {
    color: colors.dangerColor,
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    fontSize: Platform.isPad ? fontSize.large : fontSize.tiny,
  },
  formikMainContainer: {
    paddingTop: hp('3%'),
  },
  firstNameText: {
    fontSize: 25,
    marginTop: 5,
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
    marginBottom: 4,
    fontFamily: fontFamily.regular,
  },
  createButton: {
    backgroundColor: colors.buttonPrimary,
    padding: 20,
    marginTop: 20,
    width: wp('84%'),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItem: 'center',
  },
  createButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fontFamily.bold,
    lineHeight: 22.04,
  },

  // Modal otp
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  textInputOTP: {
    width: wp('5%'),
  },
  phoneText: {
    fontSize: 28,
    textAlign: 'center',
  },
});
