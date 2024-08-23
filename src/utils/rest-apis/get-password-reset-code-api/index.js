import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: header.jsonHeader,
});

//getPasswordResetCodeApi Api
export const getPasswordResetCodeApi = phoneNo => {
  return instance
    .get(
      `${endpoints.getPasswordResetCode}?mobileNo=${phoneNo}&OrgId=UNA_LIONS`,
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
