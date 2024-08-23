import React from 'react';
import FastImage from 'react-native-fast-image';

import {styles} from './styles';

export const UnaImageComponent = props => {
  const {imgName, imgLink, color, resizeMode} = props;
  return (
    <FastImage
      style={{...styles.imagestyle, ...props.style}}
      source={imgName ? imgName : {uri: imgLink}}
      resizeMode={resizeMode ? resizeMode : FastImage.resizeMode.contain}
      tintColor={color && color}
    />
  );
};
