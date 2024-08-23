import React from 'react';
import {TextInput} from 'react-native';
import {stylesInput} from './styles';

export const UNAInputText = props => {
  const {
    style,
    keyboardType,
    underlineColorAndroid,
    placeholder,
    placeholderTextColor,
    autoCapitalize,
    onChangeText,
    value,
    secureTextEntry,
    editable,
    multiline,
    numberOfLines,
  } = props;
  return (
    <TextInput
      style={{...stylesInput.input, ...style}}
      value={value}
      multiline={multiline}
      numberOfLines={numberOfLines}
      underlineColorAndroid={underlineColorAndroid}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeText}
      editable={editable}
    />
  );
};
