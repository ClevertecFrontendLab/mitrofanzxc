import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import authorizationReducer from './slices/authorization/authorization-slice';
import bookReducer from './slices/book/book-slice';
import catalogReducer from './slices/catalog/catalog-slice';
import categoriesReducer from './slices/categories/categories-slice';
import mobileMenuReducer from './slices/mobile-menu/mobile-menu-slice';
import passwordRecoveryReducer from './slices/forgot-pass/forgot-pass-slice';
import passwordResetReducer from './slices/password-reset/password-reset-slice';
import registrationReducer from './slices/registration/registration-slice';
import toastReducer from './slices/toast/toast-slice';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    book: bookReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    mobileMenu: mobileMenuReducer,
    passwordRecovery: passwordRecoveryReducer,
    passwordReset: passwordResetReducer,
    registration: registrationReducer,
    toast: toastReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
