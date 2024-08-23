import axios from 'axios';
import Config from 'react-native-config';

import {endpoints, header} from '../endpoints';

const instance = axios.create({
  baseURL: Config.BASE_URL6,
  headers: header.jsonHeader,
});

//upcomingEventsApi Api
export const upcomingEventsApi = venueId => {
  return instance
    .get(`${endpoints.upcomingEvents}?venueId=${venueId}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
