import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../comman';

export const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1,
  },
  scrollContainerStyle: {
    flexGrow: 1,
  },
  scrollInnerContainerStyle: {
    flex: 1,
  },
  closButtonContainer: {
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('2%'),
  },
  topImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 18,
    paddingTop: 23,
    backgroundColor: colors.buttonPrimary,
  },
  lastContainerTop: {
    width: wp('5%'),
  },
  secondaryImageContainer: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    justifyContent: 'space-between',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  spacerH5: {
    width: 10,
  },
  schedualLabelStyle: {
    fontSize: fontSize.xsmall,
    fontFamily: fontFamily.regular,
    fontWeight: '600',
    marginLeft: 5,
    color: '#000',
    textTransform: 'capitalize',
  },
  schedualLabelStyle2: {
    fontSize: fontSize.xsmall,
    fontFamily: fontFamily.regular,
    fontWeight: '600',
    marginLeft: 5,
    color: '#fff',
    textTransform: 'capitalize',
  },

  schedualButtonStyle: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  schedualButtonStyle2: {
    flexDirection: 'row',
    backgroundColor: '#592B81',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  spacerContainerButton: {
    width: wp('2%'),
  },
  backButtonStyle: {
    alignSelf: 'flex-end',
    width: wp('5%'),
  },
  backArrowStyle: {
    height: 25,
    width: 25,
    marginBottom: 2,
  },

  image: {
    height: 120,
    width: 120,
  },
  imageIcon1: {
    height: 45,
    width: 45,
    flexShrink: 0,
    alignSelf: 'center',
  },
  imageIcons: {
    height: 40,
    width: 40,
    flexShrink: 0,
    right: 28,
  },
  vsTextStyleContainer: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
  },
  imagesContainerHorizontal: {
    paddingVertical: 10,
    backgroundColor: colors.buttonPrimary,
    width: wp('100%'),
  },
  thirdContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headingText: {
    fontSize: hp(2.4),
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  headingText2: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.regular,
    fontWeight: '600',
  },
  headingText3: {
    fontSize: fontSize.xsmall,
    fontFamily: fontFamily.black,
    fontWeight: '600',
    color: colors.white,
    flexWrap: 'wrap',
  },
  opponentHeadingText3: {
    fontSize: fontSize.xsmall,
    fontFamily: fontFamily.black,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.white,
    flexWrap: 'wrap',
  },

  titleTextEvent: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    color: colors.black,
  },
  titleTextDateEvent: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '600',
    color: colors.black,
  },
  locationTextEvent: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    color: colors.black,
    textTransform: 'capitalize',
  },
  titleTextNameEvent: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.regular,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: '#636363',
  },
  titleTextEvent2: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.black,
  },
  spacerVertical: {
    height: hp('1%'),
  },
  spacerVertical2: {
    height: hp('2.5%'),
  },
  titleTextNameSchedualEvent: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.regular,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: '#636363',
  },
  titleTextSchedualEvent2: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.black,
  },
  containerText: {
    flexDirection: 'row',
  },
  secondaryContainerEvent: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  secondaryContainerSchedualEvent: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  locationContainer: {
    width: wp('50%'),
  },
  locationTextSchedualEvent: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    color: colors.black,
    textTransform: 'capitalize',
  },
  gameResultTextSchedualEvent: {
    fontSize: fontSize.big,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    color: colors.black,
    textTransform: 'capitalize',
  },
  historySchedualButton: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 4,
    alignSelf: 'flex-end',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historySchedualText: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.black,
  },
  mainEventTextContainer: {
    marginLeft: wp('4%'),
    justifyContent: 'center',
  },
  headingTextHeader: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: colors.white,
  },
  topContainerText: {
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 9.44,
    textAlign: 'right',
  },
  buttonItem: {
    width: wp('90%'),
    backgroundColor: colors.white,
    margin: 5,
    elevation: 11,
    shadowColor: colors.balack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 12,
  },
  imageContaierEspn: {
    paddingVertical: 7,
  },
  imageEventSmallStyle2: {
    width: 60,
    height: 14,
    flexShrink: 0,
  },
  imageEventStyle2: {
    height: hp('20%'),
    width: wp('50%'),
  },
  buttonItemHorizontal: {
    padding: 10,
    backgroundColor: colors.white,
    margin: 5,
    borderRadius: 10,
  },
  mainHorizontalUpperContainer: {
    flexDirection: 'row',
  },
  spacerTopContainer: {
    width: wp('5%'),
  },
  historyText: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.black,
  },
  historyButton: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 4,
    alignSelf: 'flex-end',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  arrowImageStyle: {
    marginRight: 20,
    height: 20,
    width: 20,
  },

  backRosterImageStyle: {
    height: 25,
    width: 25,
  },
  topImageEventContainer: {
    flexDirection: 'row',
  },
  topEventNewsContainer: {
    paddingHorizontal: 10,
  },
  image: {
    height: 120,
    width: 120,
  },

  secondContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  spacerTopSecondaryContainer: {
    height: 20,
  },
  thirdContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headingText: {
    fontSize: hp(2.4),
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  headingText2: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.regular,
    fontWeight: '600',
  },
  titleTextEvent: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    color: colors.buttonPrimary,
  },
  titleTextEvent2: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: colors.greyishColor,
  },
  titleTextFooter: {
    fontSize: fontSize.xxtiny,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: colors.greyishColor,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10, // Half of the width and height to create a perfect circle
    backgroundColor: '#592B81',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: colors.white, // You can adjust the text color as needed
    fontSize: fontSize.xxtiny,
    fontWeight: '600',
    fontFamily: fontFamily.regular,
  },
  titleTextName: {
    color: colors.buttonPrimary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.xsmall,
    fontWeight: '600',
  },
  detailsContainer: {
    width: wp('58%'),
  },
  acadamicLabelStyle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xxtiny,
    colors: colors.greyColorSmall,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  mainEventTextContainer: {
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 10,
    marginLeft: 8,
  },
  topContainerText: {
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 9.44,
    textAlign: 'right',
  },
  containerSchedualText: {
    flexDirection: 'row',
  },
  mainEventTextSchedualContainer: {
    marginLeft: wp('4%'),
  },
  titleTextDateSchedualEvent: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '600',
    color: colors.black,
  },
  titleTextSchedualEvent: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    color: colors.black,
  },
  imageContaierSchedualEspn: {
    paddingVertical: 7,
  },
  imageEventSmallSchedualStyle2: {
    width: 60,
    height: 14,
    flexShrink: 0,
  },
  buttonSchedualItem: {
    width: wp('90%'),
    backgroundColor: colors.white,
    margin: 5,
    elevation: 11,
    shadowColor: colors.balack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 12,
  },
  imageContainer: {
    marginTop: 7,
    marginLeft: 8,
  },
  newsImageEventStyle: {
    height: 200,
    width: wp('80%'),
    borderRadius: Platform.OS === 'android' ? 3 : 10,
  },
  imageEventStyle: {
    height: 80,
    width: 80,
    borderRadius: Platform.OS === 'android' ? 3 : 10,
  },
  imageEventStyle2: {
    height: hp('20%'),
    width: wp('50%'),
  },

  imageEventSchadualStyle: {
    height: 100,
    width: 100,
    marginLeft: 10,
    backgroundColor: colors.white,
  },
  buttonItemHorizontal: {
    padding: 10,
    backgroundColor: colors.white,
    margin: 5,
    borderRadius: 10,
  },
  mainHorizontalUpperContainer: {
    flexDirection: 'row',
  },
  spacerTopContainer: {
    width: wp('5%'),
  },
  rightContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  arrowImageStyle: {
    height: 20,
    width: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'green',
    fontSize: 20,
    fontFamily: fontFamily.bold,
    fontWeight: 'bold',
  },
  topImageEventSchedualContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  titleTextNameSchedualEventContainer: {
    width: wp('60%'),
  },
  descriptionContainer: {
    width: wp('80%'),
  },
  headerContainer: {
    backgroundColor: '#592B81',
  },

  // Styles from modal

  spacer: {
    width: wp('5.5%'),
  },
  spacer2: {
    width: wp('12.5%'),
  },
  spacer3: {
    height: hp('3%'),
  },
  mainContainer: {
    backgroundColor: colors.white,
    padding: wp('3%'),
    borderRadius: 10,
  },

  mainInnerContainer: {
    justifyContent: 'center',
  },
  notifyMeIcon: {
    height: 40,
    width: 150,
    resizeMode: 'contain',
  },
  containerSecondary: {
    marginTop: 20,
  },
  sportTitletNameContainer: {
    marginVertical: 20,
  },
  sportTitletNameStyle: {
    fontFamily: fontFamily.regular,
    fontWeight: '700',
    fontSize: 18,
    color: colors.black,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  spacerTextContainer: {
    width: wp('8%'),
  },

  headingText3Container: {
    flex: 1,
  },
  headingUNAText3Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainContainerTeam: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  vsTextStyle: {
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    fontSize: 12,
    color: '#592B81',
    textAlign: 'center',
  },
  closeContainer: {
    flexDirection: 'row-reverse',
  },
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 11,
    shadowColor: colors.balack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 5,
    backgroundColor: colors.white,
    padding: wp('2.3%'),
    width: wp('86'),
  },
  heightSpacer: {
    height: hp('2%'),
  },
  textItemStyle: {
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    fontSize: wp('2.7%'),
    textAlign: 'center',
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
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    alignItems: 'flex-start',
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

  homeTeamIconContainer: {
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 70,
    width: 70,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotterContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonMainStyle: {
    backgroundColor: colors.buttonPrimary,
    borderRadius: 5,
    paddingVertical: 20,
  },
  buttonMainStyle2: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 20,
  },
  textButtonStyle: {
    textAlign: 'center',
    color: '#F9F9F9',
    fontFamily: fontFamily.regular,
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  textButtonStyle2: {
    textAlign: 'center',
    color: '#000',
    fontFamily: fontFamily.regular,
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  spacerH10: {
    height: 10,
  },
  dateContainer: {
    paddingTop: 23,
    paddingBottom: 23,
  },
  dateText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  heightSpacer14: {
    height: 14,
  },
});
