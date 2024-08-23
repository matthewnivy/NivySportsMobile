import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../../comman';

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
  topImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
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
    height: 15,
    width: 20.2,
  },
  imagesContainerHorizontal: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('1.5%'),
    paddingVertical: hp('1%'),
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
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
    fontSize: fontSize.xxxtinyH,
    fontFamily: fontFamily.black,
    fontWeight: '600',
    lineHeight: 14.4,
    textAlign: 'center',
    color: colors.greyishColor,
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
    justifyContent: 'space-between',
    marginTop: 7,
    marginRight: 16,
    marginBottom: 10,
    marginLeft: 8,
  },
  headingTextHeader: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: colors.buttonPrimary,
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
    overflow: 'hidden',
    backgroundColor: colors.white,
    margin: 5,
    elevation: 3,
    shadowColor: colors.black,
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

  // Roster list
  topImageContainer: {
    alignItems: 'center',
    marginTop: hp('2.5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
  },
  backRosterImageStyle: {
    height: 25,
    width: 25,
  },
  topImageEventContainer: {
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  topEventNewsContainer: {
    paddingHorizontal: 10,
  },
  image: {
    height: 120,
    width: 120,
  },
  imageIcon1: {
    height: 15,
    width: 20.2,
  },
  imagesContainerHorizontal: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('1.5%'),
    paddingVertical: hp('1%'),
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
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
    fontSize: fontSize.xxxtinyH,
    fontFamily: fontFamily.black,
    fontWeight: '600',
    lineHeight: 14.4,
    textAlign: 'center',
    color: colors.greyishColor,
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
    borderRadius: 10,
    backgroundColor: '#592B81',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: colors.white,
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
    width: wp('56%'),
  },
  acadamicLabelStyle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xxtiny,
    colors: colors.greyColorSmall,
    fontWeight: '700',
    textTransform: 'uppercase',
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
    elevation: 3,
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
  flexImageContainer: {
    flex: 1,
    minWidth: 65,
    maxWidth: 65,
    minHeight: 80,
    borderRadius: 10,
    overflow: 'hidden',
  },

  newsImageEventStyle: {
    height: 200,
    width: wp('80%'),
    borderRadius: Platform.OS === 'android' ? 3 : 10,
  },
  imageEventStyle: {
    flex: 1,
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
    marginTop: 3,
    marginRight: 3,
    marginBottom: 10,
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
  w5: {
    width: 5,
  },
});
