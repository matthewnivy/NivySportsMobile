import axios from 'axios';
import {endpoints, header} from '../endpoints';

import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.BASE_URL11,
  headers: header.jsonHeader,
});

//sendNotificationToSubscribers Api
export const sendNotificationToSubscribersApi = (
  teamName,
  title,
  description,
  dateTime,
) => {
  return instance
    .post(`${endpoints.sendNotificationToSubscribers}`, {
      teamName: teamName,
      title: title,
      description: description,
      dateTime: dateTime,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
