import axios from 'axios';

export enum API {
  BaseUrl = 'https://strapi.cleverland.by',
  Catalog = '/api/books',
  Categories = '/api/categories',
  Book = '/api/books/',
}

export const cleverlandConfig = axios.create({
  baseURL: API.BaseUrl,
});
