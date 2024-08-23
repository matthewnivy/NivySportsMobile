import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  BackHandler,
} from 'react-native';

import {MainContainer} from '../../hoc';
import {styles} from './styles';
import {colors, customLables, images} from '../../comman';
import {
  getOrganizationEventListApi,
  getRosterFromUrlListApi,
  getRosterListApi,
} from '../../utils/rest-apis';

const RosterScreen = props => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [eventApiData, setEventApiData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

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

  useEffect(() => {
      getRosterFromUrlListApiHandler();
  }, []);

  const backNavigationHandler = () => navigation.goBack();

  const getRosterFromUrlListApiHandler = async () => {
    try {
      setIsLoading(true);
      const response = await getRosterFromUrlListApi();
      if (response.success === true) {
        setEventApiData(prevData => [...prevData, ...response?.content]);
        setIsLoading(false);
        setIsRefreshing(false);
      } else {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const getRosterFromUrlListApiRefreshHandler = async () => {
    try {
      const response = await getRosterFromUrlListApi();
      if (response.success === true) {
        setEventApiData(response?.content);
        setIsRefreshing(false);
      } else {
        setIsRefreshing(false);
      }
    } catch (error) {
      setIsRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    getRosterFromUrlListApiRefreshHandler();
  };

  const handleEndReached = async () => {
    // You can implement additional logic here if needed
    // For example, fetch more data from the API to show additional items in the list.
    try {
      const response = await getRosterFromUrlListApi();
      if (response.success === true) {
        setEventApiData(prevData => [...prevData, ...response?.content]);
        setIsRefreshing(false);
      } else {
        setIsRefreshing(false);
      }
    } catch (error) {
      setIsRefreshing(false);
    }
  };

  const renderItem = ({item, index}) => {
    const handleHeightString = str => {
      return str.replace(/&quot;/g, '"').replace(/\u0027/g, "'");
    };
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {}}
        style={styles.buttonItem}>
        <View style={styles.topImageEventContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageEventStyle}
              resizeMode="contain"
              source={{uri: `https://roarlions.com${item?.image}`}}
            />
          </View>
          <View style={styles.mainEventTextContainer}>
            <Text style={styles.titleTextEvent}>
              {item?.position}/{handleHeightString(item?.height)}/{item?.weight}
            </Text>
            <Text style={styles.titleTextName}>{item?.name}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.titleTextFooter}>
                <Text style={styles.acadamicLabelStyle}>{item?.academic}</Text>{' '}
                / {item?.homeTown} / {item?.highSchool} / {item?.previousSchool}
              </Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.circle}>
              <Text style={styles.number}>{index}</Text>
            </View>
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

  return (
    <MainContainer>
      <View style={styles.topImageContainer}>
        <TouchableOpacity onPress={backNavigationHandler}>
          <Image
            style={styles.backRosterImageStyle}
            resizeMode="contain"
            source={images.backRosterImage}
          />
        </TouchableOpacity>
        <Text style={styles.headingTextHeader}>Football Roster</Text>
        <View style={styles.spacerHeader} />
      </View>

      {isLoading ? (
        <View style={styles.secondContainer}>
          <ActivityIndicator size={120} color={colors.inActiveColor} />
        </View>
      ) : (
        <View style={styles.secondContainer}>
          {eventApiData.length === 0 ? (
            <View style={styles.centeredView} />
          ) : (
            <FlatList
              data={eventApiData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={handleRefresh}
                />
              }
              onEndReached={handleEndReached}
              onEndReachedThreshold={0.1}
              onScroll={() => {
                setIsEndReached(false);
              }}
            />
          )}
        </View>
      )}
    </MainContainer>
  );
};

export default RosterScreen;
