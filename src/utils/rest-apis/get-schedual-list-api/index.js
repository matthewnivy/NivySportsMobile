import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL9,
  headers: header.jsonHeader,
});

//getScheduleListApi Api
export const getScheduleListApi = scheduleListUrlLink => {
  return instance
    .get(`${endpoints.scheduleList}?teamURL=${scheduleListUrlLink}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
