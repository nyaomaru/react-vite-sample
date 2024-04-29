import axios from 'axios';

export const axiosBase = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  proxy: false,
  responseType: 'json',
});
