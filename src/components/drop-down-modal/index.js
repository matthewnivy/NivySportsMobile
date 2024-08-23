import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

import {styles} from './styles';

const DropDownComponent = ({
  children,
  options,
  saveScrollPosition,
  style,
  dropdownStyle,
  dropdownTextStyle,
  dropdownTextHighlightStyle,
  onSelect,
  defaultValue,
}) => {
  return (
    <ModalDropdown
      options={options}
      saveScrollPosition={saveScrollPosition ? saveScrollPosition : false}
      style={[...style, ...styles.mainModalContainer]}
      textStyle={[...textStyle, ...styles.modalDropDownTextStyle]}
      dropdownStyle={[...dropdownStyle, ...styles.dropDownStyling]}
      dropdownTextStyle={[...dropdownTextStyle, ...styles.dropDownTextStyling]}
      dropdownTextHighlightStyle={[
        ...dropdownTextHighlightStyle,
        ...styles.dropDownTextHighlightStyling,
      ]}
      onSelect={(index, string) => onSelect(index, string)}
      defaultValue={defaultValue}>
      {children}
    </ModalDropdown>
  );
};

export default DropDownComponent;
