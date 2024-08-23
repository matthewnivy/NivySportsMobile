import React, {useEffect, useState} from 'react';
import {Image, View, Text, TouchableOpacity, BackHandler} from 'react-native';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';

import EventInformationStacks from './components';
import {styles} from './styles';
import {images} from '../../comman';

const EventInformationScreen = props => {
  const {navigation} = props;
  const route = useRoute();
  const {teamDetails} = route.params; // Access the passed props
  const [urlLinkBool, setUrlLinkBool] = useState(false);
  const [pressedButton, setPressedButton] = useState(null);

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

  const date = moment(teamDetails?.mainTopEventDate);

  const formattedMonthDay = date.format('M/D');
  const formattedTime = date.format('h:mm A');

  const imageUrl1 = `https://roarlions.com${teamDetails?.opponent?.image?.path}/${teamDetails?.opponent?.image?.filename}`;
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
            <View style={styles.mainContainerTeam}>
              <View style={styles.homeTeamIconContainer}>
                <Image
                  style={styles.imageIcon1}
                  resizeMode="contain"
                  source={images?.teamIcon1}
                />
              </View>
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
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.headingUNAText3Container}>
              <Text style={styles.headingText3}>{'UNA'}</Text>
            </View>
            <View style={styles.spacerTextContainer} />
            <View style={styles.headingText3Container}>
              <Text style={styles.opponentHeadingText3}>
                {opponentOpponentTitle ? opponentOpponentTitle : ''}
              </Text>
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
        <EventInformationStacks teamDetails={teamDetails} />
      </View>
      <View style={styles.fotterContainer}></View>
    </View>
  );
};

export default EventInformationScreen;
