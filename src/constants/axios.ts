import axios from 'axios';
import { getLocalStorage } from 'utils';

import { LocalStorage } from './local-storage';

export enum API {
  BaseUrl = 'https://strapi.cleverland.by',
  Authorization = '/api/auth/local',
  Book = '/api/books/',
  Catalog = '/api/books',
  Categories = '/api/categories',
  PasswordRecovery = '/api/auth/reset-password',
  PasswordReset = '/api/auth/forgot-password',
  Registration = '/api/auth/local/register',
}

export const cleverlandConfig = axios.create({
  baseURL: API.BaseUrl,
  withCredentials: true,
});

cleverlandConfig.interceptors.request.use((config) => {
  /* eslint-disable no-param-reassign */
  const token: string | null = getLocalStorage(LocalStorage.Token);

  console.log('token ===', token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
