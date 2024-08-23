import axios from 'axios';
import {header} from '../../endpoints';

const BaseURLTwitter = `https://api.twitter.com/2/users/761730780/tweets?tweet.fields=created_at`;

const instance = axios.create({
  baseURL: BaseURLTwitter,
  headers: header.twitterApiHeader,
});

//get User Time Line Id Api
export const getUserTimeLineIdApi = () => {
  return instance
    .get()
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
