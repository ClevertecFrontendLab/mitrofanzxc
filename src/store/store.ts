import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './slices/book/book-slice';
import catalogReducer from './slices/catalog/catalog-slice';
import categoriesReducer from './slices/categories/categories-slice';
import mobileMenuReducer from './slices/mobile-menu/mobile-menu-slice';
import registrationReducer from './slices/registration/registration-slice';
import toastReducer from './slices/toast/toast-slice';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    book: bookReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    mobileMenu: mobileMenuReducer,
    toast: toastReducer,
    registration: registrationReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
