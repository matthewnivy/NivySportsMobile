import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL9,
  headers: header.jsonHeader,
});

//getScheduleApi Api
export const getScheduleApi = () => {
  return instance
    .get(`${endpoints.schedules}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
