export enum Path {
  Main = '/',
  BooksAll = '/books/all',
  BooksCategory = '/books/:category',
  BookPage = '/books/:category/:bookId',
  Profile = '/profile',
  Terms = '/terms',
  Contract = '/contract',
  Authorization = '/auth',
  Registration = '/registration',
  ForgotPass = '/forgot-pass',
  Any = '*',
}
