import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './slices/book/book-slice';
import catalogReducer from './slices/catalog/catalog-slice';
import categoriesReducer from './slices/categories/categories-slice';
import loaderReducer from './slices/loader/loader-slice';
import mobileMenuReducer from './slices/mobile-menu/mobile-menu-slice';
import modalReducer from './slices/modal/modal-slice';
import registrationReducer from './slices/registration/registration-slice';
import searchReducer from './slices/search/search-slice';
import toastReducer from './slices/toast/toast-slice';
import { bookSaga, catalogSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    book: bookReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    loader: loaderReducer,
    mobileMenu: mobileMenuReducer,
    modal: modalReducer,
    toast: toastReducer,
    registration: registrationReducer,
    search: searchReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(catalogSaga);
sagaMiddleware.run(bookSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
