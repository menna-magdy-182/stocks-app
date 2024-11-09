import axios from 'axios';
import {API_KEY, API_VERSION, BASE_URL} from 'constants/common';

const apiClient = axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => {
    if (API_KEY) {
      config.params = {...config.params, apiKey: API_KEY};
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Promise.reject(error);
  },
);

export default apiClient;
