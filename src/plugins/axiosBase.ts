import axios from 'axios';

export const axiosBase = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  },
  proxy: false,
  responseType: 'json',
  withCredentials: false,
});
