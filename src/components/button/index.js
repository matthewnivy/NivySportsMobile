import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const UNAButton = props => {
  const {onPress, disabled} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{...styles.createButton, ...props.style}}>
      {props.children}
    </TouchableOpacity>
  );
};
