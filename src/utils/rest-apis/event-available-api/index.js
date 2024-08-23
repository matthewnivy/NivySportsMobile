import axios from 'axios';
import {endpoints, header} from '../endpoints';

import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.BASE_URL6,
  headers: header.jsonHeader,
});

//Event Available Api
export const eventAvailableApi = () => {
  return instance
    .get(`${endpoints.eventAvailable}?OrgId=UNA_LIONS`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
