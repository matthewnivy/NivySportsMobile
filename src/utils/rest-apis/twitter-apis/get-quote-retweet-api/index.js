import axios from 'axios';
import {header} from '../../endpoints';

import {BASE_URL_TWITTER} from '@env';

const instance = axios.create({
  baseURL: BASE_URL_TWITTER,
  headers: header.twitterApiHeader,
});

//Get User Details Api Api
export const getQuoteTweetRetweetApi = tweetid => {
  return instance
    .get(`${tweetid}/quote_tweets`)
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      return error;
    });
};
