import axios from 'axios';
import { getLocalStorage } from 'utils';

import { LocalStorage } from './local-storage';

export enum API {
  BaseUrl = 'https://strapi.cleverland.by',
  Catalog = '/api/books',
  Categories = '/api/categories',
  Book = '/api/books/',
  Registration = '/api/auth/local/register',
  Authorization = '/api/auth/local',
  PasswordReset = '/api/auth/forgot-password',
  PasswordRecovery = '/api/auth/reset-password',
}

export const cleverlandConfig = axios.create({
  withCredentials: true,
  baseURL: API.BaseUrl,
});

cleverlandConfig.interceptors.request.use((config) => {
  const result = { ...config };

  result.headers.Authorization = `Bearer ${getLocalStorage(LocalStorage.Token)}`;

  return result;
});
