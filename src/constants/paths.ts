import { TPATHS } from './constants.types';

export const PATHS: TPATHS = {
  main: '/',
  booksAll: '/books/all',
  booksCategory: '/books/:category',
  bookPage: '/books/:category/:bookId',
  profile: '/profile',
  terms: '/terms',
  contract: '/contract',
  any: '*',
};

export const BASE_URL_API = 'https://strapi.cleverland.by';
