import React, {useContext, useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  BackHandler,
  Platform,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import SafariView from 'react-native-safari-view';

import jwt_decode from 'jwt-decode';
import Moment from 'moment';
import moment from 'moment';
import {Shadow} from 'react-native-shadow-2';

import {MainContainer} from '../../hoc';
import {styles} from './styles';
import {customLables, images, MainHomeData, screenName} from '../../comman';
import {ModalHomeBottomTeam} from '../../components';
import {CheckInModal} from '../../components';
import {ApplicationContext} from '../../context-api/Context';
import {getGameProgramsListApi, getScheduleApi} from '../../utils/rest-apis';
import UNALightLogo from '../../comman/images/UNALightLogo.svg';
import {
  getUserAccountDetailsApi,
  getUserIdApi,
} from '../../utils/rest-apis/twitter-apis';
import {MainHomeData2} from '../../comman/data';

const HomeScreen = props => {
  console.log('homeScreen');
  const {
    gamePlanData,
    setGamePlanData,
  } = useContext(ApplicationContext);
  const navigation = useNavigation();
  const [linkBool, setLinkBool] = useState(false);
  const [webViewStripeLink, setWebViewStripeLink] = useState(null);
  const [eventApiData, setEventApiData] = useState([]);

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

  useFocusEffect(
    React.useCallback(() => {
      getGameProgramsListApiHandler();
      return () => {
        getGameProgramsListApiHandler();
      };
    }, []),
  );

  // Get the game programs list from the API
  const getGameProgramsListApiHandler = async () => {
    try {
      const response = await getGameProgramsListApi();
      setGamePlanData(response?.content.gamePrograms || []);
    } catch (error) {}
  };

  // Get the event list from the API
  const getOrganizationEventListApiResponse = async () => {
    let apiVal = await getScheduleApi();

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
        setEventApiData(filteredEvents);
      } else {
      }
    } catch (error) {
      setEventApiData([]);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getOrganizationEventListApiResponse();
    }, []),
  );

  const onPressLink = link => {
    if (link === 'teamRosters') {
      navigation.navigate(screenName.teamRostersScreen);
    } else if (link === 'PdfScreen') {
      navigation.navigate(screenName.pdfScreen);
    } else if (
      link ===
        'https://www.givecampus.com/campaigns/34646/donations/new?a=6266417' &&
      Platform.OS === 'ios'
    ) {
      SafariView.isAvailable()
        .then(
          SafariView.show({
            url: link,
          }),
        )
        .catch(_error => {
          // Fallback WebView code for iOS 8 and earlier
        });
    } else {
      setWebViewStripeLink(link);
      setLinkBool(true);
    }
  };

  const closeWebViewHandler = () => {
    setWebViewStripeLink(null);
    setLinkBool(false);
  };

  const facebookLinkHandler = () =>
    Linking.openURL('https://www.facebook.com/unaathletics');

  const twitterLinkHandler = () =>
    Linking.openURL('https://twitter.com/UNAAthletics');

  const instagramLinkHandler = () =>
    Linking.openURL('https://www.instagram.com/una_athletics/');

  const renderItem = ({item}) => {
    return (
      <View style={styles.buttonItemContainer}>
        <TouchableOpacity
          onPress={() => onPressLink(item?.link)}
          style={styles.buttonItem}>
          <View style={styles.itemImageContainer}>
            {item?.image && (
              <Image source={item?.image} style={{width: 62, height: 62}} />
            )}
          </View>
          <Text style={styles.headingText2}>{item?.title}</Text>
          <View style={styles.arrowImg}>
            <Image
              source={images.iconArrowImageImg}
              style={{width: 45, height: 45, top: 5}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  // Render events for the schdeule slider on the homepage
  const renderSliderItem = ({item}) => {
    const imageUrl1 = `https://roarlions.com${item?.opponent?.image?.path}/${item?.opponent?.image?.filename}`;
    const sportTitletName = item?.sport?.title;
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate(screenName.eventInformationScreen, {
            teamDetails: item,
          });
        }}
        style={[
          moment(item?.mainTopEventDate).local().format('M/D') ==
          moment().local().format('M/D')
            ? styles.eventButtonUpdateToday
            : styles.eventButtonToday,
        ]}>
        <View>
          {moment(item?.mainTopEventDate).local().format('M/D') ==
          moment().local().format('M/D') ? (
            <Text style={styles.headingTextToday}>Today!</Text>
          ) : (
            <Text style={styles.headingTextToday2}>
              {' '}
              {moment(item?.mainTopEventDate).local().format('dddd')}
            </Text>
          )}
        </View>
        <View style={styles.mainHorizontalUpperContainer}>
          <Text style={styles.eventButtonDate}>
            {Moment(item?.mainTopEventDate).local().format('M/D')}
          </Text>
          {item?.time !== '' && (
            <Text style={styles.eventButtonTime}>
              {item.date
                ? Moment(item?.date).format('h:mmA')
                : customLables.TBA}
            </Text>
          )}
        </View>

        <View style={styles.titleContainerStyle}>
          <View style={styles.titleTextEventContainer}>
            <View style={styles.at_vsContainer}>
              <Text style={styles.titleAt_VsTextEvent}>{item?.at_vs}</Text>
            </View>
          </View>
          <View style={styles.spacer2} />
          <View style={styles.containerImageStyle}>
            <Image
              style={styles.imageIcon1}
              resizeMode="contain"
              source={{uri: imageUrl1}}
            />
          </View>
        </View>
        <View style={styles.headingText3Container}>
          <Text style={styles.headingText3}>{sportTitletName}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  // Show webview if showing an embedded site, otherwise show the homepage
  return (
    <>
      {/* Show  Webview when homepage button is pressed that requires it */}
      {linkBool ? (
        <View style={styles.webViewContainer}>
          <TouchableOpacity
            style={styles.closButtonContainer}
            onPress={closeWebViewHandler}>
            <View style={styles.closeButtonImage}>
              <Image
                style={styles.imageIcon1}
                resizeMode="contain"
                source={images.backRosterImage}
              />
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableOpacity>
          <WebView source={{uri: webViewStripeLink}} />
        </View>
      ) : ( 
        <MainContainer>
          {/* Display the homepage image, social and home buttons, and schedule slider */}
          <View style={styles.topImageContainer}>
            <UNALightLogo width={500} height={150} />
          </View>
          <View style={styles.containerButtonLink}>
            <TouchableOpacity onPress={facebookLinkHandler}>
              <Image
                style={styles.socialMediaButtonStyle}
                resizeMode="contain"
                source={images.facebookImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={twitterLinkHandler}>
              <Image
                style={styles.socialMediaButtonStyle}
                resizeMode="contain"
                source={images.xImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={instagramLinkHandler}>
              <Image
                style={styles.socialMediaButtonStyle}
                resizeMode="contain"
                source={images.instagramImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.secondContainer}>
            {/* Display Game Programs button if one is available */}
            <FlatList
              data={gamePlanData?.length > 0 ? MainHomeData : MainHomeData2}
              key={'_'}
              keyExtractor={item => '_' + item.id}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.thirdContainer}>
            <FlatList
              horizontal
              data={eventApiData}
              renderItem={renderSliderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </MainContainer>
      )}
    </>
  );
};

export default HomeScreen;
