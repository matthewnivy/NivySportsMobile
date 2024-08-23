import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';
import {setLogionSessionDetails} from '../../preferences/localStorage';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: header.jsonHeader,
});

//Login Api
export const customerLogIn = (phone, password, deviceId) => {
  return instance
    .post(`${endpoints.customerLogIn}`, {
      organizationId: 'UNA_LIONS',
      phone: phone,
      password: password,
      deviceId: deviceId,
    })
    .then(function (response) {
      setLogionSessionDetails(response?.data?.content?.token);
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
