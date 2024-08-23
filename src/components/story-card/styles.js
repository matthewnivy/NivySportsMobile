import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily} from '../../comman';

export const styles = StyleSheet.create({
  container: {
    width: wp('92%'),
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginVertical: hp('2%'),
    marginHorizontal: wp('3%'),
    elevation: 11,
    shadowColor: colors.balack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 12,
  },
  leftTopIcon: {
    height: hp('7%'),
    width: wp('18%'),
    borderRadius: 20,
  },
  middleImageStyle: {
    height: hp('23%'),
    width: wp('90%'),
  },
  middleContainerStyle: {
    flex: 1,
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('1%'),
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: colors.borderPostColor,
    borderTopColor: colors.borderPostColor,
  },
  heartButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomLeftButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomIconButtonsSpacer: {
    width: wp('4%'),
  },
  heartIconStyle: {
    height: hp('5%'),
    width: wp('5%'),
  },
  rightTopIcon: {
    height: hp('5%'),
    width: wp('5%'),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  upperLeftContainer: {
    flexDirection: 'row',
  },
  containerLeftTopContainer: {
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  smallSpacerTopLeftContainer: {
    width: wp('1.2%'),
  },
  titleTextTopLeft: {
    fontFamily: fontFamily.regular,
    fontSize: wp(3.8),
    fontWeight: '600',
  },
  hoursTextTopLeft: {
    fontFamily: fontFamily.regular,
    fontSize: wp(2.8),
    fontWeight: '400',
    color: colors.greyColorSmall,
  },
  iconTextNumber: {
    fontFamily: fontFamily.regular,
    fontSize: wp(3.4),
    fontWeight: '600',
    color: colors.greyColorSmall,
  },
});
