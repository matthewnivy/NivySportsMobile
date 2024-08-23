import React from 'react';
import {View} from 'react-native';

import {mainStyle} from './styles';

const MainContainer = props => {
  return (
    <View style={[props.styles, {...mainStyle.container, ...props.style}]}>
      {props.children}
    </View>
  );
};

export default MainContainer;
