import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL9,
  headers: header.jsonHeader,
});

//getRosterNewsFromUrlListApi Api
export const getRosterNewsFromUrlListApi = urlRoster => {
  return instance
    .get(`${endpoints.newsList}?teamURL=${urlRoster}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
