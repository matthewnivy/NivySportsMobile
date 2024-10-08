import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../../../../comman';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  TopButtonContainer: {
    marginLeft: 15,
    marginRight: 17,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle1: {
    paddingVertical: 17.5,
    paddingLeft: 65.08,
    paddingRight: 65.08,
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  buttonStyle2: {
    paddingVertical: 17.5,
    paddingLeft: 65.08,
    paddingRight: 65.08,
    backgroundColor: colors.buttonPrimary,
    borderRadius: 50,
  },
  buttonTextStyle1: {
    color: '#000',
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  buttonTextStyle2: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  tableContainer: {
    backgroundColor: colors.buttonPrimary,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  top1Container: {flexDirection: 'row'},
  mainTopLeftContainer: {
    width: wp('11'),
  },
  textTop: {
    color: '#fff',
    paddingRight: 35,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    fontWeight: '400',
  },
  textTopSecond: {
    color: '#000',
    paddingRight: 35,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    fontWeight: '400',
  },
  secondaryDataContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 10,
    paddingLeft: 9,
    marginHorizontal: 5,
  },
  secondaryDataContainer2: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 10,
    paddingLeft: 9,
    marginTop: 9,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  dataImage: {
    // width: 32,
    // height: 23,
    width: 28,
    height: 17,
    flexShrink: 0,
    alignSelf: 'center',
  },
  dataFotterImage: {
    width: 28,
    height: 26,
    flexShrink: 0,
    alignSelf: 'center',
  },
  spacer4: {
    width: 8,
  },
  mainSecondDataTableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  datacontainerOne: {
    width: wp('100%'),
  },
  datacontainerOne: {
    width: wp('100%'),
  },
  datacontainerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  datacontainerThree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#EFEFEF',
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  spacerH80: {width: 80},
  labelStyle: {
    color: '#000',
    fontFamily: fontFamily.regular,
    fontSize: 14,
    fontWeight: '600',
  },
  shootingScoreStyle: {
    color: '#000',
    fontFamily: fontFamily.regular,
    fontSize: 14,
    fontWeight: '400',
  },
  fotterHeaderContainer: {
    marginTop: 20,
    marginLeft: 26,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otherMatchLabel: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.regular,
  },
  seeAllLabel: {
    color: '#C4C4C4',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: fontFamily.regular,
  },
  fotterContainer: {
    marginTop: 4,
    marginHorizontal: 16,
  },
  mainCardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 20,
  },
  barStyle: {
    fontSize: 40,
    fontWeight: '100',
    textAlign: 'center',
    marginHorizontal: 7,
    color: '#BEBEBE',
  },
  fotterText: {
    color: '#000',
    fontFamily: fontFamily.regular,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 10,
  },
});
