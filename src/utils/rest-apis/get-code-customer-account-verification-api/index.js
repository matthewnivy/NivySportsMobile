import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: header.jsonHeader,
});

//Verify Customer Account Api
export const getCodeCustomerAccountVerificationApi = mobileNo => {
  return instance
    .get(
      `${endpoints.GetCodeCustomerAccountVerification}?mobileNo=${mobileNo}&OrgId=UNA_LIONS`,
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
