import axios from 'axios';

import {header} from '../../endpoints';

const BaseURLTwitter = `https://api.twitter.com/2/users?ids=761730780&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld&expansions=pinned_tweet_id`;

const instance = axios.create({
  baseURL: BaseURLTwitter,
  headers: header.twitterApiHeader,
});

//Get User Details Api Api
export const getUserAccountDetailsApi = () => {
  return instance
    .get()
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      return error;
    });
};
