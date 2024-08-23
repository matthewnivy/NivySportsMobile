import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL7,
  headers: header.jsonHeader,
});

//GetCustomerRewardListApi Api
export const firebaseApi = deviceToken => {
  return instance
    .post(`${endpoints.send}`, {
      deviceId: deviceToken,
      isAndroiodDevice: true,
      title: 'Test UNA Mobile side',
      body: 'una app',
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
