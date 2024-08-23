import axios from 'axios';

import {header} from '../../endpoints';

const BaseURLTwitter = `https://api.twitter.com/2/tweets/`;

const instance = axios.create({
  baseURL: BaseURLTwitter,
  headers: header.twitterApiHeader,
});

//Get User Details Api Api
export const getTweetLikingApi = tweetid => {
  return instance
    .get(`${tweetid}/liking_users`)
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      return error;
    });
};
