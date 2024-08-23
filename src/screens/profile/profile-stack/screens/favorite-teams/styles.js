import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../../../../comman';

export const styles = StyleSheet.create({
  topImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  lastContainerTop: {
    width: wp('5%'),
  },
  topImageEventContainer: {
    flexDirection: 'row',
    // paddingTop: 5,
    justifyContent: 'space-between',
    height: 70.399,
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
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#000',
    textAlign: 'left',
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
  containerText: {
    flexDirection: 'row',
  },
  secondaryContainerEvent: {
    // paddingLeft: wp('4%'),
    // width: wp('30%'),
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  mainEventTextContainer: {
    marginLeft: wp('4%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    elevation: 3,
    shadowColor: colors.balack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 12,
  },
  imageEventStyle: {
    height: 50,
    width: 80,
    alignSelf: 'center',
    marginLeft: 10,
    backgroundColor: colors.white,
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
    // flex: 1,
  },
  arrowImageStyle: {
    marginRight: 20,
    height: 20,
    width: 20,
  },
  secondaryImageContainer: {
    flexDirection: 'row',
    marginTop: 14,
    justifyContent: 'center',
    marginVertical: hp('1%'),
  },
  schedualButtonStyle: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  schedualButtonStyle2: {
    flexDirection: 'row',
    backgroundColor: '#592B81',
    paddingVertical: 10,
    paddingHorizontal: 40,
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
});
