import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import axios, { AxiosError } from 'axios';

import { interceptRequest } from '../../utils';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
let store: ToolkitStore;

export const injectStore = (_store: ToolkitStore) => {
  store = _store;
};

export const cleverlandConfig = axios.create({
  baseURL: 'https://dummyjson.com',
});

cleverlandConfig.interceptors.request.use(
  (config) => {
    interceptRequest({ isLoading: true, isSuccess: false });

    return config;
  },
  (error: AxiosError) => {
    interceptRequest({ isLoading: false, isSuccess: false });

    return Promise.reject(error);
  }
);

cleverlandConfig.interceptors.response.use(
  (response) => {
    interceptRequest({ isLoading: false, isSuccess: true });

    return response;
  },
  (error: AxiosError) => {
    interceptRequest({ isLoading: false, isSuccess: false });

    return Promise.reject(error);
  }
);
