// import axios from 'axios';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { CustomError400, CustomError500, getToken } from 'utils';

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
  headers: {
    'Content-Type': 'application/json',
  },
});

cleverlandConfig.defaults.headers.common.Authorization = getToken();

cleverlandConfig.interceptors.request.use(
  (config) => {
    /* eslint-disable no-param-reassign */
    const token = getToken();

    // config.headers.set('Authorization', `${token}`);
    if (token) {
      // config.headers = config.headers ?? {};
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// cleverlandConfig.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // const token = Cookies.get('token');
//     const token = getToken();

//     if (token) {
//       // return {
//       //   ...config,
//       //   headers: {
//       //     ...config.headers,
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       // };
//       config.headers.set('Authorization', `${token}`);
//     }

//     return config;
//   },
//   (error: Error & AxiosError) => Promise.reject(error)
// );

cleverlandConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('error ===', error);

    if (error.response.status === 400) {
      throw new CustomError400('ERROR_400');
    }

    if (error.response.status === 500) {
      throw new CustomError500('ERROR_500');
    }

    return Promise.reject(error);
  }
);
