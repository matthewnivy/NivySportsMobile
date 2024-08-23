import React, {useEffect, useState} from 'react';

import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Moment from 'moment';
import WebView from 'react-native-webview';

import BackIcon from '../../../comman/images/backIcon.svg';
import {MainContainer} from '../../../hoc';
import {
  colors,
  customLables,
  fontSize,
  images,
  screenName,
} from '../../../comman';
import {
  CalenderIconSmallSvgComponent,
  NewsIconSvgComponent,
  NotePadIconSvgComponent,
} from '../../../utils';
import {
  getRosterFromUrlListApi,
  getRosterNewsFromUrlListApi,
  getScheduleListApi,
} from '../../../utils/rest-apis';
import {styles} from './styles';

const TeamListScreen = props => {
  const {navigation} = props;
  const route = useRoute();
  const {rosterUrlLink, scheduleListUrlLink, newsListUrlLink, title} =
    route.params; // Access the passed props
  const [eventApiData, setEventApiData] = useState([]);
  const [type, setType] = useState(0);
  const [eventScheduleApiData, setEventScheduleApiData] = useState([]);
  const [eventNewsApiData, setEventNewsApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showRosterErrorMessage, setRosterShowErrorMessage] = useState(false);
  const [showScheduleErrorMessage, setScheduleShowErrorMessage] =
    useState(false);
  const [urlLinkBool, setUrlLinkBool] = useState(false);
  const [urlLink, setUrlLink] = useState('');

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

  // Get Rosters, Events, and News from the API
  useEffect(() => {
    getRosterFromUrlListApiHandler(rosterUrlLink);
    getOrganizationEventListApiResponse(scheduleListUrlLink);
    getOrganizationNewsEventListApiResponse(newsListUrlLink);
  }, [type, rosterUrlLink, scheduleListUrlLink, newsListUrlLink]);

  const closeWebViewHandler = () => setUrlLinkBool(false);

  const getRosterFromUrlListApiHandler = async rosterUrlLink => {
    try {
      setIsLoading(true);
      const response = await getRosterFromUrlListApi(rosterUrlLink);

      if (response.success === true) {
        if (response?.content.length === 0) {
          setRosterShowErrorMessage(true);
        }
        setEventApiData(response?.content);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getOrganizationEventListApiResponse = async scheduleListUrlLink => {
    setIsLoading(true);
    let apiVal = await getScheduleListApi(scheduleListUrlLink);
    try {
      if (apiVal?.status === 200) {
        if (apiVal?.data?.content?.length === 0) {
          setScheduleShowErrorMessage(true);
        }
        setEventScheduleApiData(apiVal?.data?.content);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setEventScheduleApiData([]);
      setIsLoading(false);
    }
  };

  const getOrganizationNewsEventListApiResponse = async scheduleListUrlLink => {
    setIsLoading(true);
    let apiVal = await getRosterNewsFromUrlListApi(scheduleListUrlLink);
    try {
      if (apiVal?.status === 200) {
        if (apiVal?.content?.length === 0) {
          setScheduleShowErrorMessage(true);
        }
        setEventNewsApiData(apiVal?.data?.content);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setEventNewsApiData([]);
      setIsLoading(false);
    }
  };

  // Renser the roster item
  const renderRosterItem = ({item, index}) => {
    const handleHeightString = str => {
      return str?.replace(/&quot;/g, '"')?.replace(/\u0027/g, "'");
    };
    const hasPositionHeightWeight = item.position || item.height || item.weight;
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {}}
        disabled={true}
        style={styles.buttonItem}>
        <View style={styles.topImageEventContainer}>
          <View style={styles.flexImageContainer}>
            <Image
              style={styles.imageEventStyle}
              resizeMode="stretch"
              source={{uri: `https://roarlions.com${item?.image}`}}
            />
          </View>
          <View style={styles.mainEventTextContainer}>
            {hasPositionHeightWeight && (
              <Text style={styles.titleTextEvent}>
                {item?.position}
                {item?.position && '/'}
                {handleHeightString(item?.height)} {item?.weight && '/'}
                {item?.weight}
              </Text>
            )}

            <Text style={styles.titleTextName}>{item?.name}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.titleTextFooter}>
                <Text style={styles.acadamicLabelStyle}>{item?.academic}</Text>{' '}
                / {item?.homeTown} / {item?.highSchool} / {item?.previousSchool}
              </Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            {item?.number != null && (
              <View style={styles.circle}>
                <Text style={styles.number}>{item?.number}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // Render the news item
  const renderNewsItem = ({item, index}) => {
    const imageUrl = item.image;

    const imageUrlDetail = imageUrl.replace(
      'http://www.roarlions.com/',
      'https://www.roarlions.com/',
    );

    const onPressItem = () => {
      if (item.url) {
        const imageUrlDetail = item?.url.replace('http://', 'https://');
        setUrlLink(imageUrlDetail);
        setUrlLinkBool(true);
      }
    };

    return (
      <TouchableOpacity
        key={index}
        onPress={onPressItem}
        style={styles.buttonItem}>
        <View style={styles.topEventNewsContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.newsImageEventStyle}
              resizeMode="contain"
              source={{uri: `${imageUrlDetail}`}}
            />
          </View>
          <View style={styles.mainEventTextContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.titleTextName}>{item?.name}</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.titleTextFooter}>
                <Text style={styles.acadamicLabelStyle}>{item?.date}</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const navigationBackHandler = () => navigation.goBack();

  const typeZeroHandler = () => setType(0);
  const typeOneHandler = () => setType(1);
  const typeTwoHandler = () => setType(2);

  const navigateEventInfo = item => {
    navigation.navigate(screenName.eventInformationTeamsScreen, {
      teamDetails: item,
    });
  };

  // Render the schedule item
  const renderScheduleItem = ({item}) => {
    Moment.locale('en');
    const [date, time] = item?.date.split(' / ');
    const parts = item?.gameResult.split(','); // Split the result into parts
    const winLose = parts[0]?.trim(); // Extract the win/lose indicator
    const resultData = parts[1]?.trim();

    return (
      <TouchableOpacity
        onPress={() => navigateEventInfo(item)}
        disabled
        style={styles.buttonSchedualItem}>
        <View style={styles.topImageEventSchedualContainer}>
          <Image
            style={styles.imageEventSchadualStyle}
            resizeMode="cover"
            source={{uri: `https://roarlions.com${item?.image}`}}
          />
          <View style={styles.containerSchedualText}>
            <View style={styles.mainEventTextSchedualContainer}>
              <Text style={styles.titleTextDateSchedualEvent}>
                {date}{' '}
                <Text style={styles.titleTextSchedualEvent}>/ {time}</Text>
              </Text>
              {item?.locationImage?.length > 0 ? (
                <View style={styles.imageContaierSchedualEspn}>
                  <Image
                    style={styles.imageEventSmallSchedualStyle2}
                    resizeMode="contain"
                    source={{
                      uri: `https://roarlions.com${item?.locationImage}`,
                    }}
                  />
                </View>
              ) : (
                <View style={styles.spacerVertical} />
              )}
              <View style={styles.titleTextNameSchedualEventContainer}>
                <Text style={styles.titleTextNameSchedualEvent}>
                  {item?.name}
                </Text>
              </View>
              <Text style={styles.titleTextSchedualEvent2}>
                {item?.promotionName}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.secondaryContainerSchedualEvent}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationTextSchedualEvent}>
              {item?.location}
            </Text>
          </View>
          <Text
            style={[
              styles.gameResultTextSchedualEvent,
              {
                color: winLose === 'W' ? colors.buttonGreenColor : colors.red2,
                fontSize: fontSize.xxlarge,
              },
            ]}>
            {winLose}
            <View style={styles.w5} />
            <Text style={styles.gameResultTextSchedualEvent}>{resultData}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  // Display the Schedule, Roster, and News
  return (
    <>
    {/* Show the webview if the urlLinkBool is true */}
      {urlLinkBool ? (
        <View style={styles.webViewContainer}>
          <TouchableOpacity
            style={styles.closButtonContainer}
            onPress={closeWebViewHandler}>
            <BackIcon width={60} height={50} />
          </TouchableOpacity>
          <WebView source={{uri: urlLink}} />
        </View>
      ) : (
        <MainContainer>
          {/* Show the team page options */}
          <View style={styles.topImageContainer}>
            <TouchableOpacity
              onPress={navigationBackHandler}
              style={styles.backButtonStyle}>
              <Image
                style={styles.backArrowStyle}
                resizeMode="contain"
                source={images.backRosterImage}
              />
            </TouchableOpacity>
            <Text style={styles.headingTextHeader}>
              {title || customLables.footballTeam}
            </Text>
            <View style={styles.lastContainerTop} />
          </View>
          <View style={styles.secondaryImageContainer}>
            <TouchableOpacity
              onPress={typeZeroHandler}
              style={[
                type === 0
                  ? styles.schedualButtonStyle2
                  : styles.schedualButtonStyle,
              ]}>
              <CalenderIconSmallSvgComponent
                color={type === 0 ? '#ffff' : '#000000'}
              />
              <Text
                style={[
                  type === 0
                    ? styles.schedualLabelStyle2
                    : styles.schedualLabelStyle,
                ]}>
                Schedule
              </Text>
            </TouchableOpacity>
            <View style={styles.spacerContainerButton} />
            <TouchableOpacity
              onPress={typeOneHandler}
              style={[
                type === 1
                  ? styles.schedualButtonStyle2
                  : styles.schedualButtonStyle,
              ]}>
              <NotePadIconSvgComponent
                color={type === 1 ? '#ffff' : '#000000'}
              />
              <Text
                style={[
                  type === 1
                    ? styles.schedualLabelStyle2
                    : styles.schedualLabelStyle,
                ]}>
                Roster
              </Text>
            </TouchableOpacity>
            <View style={styles.spacerH5} />
            <TouchableOpacity
              onPress={typeTwoHandler}
              style={[
                type === 2
                  ? styles.schedualButtonStyle2
                  : styles.schedualButtonStyle,
              ]}>
              <NewsIconSvgComponent color={type === 2 ? '#ffff' : '#000000'} />
              <Text
                style={[
                  type === 2
                    ? styles.schedualLabelStyle2
                    : styles.schedualLabelStyle,
                ]}>
                News
              </Text>
            </TouchableOpacity>
            <View />
          </View>
          {isLoading ? (
            <View style={styles.secondContainer}>
              <ActivityIndicator size={20} color={colors.inActiveColor} />
            </View>
          ) : (
            <View style={styles.secondContainer}>
              {/* Show the team schedule */}
              {type === 0 && (
                <>
                  {showScheduleErrorMessage ? (
                    <View style={styles.centeredView}>
                      <Text style={styles.errorText}>
                        Sorry, something went wrong
                      </Text>
                    </View>
                  ) : (
                    <FlatList
                      data={eventScheduleApiData}
                      renderItem={renderScheduleItem}
                      keyExtractor={item => item.id}
                    />
                  )}
                </>
              )}
              {/* Show the team roster */}
              {type === 1 && (
                <>
                  {showRosterErrorMessage ? (
                    <View style={styles.centeredView}>
                      <Text style={styles.errorText}>
                        Sorry, something went wrong
                      </Text>
                    </View>
                  ) : (
                    <FlatList
                      data={eventApiData}
                      renderItem={renderRosterItem}
                      keyExtractor={item => item.id}
                    />
                  )}
                </>
              )}
              {/* Show the team news */}
              {type === 2 && (
                <>
                  {showRosterErrorMessage ? (
                    <View style={styles.centeredView}>
                      <Text style={styles.errorText}>
                        Sorry, something went wrong
                      </Text>
                    </View>
                  ) : (
                    <FlatList
                      data={eventNewsApiData}
                      renderItem={renderNewsItem}
                      keyExtractor={item => item.id}
                    />
                  )}
                </>
              )}
            </View>
          )}
        </MainContainer>
      )}
    </>
  );
};

export default TeamListScreen;
