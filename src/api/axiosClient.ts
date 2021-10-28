import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { StorageKeys } from 'constants/index';

const axiosClient = axios.create({
  baseURL: 'https://json-server-kctrnn.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const customHeaders: AxiosRequestHeaders = {};

    const accessToken = localStorage.getItem(StorageKeys.TOKEN);
    if (accessToken) {
      customHeaders.Authorization = `Bearer ${accessToken}`;
    }

    return {
      ...config,
      headers: {
        ...customHeaders, // auto attach token
        ...config.headers, // can override for some requests
      },
    };
  },

  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
