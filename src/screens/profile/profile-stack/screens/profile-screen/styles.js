import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../../../../comman';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  containerCheckBoxesMain: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  mainInputContainer: {
    marginTop: 20,
    marginBottom: 0,
  },
  inputMainContainer: {
    marginTop: 20,
    marginBottom: 0,
    marginHorizontal: 15,
  },
  containerTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTopStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
  },
  backArrowStyle: {
    height: 25,
    width: 25,
  },
  mainTopContainer: {
    backgroundColor: colors.buttonPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('3%'),
    width: wp('100%'),
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  profileText: {
    color: 'white',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 5,
    fontFamily: fontFamily.regular,
  },
  firstNameContainer: {
    marginTop: 20,
  },
  firstNameText: {
    fontSize: 25,
    marginTop: 5,
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginBottom: 4,
    fontFamily: fontFamily.regular,
  },
  profileNameText: {
    color: 'white',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: wp('4%'),
    fontWeight: '600',
    // marginVertical: 5,
    marginTop: 10,
    fontFamily: fontFamily.regular,
  },
  heightspacer: {
    height: hp('2%'),
  },
  mainCheckBoxStyle: {
    width: Platform.isPad ? 24 : 18,
    height: Platform.isPad ? 24 : 18,
    padding: 2,
    marginTop: Platform.isPad ? 4 : 0,
  },
  checkboxInnerText: {
    marginLeft: wp('2%'),
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    fontSize: fontSize.xsmall,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.borderColor,
  },
  image: {
    height: 80,
    width: 80,
  },
  text: {
    fontSize: 12,
    color: 'black',
    fontWeight: '100',
    marginLeft: 10,
    marginBottom: 0,
  },
  checkOneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginVertical: 10,
  },
  checkBoxContainer1: {
    backgroundColor: colors.backgroundColor,
    padding: 0,
    borderWidth: 0,
    height: 10,
    marginLeft: Platform.isPad ? 0 : wp(8),
  },
  input: {
    paddingLeft: 10,
    height: 53.74,
    borderColor: colors.borderColor,
    borderWidth: 1,
    backgroundColor: colors.backgroundColor,
  },
  input2: {
    paddingLeft: 10,
    height: 53.74,
    borderColor: colors.borderColor,
    borderWidth: 1,
    backgroundColor: colors.backgroundColor,
    width: wp('38%'),
  },
  firstMainContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  spacer: {
    width: '15%',
    paddingHorizontal: 5,
  },
  submitButton: {
    backgroundColor: '#592B81',
    padding: 10,
    margin: 10,
    height: 40,
    borderRadius: 5,
  },
  createButton: {
    backgroundColor: 'white',
    height: 48,
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButton2: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  createButtonText: {
    color: colors.inActiveColor,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    lineHeight: 22.04,
  },
  createButtonText2: {
    color: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    lineHeight: 22.04,
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
    marginLeft: wp(-3),
    backgroundColor: colors.inputFieldBackgroundColor,
    justifyContent: 'center',
    width: Platform.isPad ? wp(85) : wp(85),
    height: Platform.isPad ? hp(20) : hp(20),
    borderColor: '#C6C6C6',
    borderWidth: 1,
  },
  iamMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 25,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  spacerH5: {
    width: wp('5%'),
  },
  iamLabelStyle: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  logoutIconStyle: {
    width: 19,
    height: 18,
  },
});
