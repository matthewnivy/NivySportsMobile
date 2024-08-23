import React, {useState, useEffect} from 'react';
import {View, Image, Platform, Text} from 'react-native';
import moment from 'moment';

import {
  getQuoteTweetRetweetApi,
  getTweetLikingApi,
  getTweetRetweetApi,
  getTwitterImageApi,
} from '../../utils/rest-apis/twitter-apis';
import {colors, VectorIcon} from '../../comman';
import {styles} from './styles';

const TwitterImageComponent = ({id, time}) => {
  const [twitterImageData, setTwitterImageData] = useState([]);
  const [likesCount, setLikesCount] = useState('');
  const [retweetCount, setRetweetCount] = useState('');
  const [quoteRetweetCount, setQuoteRetweetCount] = useState('');

  const getTwitterImageApiResponse = async id => {
    try {
      let apiVal = await getTwitterImageApi(id);
      if (apiVal?.media[0]?.url) {
        setTwitterImageData(twitterImageData => [
          ...twitterImageData,
          apiVal?.media[0]?.url,
        ]);
      }
    } catch (error) {
      return '';
    }
  };

  const getTweetLikingApiResponse = async tweetId => {
    try {
      let apiVal = await getTweetLikingApi(tweetId);
      setLikesCount(apiVal.length);
    } catch (error) {}
  };

  const getTweetRetweetApiResponse = async tweetId => {
    try {
      let apiVal = await getTweetRetweetApi(tweetId);
      setRetweetCount(apiVal.length);
    } catch (error) {}
  };

  const getQuoteTweetRetweetApiResponse = async tweetId => {
    try {
      let apiVal = await getQuoteTweetRetweetApi(tweetId);
      setQuoteRetweetCount(apiVal.length);
    } catch (error) {}
  };

  useEffect(() => {
    getTwitterImageApiResponse(id);
    getTweetLikingApiResponse(id);
    getTweetRetweetApiResponse(id);
    getQuoteTweetRetweetApiResponse(id);
  }, []);

  return (
    <View style={styles.rootContainer}>
      {twitterImageData[0] && (
        <Image
          source={{uri: twitterImageData[0]}}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      )}
      <View style={[twitterImageData[0] ? styles.mt0 : styles.mt10]}>
        <Text style={styles.timeTextStyle}>
          {moment(time).format('hh:mm A - MM/DD/YYYY')}
        </Text>
      </View>
      <View style={styles.mainRetweetContainer} />
      <View style={styles.retweetContianer}>
        <Text>{retweetCount ? retweetCount : '0'} Retweets</Text>
        <View style={styles.smallwidthStyle} />
        <Text>{quoteRetweetCount ? quoteRetweetCount : '0'} Quote Retweet</Text>
        <View style={styles.smallwidthStyle} />
        <Text>{likesCount ? likesCount : '0'} likes</Text>
      </View>

      <View style={styles.secondaryFooterContainerTop} />
      <View style={styles.mainFotterContianer}>
        <View style={styles.heartIconContainer}>
          <VectorIcon
            type={'AntDesign'}
            color={colors.red}
            name={likesCount ? 'heart' : 'hearto'}
            size={Platform.isPad ? 30 : 20}
          />
          <Text style={styles.heartIconText}>
            {likesCount ? likesCount : 0}
          </Text>
        </View>
        <View style={styles.horizontalSpacer} />
        <View style={styles.heartIconContainer}>
          <VectorIcon
            type={'Entypo'}
            color={colors.bluealertColor}
            name={'message'}
            size={Platform.isPad ? 30 : 25}
          />
          <Text style={styles.heartIconText}>Reply</Text>
        </View>
        <View style={styles.horizontalSpacer} />
        <View style={styles.heartIconContainer}>
          <VectorIcon
            type={'Feather'}
            color={colors.gray}
            name={'share'}
            size={Platform.isPad ? 30 : 20}
          />
          <Text style={styles.heartIconText}>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default TwitterImageComponent;
