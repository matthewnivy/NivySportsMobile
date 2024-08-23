import axios from 'axios';
import {endpoints, header} from '../endpoints';

import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: header.jsonHeader,
});

//Get Customer Score Points Api
export const getCustomerScorePointsApi = (userId, token) => {
  const newInstance = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization: `Bearer ${token}`},
  });

  return newInstance
    .post(`${endpoints.getCustomerScorePoints}`, {
      userId: userId,
      venueId: 'string',
      orgId: 'UNA_LIONS',
      token: token,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
