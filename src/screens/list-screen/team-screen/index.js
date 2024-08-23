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

import {MainContainer} from '../../../hoc';
import {colors, customLables, images} from '../../../comman';
import {styles} from './styles';

const TeamScreen = props => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(0);

  // Better organize the team data
  const DATA = [
    {
      id: 1,
      image: images.baseBallTeamImg,
      title: 'Baseball',
      scheduleListUrlLink: 'https://roarlions.com/sports/baseball/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/baseball/roster',
      newsUrlLink: 'https://roarlions.com/sports/baseball',
    },
    {
      id: 2,
      image: images.basketBallTeamImg,
      title: 'Basketball',
      scheduleListUrlLink:
        'https://roarlions.com/sports/mens-basketball/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/mens-basketball/roster',
      newsUrlLink: 'https://roarlions.com/sports/mens-basketball',
    },
    {
      id: 3,
      image: images.crossCountryTeamImg,
      title: 'Cross Country',
      scheduleListUrlLink:
        'https://roarlions.com/sports/mens-cross-country/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/mens-cross-country/roster',
      newsUrlLink: 'https://roarlions.com/sports/mens-cross-country',
    },
    {
      id: 4,
      image: images.footBallTeamImg,
      title: 'FootBall',
      scheduleListUrlLink: 'https://roarlions.com/sports/football/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/football/roster',
      newsUrlLink: 'https://roarlions.com/sports/football',
    },
    {
      id: 5,
      image: images.golfTeamImg,
      title: 'Golf',
      scheduleListUrlLink: 'https://roarlions.com/sports/mens-golf/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/mens-golf/roster',
      newsUrlLink: 'https://roarlions.com/sports/mens-golf',
    },
    {
      id: 6,
      image: images.tennisTeamImg,
      title: 'Tennis',
      scheduleListUrlLink: 'https://roarlions.com/sports/mens-tennis/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/mens-tennis/roster',
      newsUrlLink: 'https://roarlions.com/sports/mens-tennis',
    },
  ];

  const WOMEN_DATA = [
    {
      id: 1,
      image: images.wBasketBallTeamImg,
      title: 'BasketBall',
      scheduleListUrlLink:
        'https://roarlions.com/sports/womens-basketball/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/womens-basketball/roster',
      newsUrlLink: 'https://roarlions.com/sports/womens-basketball',
    },
    {
      id: 2,
      image: images.beachVolleyBallTeamImg,
      title: 'Beach VolleyBall',
      scheduleListUrlLink:
        'https://roarlions.com/sports/womens-beach-volleyball/schedule',
      rosterUrlLink:
        'https://roarlions.com/sports/womens-beach-volleyball/roster',
      newsUrlLink: 'https://roarlions.com/sports/womens-beach-volleyball',
    },
    {
      id: 3,
      image: images.crossCountryTeamImg,
      title: 'Cross Country',
      scheduleListUrlLink:
        'https://roarlions.com/sports/womens-cross-country/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/womens-cross-country/roster',
      newsUrlLink: 'https://roarlions.com/sports/womens-cross-country',
    },
    {
      id: 4,
      image: images.wGolfTeamImg,
      title: 'Golf',
      scheduleListUrlLink: 'https://roarlions.com/sports/womens-golf/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/womens-golf/roster',
      newsUrlLink: 'https://roarlions.com/sports/wvball?path=womensgolf',
    },
    {
      id: 5,
      image: images.soccerBallTeamImg,
      title: 'Soccer',
      scheduleListUrlLink:
        'https://roarlions.com/sports/womens-soccer/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/womens-soccer/roster',
      newsUrlLink: 'https://roarlions.com/sports/womens-soccer',
    },
    {
      id: 6,
      image: images.softBallTeamImg,
      title: 'SoftBall',
      scheduleListUrlLink: 'https://roarlions.com/sports/softball/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/softball/roster',
      newsUrlLink: 'https://roarlions.com/sports/softball',
    },
    {
      id: 7,
      image: images.tennisTeamImg,
      title: 'Tennis',
      scheduleListUrlLink:
        'https://roarlions.com/sports/womens-tennis/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/womens-tennis/roster',
      newsUrlLink: 'https://roarlions.com/sports/womens-tennis',
    },
    {
      id: 8,
      image: images.volleyBallTeamImg,
      title: 'Volleyball',
      scheduleListUrlLink: 'https://roarlions.com/sports/wvball/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/wvball/roster',
      newsUrlLink: 'https://roarlions.com/sports/wvball',
    },
  ];

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

  // Handle the team button press and navigate to the team screen
  const modalHandler = item => {
    navigation.navigate('TeamListScreen', {
      rosterUrlLink: item?.rosterUrlLink,
      scheduleListUrlLink: item?.scheduleListUrlLink,
      newsListUrlLink: item?.newsUrlLink,
      title: item?.title,
    });
  };

  // Render the team button
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => modalHandler(item)}
        style={styles.buttonItem}>
        <View style={styles.topImageEventContainer}>
          <Image
            style={styles.imageEventStyle}
            resizeMode="contain"
            source={item?.image}
          />
          <View style={styles.containerText}>
            <View style={styles.mainEventTextContainer}>
              <Text style={styles.titleTextNameEvent}>{item?.title}</Text>
            </View>
          </View>
          <View style={styles.arrowImageContainerStyle}>
            <Image
              style={styles.arrowImageStyle}
              resizeMode="contain"
              source={images.arrowRosterImage}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  // Display the Men's and Women's Sports
  return (
    <MainContainer>
      <View style={styles.topHeadingContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonStyle}>
          <Image
            style={styles.backArrowStyle}
            resizeMode="contain"
            source={images.backRosterImage}
          />
        </TouchableOpacity>
        <Text style={styles.headingTextHeader}>{customLables.teams}</Text>
        <View style={styles.lastContainerTop} />
      </View>
      <View style={styles.secondaryImageContainer}>
        {/* Display the Men's and Women's Sporrts buttons */}
        <TouchableOpacity
          onPress={() => setType(0)}
          style={[
            type === 0
              ? [
                  styles.schedualButtonStyle2,
                  {
                    borderTopLeftRadius: type === 0 ? 10 : 0,
                    borderBottomLeftRadius: type === 0 ? 10 : 0,
                  },
                ]
              : [
                  styles.schedualButtonStyle,
                  {
                    borderTopLeftRadius: type != 0 ? 10 : 0,
                    borderBottomLeftRadius: type != 0 ? 10 : 0,
                  },
                ],
          ]}>
          <Text
            style={[
              type === 0
                ? styles.schedualLabelStyle2
                : styles.schedualLabelStyle,
            ]}>
            Men's Sports
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType(1)}
          style={[
            type === 1
              ? [
                  styles.schedualButtonStyle2,
                  {
                    borderTopRightRadius: type === 1 ? 10 : 0,
                    borderBottomRightRadius: type === 1 ? 10 : 0,
                  },
                ]
              : [
                  styles.schedualButtonStyle,
                  {
                    borderTopRightRadius: type != 1 ? 10 : 0,
                    borderBottomRightRadius: type != 1 ? 10 : 0,
                  },
                ],
          ]}>
          <Text
            style={[
              type === 1
                ? styles.schedualLabelStyle2
                : styles.schedualLabelStyle,
            ]}>
            Women's Sports
          </Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View style={styles.secondContainer}>
          <ActivityIndicator size={20} color={colors.inActiveColor} />
        </View>
      ) : (
        <View style={styles.secondContainer}>
          {type === 0 && (
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          )}
          {type === 1 && (
            <FlatList
              data={WOMEN_DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      )}
    </MainContainer>
  );
};

export default TeamScreen;
