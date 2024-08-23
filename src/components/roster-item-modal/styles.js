import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../comman';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

export const styles = StyleSheet.create({
  spacer: {
    width: wp('5.5%'),
  },
  spacer2: {
    width: wp('1.5%'),
  },
  spacer3: {
    height: hp('3%'),
  },
  mainContainer: {
    backgroundColor: colors.white,
    padding: wp('3%'),
    borderRadius: 10,
  },
  imageIcon1: {
    height: hp('5.7%'),
    width: wp('14.9%'),
    overflow: 'visible',
  },
  mainInnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifyMeIcon: {
    height: hp('7%'),
    width: wp('25%'),
    resizeMode: 'contain',
  },
  imagesContainerHorizontal: {
    flexDirection: 'row',
    marginHorizontal: wp('40%'),
  },
  titleContainer: {
    marginVertical: hp('2.5%'),
  },
  titleText: {
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    fontSize: wp('3.2%'),
    color: colors.greySmall,
  },
  teamsContainer: {
    flexDirection: 'row',
    marginTop: hp('1.2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText2: {
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    fontSize: wp('4.3%'),
  },
  headingText3: {
    fontFamily: fontFamily.regular,
    fontWeight: '700',
    fontSize: wp('5.3%'),
  },
  vsTextStyle: {
    fontFamily: fontFamily.bold,
    fontWeight: '700',
    fontSize: wp('3.8%'),
    marginHorizontal: wp('1.2%'),
  },
  closeContainer: {
    flexDirection: 'row-reverse',
  },
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 11,
    shadowColor: colors.balack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 12,
    backgroundColor: colors.white,
    padding: wp('3%'),
    paddingHorizontal: wp('9%'),
  },
  heightSpacer: {
    height: hp('2%'),
  },
  textItemStyle: {
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    fontSize: wp('2.7%'),
  },
  buttonStyle: {
    backgroundColor: colors.buttonPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: wp('80%'),
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22.04,
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
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
  },
  modalButtons: {
    borderRadius: 10,
    borderWidth: 0,
    padding: 5,
    marginEnd: wp('5%'),
    borderColor: colors.buttonPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rosterDetailsImageStyle: {
    height: 200,
    width: 125,
  },
});
