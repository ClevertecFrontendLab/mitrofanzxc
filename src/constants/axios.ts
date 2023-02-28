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
  withCredentials: true,
  baseURL: API.BaseUrl,
});

cleverlandConfig.interceptors.request.use((config) => {
  const result = { ...config };

  result.headers.Authorization = `Bearer ${getLocalStorage(LocalStorage.Token)}`;

  return result;
});
