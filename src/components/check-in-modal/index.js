import React from 'react';
import Modal from 'react-native-modal';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors, screenName, VectorIcon} from '../../comman';
import {styles} from './styles';

const CheckInModal = ({toggleModal, isModalVisible, stateChanger}) => {
  const navigation = useNavigation();

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.mainContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => toggleModal(false)}>
            <VectorIcon
              type={'AntDesign'}
              color={colors.placeholderColor}
              name={'close'}
              size={Platform.isPad ? 40 : 20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainInnerContainer}>
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                navigation.navigate(screenName.login);
                stateChanger(false);
              }}>
              <Text style={styles.buttonTextStyle}>
                {'Login to Check-In To Event'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spacer3} />
        </View>
      </View>
    </Modal>
  );
};

export default CheckInModal;
