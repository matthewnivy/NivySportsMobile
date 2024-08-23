import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: header.jsonHeader,
});

//Verify Customer Account Api
export const verifyCustomerAccountApi = (phone, verificationCode) => {
  return instance
    .post(`${endpoints.verifyCustomerAccount}`, {
      phone: phone,
      verificationCode: verificationCode,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
