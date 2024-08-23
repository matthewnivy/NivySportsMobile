import axios from 'axios';
import {Alert} from 'react-native';

import {header} from '../../endpoints';

//get Twitter Image Id Api
export const getTwitterImageApi = tweetId => {
  const BaseURLTwitter = `https://api.twitter.com/2/tweets?ids=${tweetId}&expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text`;
  const instance = axios.create({
    baseURL: BaseURLTwitter,
    headers: header.twitterApiHeader,
  });
  return instance
    .get()
    .then(function (response) {
      if (response?.status === 200) return response?.data?.includes;
      else Alert.alert('Something went wrong');
    })
    .catch(function (error) {
      return error;
    });
};
