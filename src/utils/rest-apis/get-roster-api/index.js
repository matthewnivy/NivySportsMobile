import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL8,
  headers: header.jsonHeader,
});

//getRosterListApi Api
export const getRosterListApi = () => {
  return instance
    .get(`${endpoints.getRosterList}?organizationId=UNA_LIONS`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
