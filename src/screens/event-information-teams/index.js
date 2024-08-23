import React, {useEffect, useState} from 'react';
import {Image, View, Text, TouchableOpacity, BackHandler} from 'react-native';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';

import EventInformationStacks from './components';
import {styles} from './styles';
import {images} from '../../comman';

const EventInformationTeamsScreen = props => {
  const {navigation} = props;
  const route = useRoute();
  const {teamDetails} = route.params; // Access the passed props
  const [urlLinkBool, setUrlLinkBool] = useState(false);
  const [pressedButton, setPressedButton] = useState(null);
  console.log('teamDetails', teamDetails);
  const handleButtonPress = buttonText => {
    setPressedButton(buttonText);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goBack();
        return true;
      },
    );
    return () => backHandler.remove();
  }, [navigation]);

  const closeWebViewHandler = () => {
    setUrlLinkBool(false);
  };

  const date = moment(teamDetails?.date);

  const formattedMonthDay = date.format('M/D');
  const formattedTime = date.format('h:mm A');

  const imageUrl1 = `https://roarlions.com${teamDetails?.image}`;
  const opponentOpponentTitle = teamDetails?.opponent?.title;
  const sportTitletName = teamDetails?.sport?.title;
  const sportTournamentTitletName =
    teamDetails?.facility?.title || teamDetails?.location;

  const backNavHandler = () => navigation.goBack();

  return (
    <View style={styles.scrollInnerContainerStyle}>
      <View style={styles.scrollContainerStyle}>
        <View style={styles.topImageContainer}>
          <TouchableOpacity
            onPress={backNavHandler}
            style={styles.backButtonStyle}>
            <Image
              style={styles.backArrowStyle}
              resizeMode="contain"
              source={images.backNewIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headingTextHeader}>
            {sportTitletName ? sportTitletName : 'Event Information'}
          </Text>
          <TouchableOpacity
            disabled
            onPress={() => {}}
            style={styles.backButtonStyle}>
            {/* <Image
              style={styles.backArrowStyle}
              resizeMode="contain"
              source={images.bellIcon}
            /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.imagesContainerHorizontal}>
          <View style={styles.teamsContainer}>
            <View>
              <View style={styles.homeTeamIconContainer}>
                <Image
                  style={styles.imageIcon1}
                  resizeMode="contain"
                  source={images?.teamIcon1}
                />
              </View>
              <Text style={styles.headingText3}>{'UNA'}</Text>
            </View>
            <View style={styles.vsTextStyleContainer}>
              <Text style={styles.vsTextStyle}>{teamDetails?.at_vs}</Text>
            </View>
            <View style={styles.mainContainerTeam}>
              <View style={styles.homeTeamIconContainer}>
                <Image
                  style={styles.imageIcon1}
                  resizeMode="contain"
                  source={{uri: imageUrl1}}
                />
              </View>
              <View style={styles.headingText3Container}>
                <Text style={styles.opponentHeadingText3}>
                  {teamDetails?.name ? teamDetails?.name : ''}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {formattedMonthDay}{' '}
              {formattedTime === '12:00 AM' ? '' : formattedTime}
            </Text>
            <View style={styles.heightSpacer14} />
            <Text style={styles.dateText}>{sportTournamentTitletName}</Text>
          </View>
        </View>
        <EventInformationStacks />
        {/* <View style={styles.secondContainer}>
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
        </View> */}
        {/* </ScrollView> */}
      </View>
      <View style={styles.fotterContainer}>
        {/* <TouchableOpacity>
          <Image style={styles.notifyMeIcon} source={images.notifyMe} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default EventInformationTeamsScreen;
