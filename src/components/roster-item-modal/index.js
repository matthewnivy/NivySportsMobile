import React from 'react';
import {Platform, Text, TouchableOpacity, View, Image} from 'react-native';
import Modal from 'react-native-modal';

import {colors, VectorIcon} from '../../comman';
import {styles} from './styles';

const RosterItemModal = ({toggleModal, isModalVisible, rosterDetails}) => {
  const onToggleCloseHandler = () => toggleModal(false);

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.mainContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={onToggleCloseHandler}>
            <VectorIcon
              type={'AntDesign'}
              color={colors.placeholderColor}
              name={'close'}
              size={Platform.isPad ? 40 : 20}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.mainContainerStyle}>
            <View>
              <Text style={styles.headingText3}>
                {rosterDetails?.number} {rosterDetails?.name}
              </Text>
              <Text style={styles.headingText2}>{rosterDetails?.position}</Text>
              <Text style={styles.headingText2}>{rosterDetails?.year}</Text>
              <Text style={styles.headingText2}>{rosterDetails?.hometown}</Text>
            </View>
            <Image
              style={styles.rosterDetailsImageStyle}
              source={{uri: rosterDetails?.image}}
            />
          </View>
        </View>
        <View style={styles.spacer3} />
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onToggleCloseHandler}>
            <Text style={styles.buttonTextStyle}>{'Close'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RosterItemModal;
