import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL6,
  headers: header.jsonHeader,
});

//getOrganizationEventListApi Api
export const getOrganizationEventListApi = orgId => {
  return instance
    .get(`${endpoints.getOrganizationEventList}?organizationId=UNA_LIONS`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
