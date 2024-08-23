import axios from 'axios';
import {Alert} from 'react-native';

const BaseURLTwitter = `https://nivyapi-develop.azurewebsites.net/api/Twitter/GetTwitterAccessCode`;

const instance = axios.create({
  baseURL: BaseURLTwitter,
});

//get User Time Line Id Api
export const getTwitterAccessTokenApi = () => {
  return instance
    .get()
    .then(function (response) {
      if (response.status === 200) {
        return response.data;
      } else {
        Alert.alert('Something went wrong');
      }
    })
    .catch(function (error) {
      return error;
    });
};
