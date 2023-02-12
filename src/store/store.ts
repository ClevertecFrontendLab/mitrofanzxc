/* eslint-disable-next-line import/no-extraneous-dependencies */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './slices/book-slice';
import catalogReducer from './slices/catalog-slice';
import categoriesReducer from './slices/categories-slice';
import mobileMenuReducer from './slices/mobile-menu-slice';
import registrationReducer from './slices/registration-slice';
import searchReducer from './slices/search-slice';
import toastReducer from './slices/toast-slice';
import { bookSaga, catalogSaga, categoriesSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    book: bookReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    mobileMenu: mobileMenuReducer,
    toast: toastReducer,
    registration: registrationReducer,
    search: searchReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(catalogSaga);
sagaMiddleware.run(bookSaga);
sagaMiddleware.run(categoriesSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
