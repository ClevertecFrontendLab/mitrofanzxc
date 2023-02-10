export interface IPATHS {
  main: string;
  booksAll: string;
  booksCategory: string;
  bookPage: string;
  profile: string;
  terms: string;
  contract: string;
  any: string;
}

export const PATHS: IPATHS = {
  main: '/',
  booksAll: '/books/all',
  booksCategory: '/books/:category',
  bookPage: '/books/:category/:bookId',
  profile: '/profile',
  terms: '/terms',
  contract: '/contract',
  any: '*',
};
