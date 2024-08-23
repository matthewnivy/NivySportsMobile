import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL3,
  headers: header.jsonHeader,
});

//GetCustomerRewardListApi Api
export const getCustomerRewardListApi = userId => {
  return instance
    .post(`${endpoints.getCustomerRewardList}`, {
      userId: userId,
      venueId: '',
      orgId: 'UNA_LIONS',
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
