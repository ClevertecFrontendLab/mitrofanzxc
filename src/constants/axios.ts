import axios from 'axios';
import { getToken } from 'utils';

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

    console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

cleverlandConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('error ===', error);
    const originalRequest = error.config;

    if (error.response.status === 400) {
      console.log('Неверный логин или пароль');
    }

    // if (error.response.status === 401 && error.config && !error.config._isRetry) {
    //   originalRequest._isRetry = true;
    //   try {
    //     const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
    //     localStorage.setItem('token', response.data.accessToken);
    //     return $api.request(originalRequest);
    //   } catch (e) {
    //     console.log('НЕ АВТОРИЗОВАН');
    //   }
    // }

    return Promise.reject(error);
  }
);
