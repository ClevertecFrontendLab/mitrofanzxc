/* eslint-disable-next-line import/no-extraneous-dependencies */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import catalogReducer from './slices/catalog-slice';
import loaderReducer from './slices/loader-slice';
import mobileMenuReducer from './slices/mobile-menu-slice';
import registrationReducer from './slices/registration-slice';
import toastReducer from './slices/toast-slice';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    mobileMenu: mobileMenuReducer,
    toast: toastReducer,
    loader: loaderReducer,
    registration: registrationReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
