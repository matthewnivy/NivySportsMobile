import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL10,
  headers: header.jsonHeader,
});

//getRosterFromUrlListApi Api
export const getGameProgramsListApi = () => {
  return instance
    .get(`${endpoints.getGameProgramsList}?orgId=UNA_LIONS`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
