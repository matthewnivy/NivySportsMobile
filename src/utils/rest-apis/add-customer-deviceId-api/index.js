import axios from 'axios';
import {endpoints, header} from '../endpoints';

import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: header.jsonHeader,
});

//addCustomerDeviceIdApi Api
export const addCustomerDeviceIdApi = deviceId => {
  return instance
    .post(`${endpoints.addCustomerDeviceId}`, {
      deviceId: deviceId,
      organizationId: 'UNA_LIONS',
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
