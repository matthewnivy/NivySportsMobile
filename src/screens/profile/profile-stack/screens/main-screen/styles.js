import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, fontFamily, fontSize} from '../../../../../comman';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.buttonPrimary,
  },
  topImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  spacer17: {
    width: 17,
  },
  myTicketButtonStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 18,
    borderBottomColor: '#8B5DB3',
  },
  ticketIconStyle: {
    width: 21,
    height: 18,
  },
  backArrowStyle: {
    height: 25,
    width: 25,
    marginBottom: 2,
  },
  headingTextHeader: {
    fontSize: fontSize.xxbig,
    fontFamily: fontFamily.bold,
    fontWeight: '600',

    textTransform: 'capitalize',
    color: colors.white,
  },
  buttonTextHeader: {
    fontSize: fontSize.xsmall,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
    textAlign: 'left',
    textTransform: 'capitalize',
    color: colors.white,
  },
  lastContainerTop: {
    width: wp('5%'),
  },
  iconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10.48,
  },
  logoStyle: {
    width: 199,
    height: 142,
  },
  buttonsContainer: {
    marginTop: 33,
    marginHorizontal: 20,
  },
  h20Spacer: {
    height: 20,
  },
});
