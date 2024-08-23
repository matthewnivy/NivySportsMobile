import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const MainStack = () => {
  const [pressedButton, setPressedButton] = useState(null);
  const navigation = useNavigation();

  const handleButtonPress = buttonText => {
    if (buttonText === 'Team Info') {
      setPressedButton(buttonText);

      // navigation.navigate('StatsStack');
    } else {
      setPressedButton(buttonText);
    }
  };

  return (
    <View style={styles.secondContainer}>
      <View style={styles.spacerTopSecondaryContainer} />
      <TouchableOpacity
        onPress={() => handleButtonPress('Team Info')}
        style={[
          pressedButton === 'Team Info'
            ? styles.buttonMainStyle
            : styles.buttonMainStyle2,
        ]}>
        <Text
          style={[
            pressedButton === 'Team Info'
              ? styles.textButtonStyle
              : styles.textButtonStyle2,
          ]}>
          Team Info
        </Text>
      </TouchableOpacity>
      <View style={styles.spacerH10} />
      <TouchableOpacity
        onPress={() => handleButtonPress('TV')}
        style={[
          pressedButton === 'TV'
            ? styles.buttonMainStyle
            : styles.buttonMainStyle2,
        ]}>
        <Text
          style={[
            pressedButton === 'TV'
              ? styles.textButtonStyle
              : styles.textButtonStyle2,
          ]}>
          TV
        </Text>
      </TouchableOpacity>
      <View style={styles.spacerH10} />
      <TouchableOpacity
        onPress={() => handleButtonPress('Stats')}
        style={[
          pressedButton === 'Stats'
            ? styles.buttonMainStyle
            : styles.buttonMainStyle2,
        ]}>
        <Text
          style={[
            pressedButton === 'Stats'
              ? styles.textButtonStyle
              : styles.textButtonStyle2,
          ]}>
          Stats
        </Text>
      </TouchableOpacity>
      <View style={styles.spacerH10} />
      <TouchableOpacity
        onPress={() => handleButtonPress('History')}
        style={[
          pressedButton === 'History'
            ? styles.buttonMainStyle
            : styles.buttonMainStyle2,
        ]}>
        <Text
          style={[
            pressedButton === 'History'
              ? styles.textButtonStyle
              : styles.textButtonStyle2,
          ]}>
          History
        </Text>
      </TouchableOpacity>
      <View style={styles.spacerH10} />
      <TouchableOpacity
        onPress={() => handleButtonPress('Preview')}
        style={[
          pressedButton === 'Preview'
            ? styles.buttonMainStyle
            : styles.buttonMainStyle2,
        ]}>
        <Text
          style={[
            pressedButton === 'Preview'
              ? styles.textButtonStyle
              : styles.textButtonStyle2,
          ]}>
          Preview
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainStack;
