import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Moment from 'moment';

import {MainContainer} from '../../hoc';
import {customLables, images, screenName} from '../../comman';
import {ModalHomeBottomTeam} from '../../components';
import {getScheduleApi} from '../../utils/rest-apis';

import PushNotification from 'react-native-push-notification';
import {styles} from './styles';

const UpcomingEvents = props => {
  const {navigation} = props;

  const [eventData, setEventData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [teamDetails, setTeamDetails] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const setNotification = val2 => {
    let date = new Date(val2);
    PushNotification.localNotificationSchedule({
      channelId: 'reminders',
      title: 'Reminder!!!!!!',
      message: 'You have set this reminder',
      date,
    });
  };

  console.log('eventData', eventData);

  const getOrganizationEventListApiResponse = async () => {
    let apiVal = await getScheduleApi();

    try {
      if (apiVal?.status === 200) {
        let newData = apiVal?.data?.content;
        // Modify the data structure to add mainTopEventDate inside events

        const filteredEvents = newData.flatMap(day =>
          day.events.filter(event => {
            if (typeof event === 'object' && event !== null) {
              event.mainTopEventDate = day.date; // Add the new property
              return true; // Include this event in the filteredEvents array
            }
            return false; // Exclude this event from the filteredEvents array
          }),
        );

        setEventData(filteredEvents);
      } else {
      }
    } catch (error) {
      setEventData([]);
    }
  };

  const getOrganizationEventListApiResponse2 = async () => {
    let apiVal = await getScheduleApi();

    try {
      if (apiVal?.status === 200) {
        let newData = apiVal?.data?.content;
        // Modify the data structure to add mainTopEventDate inside events

        const filteredEvents = newData.flatMap(day =>
          day.events.filter(event => {
            if (typeof event === 'object' && event !== null) {
              event.mainTopEventDate = day.date; // Add the new property
              return true; // Include this event in the filteredEvents array
            }
            return false; // Exclude this event from the filteredEvents array
          }),
        );

        setEventData(filteredEvents);
        setIsRefreshing(false);
      } else {
      }
    } catch (error) {
      setEventData([]);
      setIsRefreshing(false);
    }
  };

  const getScheduleApiHandler = async () => {
    let apiVal = await getScheduleApi();
    console.log('newData2', apiVal);
    try {
      if (apiVal?.status === 200) {
        let newData = apiVal?.data?.content;
        const filteredEvents = newData.flatMap(day =>
          day.events.filter(event => {
            if (typeof event === 'object' && event !== null) {
              event.mainTopEventDate = day.date; // Add the new property
              return true; // Include this event in the filteredEvents array
            }
            return false; // Exclude this event from the filteredEvents array
          }),
        );

        setEventApiData2(filteredEvents);
        setIsRefreshing(false);
      } else {
        setIsRefreshing(false);
      }
    } catch (error) {
      setEventApiData([]);
      setIsRefreshing(false);
    }
  };

  const toggleModalOtp = (val, val2) => {
    setModalVisible(!isModalVisible);
    if (val2) {
      setNotification(val2);
    }
  };

  const modalHandler = item => {
    setTeamDetails(item);
    navigation.navigate(screenName.eventInformationScreen, {
      teamDetails: item,
    });
  };

  useEffect(() => {
    getOrganizationEventListApiResponse();
    getScheduleApiHandler();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    getOrganizationEventListApiResponse2();
  };

  const renderItem = ({item}) => {
    Moment.locale('en');
    const imageUrl1 = `https://roarlions.com${item?.opponent?.image?.path}/${item?.opponent?.image?.filename}`;
    const opponentOpponentTitle = item?.opponent?.title;
    const sportTitletName = item?.sport?.title;
    const sportTournamentTitletName = item?.facility?.title || item?.location;
    const todayMatch =
      Moment(item?.mainTopEventDate).local().format('M/D') ==
      Moment().local().format('M/D');
    return (
      <TouchableOpacity
        onPress={() => modalHandler(item)}
        style={[todayMatch ? styles.buttonItemPurple : styles.buttonItem]}>
        <View style={styles.mainTodayConainer}>
          {Moment(item?.mainTopEventDate).local().format('M/D') ==
          Moment().local().format('M/D') ? (
            <Text style={styles.headingTextToday}>Today!</Text>
          ) : (
            <Text style={styles.headingTextToday2}>
              {' '}
              {Moment(item?.mainTopEventDate).local().format('dddd')}
            </Text>
          )}
        </View>
        <View style={styles.topImageEventContainer}>
          <View style={styles.mainEventTextContainer}>
            <Image
              style={styles.imageIcon1}
              resizeMode="contain"
              source={images.teamIcon1}
            />
          </View>
          <View style={styles.titleTextEventContainer}>
            <View style={styles.at_vsContainer}>
              <Text style={styles.titleAt_VsTextEvent}>{item?.at_vs}</Text>
            </View>
          </View>
          <View style={styles.mainEventTextContainer}>
            <Image
              style={styles.imageIcon1}
              resizeMode="contain"
              source={{uri: imageUrl1}}
            />
          </View>
        </View>
        <View style={styles.mainTextContainer}>
          <View style={styles.UnaTextView}>
            <Text style={styles.titleTextEvent}>{'UNA'}</Text>
          </View>
          <View style={styles.opponentTitleContainer}>
            <Text style={styles.opponentTitleTextEvent}>
              {opponentOpponentTitle}
            </Text>
          </View>
        </View>
        <View style={styles.fotterContainer}>
          <Text style={styles.bottomTitleTextEvent}>{sportTitletName}</Text>
          {item?.time == '' ? (
            <Text style={styles.titleTextEvent2}>
              {Moment(item?.mainTopEventDate).format('M/D')}
            </Text>
          ) : (
            <Text style={styles.titleTextEvent2}>
              {Moment(item?.mainTopEventDate).format('M/D ')}
              {item.date
                ? Moment(item?.date).format('h:mmA')
                : customLables.TBA}
            </Text>
          )}
          {sportTournamentTitletName && (
            <Text style={styles.bottomTournamentTitleTextEvent}>
              {sportTournamentTitletName}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  // Display the upcoming events
  return (
    <MainContainer>
      <View style={styles.topHeadingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backArrowStyle}
            resizeMode="contain"
            source={images.backRosterImage}
          />
        </TouchableOpacity>
        <Text style={styles.headingTextHeader}>
          {customLables.upcomingEvents}
        </Text>
        <View style={styles.lastContainerTop} />
      </View>
      <View style={styles.secondContainer}>
        <FlatList
          data={eventData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      </View>
      <ModalHomeBottomTeam
        toggleModal={(val, val2) => toggleModalOtp(val, val2)}
        isModalVisible={isModalVisible}
        teamDetails={teamDetails}
      />
    </MainContainer>
  );
};

export default UpcomingEvents;
