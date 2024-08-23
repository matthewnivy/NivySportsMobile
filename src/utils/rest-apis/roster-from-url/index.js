import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL9,
  headers: header.jsonHeader,
});

//getRosterFromUrlListApi Api
export const getRosterFromUrlListApi = urlRoster => {
  return instance
    .get(`${endpoints.rostersListFromUrl}?teamURL=${urlRoster}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
