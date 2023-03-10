import axios from 'axios';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { CustomError, getToken } from 'utils';

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

cleverlandConfig.interceptors.request.use(
  (config) => {
    /* eslint-disable no-param-reassign */
    const token = getToken();

    config.headers = config.headers ?? {};

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

cleverlandConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('error ===', error);

    if (error.response.status === 400) {
      throw new CustomError(TextFieldMessage.WrongLoginOrPassword);
    }

    return Promise.reject(error);
  }
);
