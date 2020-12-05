import axios from 'axios';

import {CONFIG_SERVICE} from './config';

const client = axios.create({
  baseURL: CONFIG_SERVICE.BASE_API_URL,
  timeout: Number(CONFIG_SERVICE.TIME_OUT),
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  async response => {
    const originalConfig = response;
    try {
      return originalConfig;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default client;
