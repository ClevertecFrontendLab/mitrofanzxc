import axios from 'axios';

export enum API {
  BaseUrl = 'https://strapi.cleverland.by',
  Catalog = '/api/books',
  Categories = '/api/categories',
  Book = '/api/books/',
  Register = '/api/auth/local/register',
  Auth = '/api/auth/local',
  PasswordReset = '/api/auth/forgot-password',
  PasswordRecovery = '/api/auth/reset-password',
}

export const cleverlandConfig = axios.create({
  baseURL: API.BaseUrl,
});
