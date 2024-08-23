import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from 'react-native';

import {MainContainer} from '../../hoc';
import {styles} from './styles';
import {colors, images} from '../../comman';
import BackIcon from '../../comman/images/backIcon.svg';
import {getRosterNewsFromUrlListApi} from '../../utils/rest-apis';
import WebView from 'react-native-webview';
import {ApplicationContext} from '../../context-api/Context';

const NewsScreen = props => {
  const {navigation} = props;
  const {newsData} = useContext(ApplicationContext);
  const [imageLoading, setImageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showNewsErrorMessage, setNewsShowErrorMessage] = useState(false);
  const [urlLinkBool, setUrlLinkBool] = useState(false);
  const [urlLink, setUrlLink] = useState('');
  const [eventNewsApiData, setEventNewsApiData] = useState([]);

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
    getOrganizationNewsEventListApiResponse('https://roarlions.com/index.aspx');
  }, []);

  // Get news list from the API
  const getOrganizationNewsEventListApiResponse = async newsListUrlLink => {
    setIsLoading(true);
    let apiVal = await getRosterNewsFromUrlListApi(newsListUrlLink);
    try {
        if (apiVal?.status === 200) {
          if (apiVal?.content?.length === 0) {
            setNewsShowErrorMessage(true);
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

  const handleImageLoad = () => setImageLoading(true);

  const handleImageLoadEnd = () => {
    // This callback is called when the image loading process is complete
    setImageLoading(false);
  };

  const closeWebViewHandler = () => setUrlLinkBool(false);

  const goBackHandler = () => navigation.goBack();

  const renderNewsItem = ({item, index}) => {
    const urlLink = item?.url;
    const newurlLink = urlLink.replace(
      'http://www.roarlions.com/',
      'https://www.roarlions.com/',
    );
    const imageUrl = item.image;

    const imageUrlDetail = imageUrl.replace(
      'http://www.roarlions.com/',
      'https://www.roarlions.com/',
    );

    const onPressHandler = () => {
      setUrlLink(newurlLink);
      setUrlLinkBool(true);
    };

    return (
      <TouchableOpacity
        key={index}
        onPress={onPressHandler}
        style={styles.buttonItem}>
        <View style={styles.topEventNewsContainer}>
          <View style={styles.imageContainer}>
            {isLoading && (
              <ActivityIndicator color={colors.buttonPrimary} size={20} />
            )}
            <Image
              style={styles.imageEventStyle}
              resizeMode="contain"
              onLoad={handleImageLoad}
              onLoadEnd={handleImageLoadEnd}
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
  // Display the news list
  return (
    <>
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
          <View style={styles.topHeadingContainer}>
            <TouchableOpacity onPress={goBackHandler} style={styles.backButtonStyle}>
              <Image
                style={styles.backArrowStyle}
                resizeMode="contain"
                source={images.backRosterImage}
              />
            </TouchableOpacity>
            <Text style={styles.headingTextHeader}>News</Text>
            <View style={styles.lastContainerTop} />
          </View>
          {isLoading ? (
            <View style={styles.secondContainer}>
              <ActivityIndicator size={20} color={colors.inActiveColor} />
            </View>
          ) : (
            <View style={styles.secondContainer}>
              {showNewsErrorMessage ? (
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
            </View>
          )}
        </MainContainer>
      )}
    </>
  );
};

export default NewsScreen;
