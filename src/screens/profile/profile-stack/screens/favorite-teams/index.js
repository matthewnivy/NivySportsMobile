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

import {MainContainer} from '../../../../../hoc';
import {styles} from './styles';
import {colors, customLables, images} from '../../../../../comman';
import Fontisto from 'react-native-vector-icons/Fontisto';

const FavoriteScreen = props => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      bool: false,
      image: images.baseBallTeamImg,
      title: 'Baseball',
      scheduleListUrlLink: 'https://roarlions.com/sports/baseball/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/baseball/roster',
      newsUrlLink: 'https://roarlions.com/sports/baseball',
    },
    {
      id: 2,
      bool: false,
      image: images.basketBallTeamImg,
      title: 'Basketball',
      scheduleListUrlLink:
        'https://roarlions.com/sports/mens-basketball/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/mens-basketball/roster',
      newsUrlLink: 'https://roarlions.com/sports/mens-basketball',
    },
    {
      id: 3,
      bool: false,
      image: images.crossCountryTeamImg,
      title: 'Cross Country',
      scheduleListUrlLink:
        'https://roarlions.com/sports/mens-cross-country/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/mens-cross-country/roster',
      newsUrlLink: 'https://roarlions.com/sports/mens-cross-country',
    },
    {
      id: 4,
      bool: false,
      image: images.footBallTeamImg,
      title: 'FootBall',
      scheduleListUrlLink: 'https://roarlions.com/sports/football/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/football/roster',
      newsUrlLink: 'https://roarlions.com/sports/football',
    },
    {
      id: 5,
      bool: false,
      image: images.golfTeamImg,
      title: 'Golf',
      scheduleListUrlLink: 'https://roarlions.com/sports/mens-golf/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/mens-golf/roster',
      newsUrlLink: 'https://roarlions.com/sports/mens-golf',
    },
    {
      id: 6,
      bool: false,
      image: images.tennisTeamImg,
      title: 'Tennis',
      scheduleListUrlLink: 'https://roarlions.com/sports/mens-tennis/schedule',
      rosterUrlLink: 'https://roarlions.com/sports/mens-tennis/roster',
      newsUrlLink: 'https://roarlions.com/sports/mens-tennis',
    },
  ]);

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

  const modalHandler = value => {
    const updatedData = data.map(item => {
      if (item.id === value.id) {
        return {...item, bool: !item.bool}; // Update 'bool' to true for the matching id
      }
      return item;
    });
    setData(updatedData);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => modalHandler(item)}
        style={styles.buttonItem}>
        <View style={styles.topImageEventContainer}>
          <View style={styles.containerText}>
            <Image
              style={styles.imageEventStyle}
              resizeMode="contain"
              source={item?.image}
            />
            <View style={styles.mainEventTextContainer}>
              <Text style={styles.titleTextNameEvent}>{item?.title}</Text>
            </View>
          </View>
          <View style={styles.arrowImageContainerStyle}>
            {item.bool ? (
              <Image
                style={styles.arrowImageStyle}
                resizeMode="contain"
                source={images.starCheckedIcon}
              />
            ) : (
              <Image
                style={styles.arrowImageStyle}
                resizeMode="contain"
                source={images.starUnCheckedIcon}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <MainContainer>
      <View style={styles.topImageContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonStyle}>
          <Image
            style={styles.backArrowStyle}
            resizeMode="contain"
            source={images.backRosterImage}
          />
        </TouchableOpacity>
        <Text style={styles.headingTextHeader}>Favorite teams</Text>
        <View style={styles.lastContainerTop} />
      </View>
      {isLoading ? (
        <View style={styles.secondContainer}>
          <ActivityIndicator size={20} color={colors.inActiveColor} />
        </View>
      ) : (
        <View style={styles.secondContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </MainContainer>
  );
};

export default FavoriteScreen;
