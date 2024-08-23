import React from 'react';
import {Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const UNAText = props => {
  const {fontSize, textAlign, color, backgroundColor, height, width} = props;
  return (
    <Text
      {...props}
      style={{
        fontSize: hp(fontSize),
        textAlign: textAlign,
        color: color,
        backgroundColor: backgroundColor,
        height: height,
        width: width,
      }}>
      {props.children}
    </Text>
  );
};

export default UNAText;
