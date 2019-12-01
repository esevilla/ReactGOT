import axios from 'axios';
import {BASE_URL} from '../config/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

// export const setToken = token => {
//   instance.defaults.headers.common['Authorization'] = token;
// };

export const getHouses = () => {
  const url = '/casas';
  return instance.get(url);
};

export const getHouseCharacters = houseId => {
  const url = `/personajes?casa=${houseId}`;
  return instance.get(url);
};
