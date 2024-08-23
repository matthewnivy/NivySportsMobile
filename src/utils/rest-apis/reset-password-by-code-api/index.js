import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: header.jsonHeader,
});

//resetPasswordByCodeApi Api
export const resetPasswordByCodeApi = (code, newPassword) => {
  return instance
    .post(`${endpoints.resetPasswordByCode}`, {
      code: code,
      newPassword: newPassword,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
