import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../comman';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'red',
  },
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
    color: colors.black,
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
    textTransform: 'capitalize',
  },
  mainEventTextContainer: {
    justifyContent: 'center',
    marginTop: 7,
    marginBottom: 10,
    marginLeft: 8,
  },
  headingTextHeader: {
    fontSize: fontSize.big,
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    textAlign: 'center',
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
    elevation: 1,
    shadowColor: colors.balack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 12,
  },
  imageContainer: {
    marginTop: 7,
    marginLeft: 8,
    marginBottom: 10,
  },
  imageEventStyle: {
    height: 80,
    width: 100,
    borderRadius: Platform.OS === 'android' ? 3 : 10,
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
  loadingProgressText: {
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.regular,
    fontWeight: '600',
    color: colors.buttonPrimary,
  },
  pdfBoolMainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
