import {StyleSheet, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../comman';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerKeyboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  topLevelContainer: {
    marginHorizontal: 10,
  },
  mainTopContainer: {
    backgroundColor: '#592B81',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('3%'),
    width: wp('100%'),
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  mainProfileNameText: {
    color: 'white',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 5,
    fontFamily: fontFamily.regular,
  },
  profileText: {
    color: 'white',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    marginVertical: 5,
  },
  orTextStyle: {
    fontFamily: fontFamily.regular,
    color: colors.inActiveColor,
    fontSize: fontSize.xsmall,
    fontWeight: '500',
  },
  loginContainer: {
    marginLeft: 9,
    marginTop: 15,
  },
  loginText: {
    color: '#592B81',
    textAlign: 'left', // <-- the magic
    fontWeight: '600',
    fontSize: fontSize.h5,
    fontFamily: fontFamily.regular,
  },
  phoneNumberContainer: {
    marginTop: 20,
    marginBottom: 4,
    marginHorizontal: 10,
  },
  passwordContainer: {
    marginTop: 20,
    marginBottom: 4,
    marginHorizontal: 10,
  },
  passwordText: {
    marginTop: 5,
    fontSize: fontSize.xsmall,
    color: 'black',
    fontWeight: '500',
    marginBottom: 0,
    fontFamily: fontFamily.regular,
  },
  phoneNumberText: {
    fontSize: 25,
    marginTop: 5,
    fontSize: fontSize.xsmall,
    color: 'black',
    fontWeight: '500',
    marginBottom: 0,
    fontFamily: fontFamily.regular,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  image: {
    height: 80,
    width: 80,
    maarginTop: 20,
  },
  text: {
    fontSize: 12,
    color: 'black',
    fontWeight: '100',
    marginLeft: 10,
    marginBottom: 0,
  },
  input: {
    marginHorizontal: 10,
    height: 53.74,
    borderColor: '#C6C6C6',
    borderWidth: 1,
    backgroundColor: '#F9F9F9',
    paddingLeft: 10,
    fontFamily: fontFamily.regular,
  },
  submitButton: {
    backgroundColor: colors.buttonPrimary,
    padding: 20,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  createButton: {
    backgroundColor: 'white',
    padding: 12,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#592B81',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: wp('4%'),
    fontWeight: '500',
    lineHeight: 22.04,
    fontFamily: fontFamily.regular,
  },
  orContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  createButtonText: {
    color: '#592B81',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.04,
    fontFamily: fontFamily.regular,
  },
  errorTextContainer: {
    width: Platform.isPad ? (WIDTH > 900 ? wp('80') : wp('80')) : wp(80),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: wp(3),
  },
  errorText: {
    color: colors.dangerColor,
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    fontSize: Platform.isPad ? fontSize.large : fontSize.tiny,
  },
  imageLogoStyle: {
    height: hp('22%'),
    width: wp('50%'),
  },
  topImageContainer: {
    alignSelf: 'center',
    marginVertical: hp('1%'),
  },
  forgotLinkStyleContainer: {
    alignItems: 'flex-end',
    marginHorizontal: wp('3%'),
  },
  forgotLinkText: {
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    fontSize: wp('3.7%'),
  },
});
