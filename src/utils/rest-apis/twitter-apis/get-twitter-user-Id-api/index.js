import axios from 'axios';

import {header} from '../../endpoints';

const BaseURLTwitter = `https://api.twitter.com/2/users/by/username/UNAAthletics`;

const instance = axios.create({
  baseURL: BaseURLTwitter,
  headers: header.twitterApiHeader,
});

//Get User Id Api Api
export const getUserIdApi = () => {
  return instance
    .get()
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
