import { configureStore } from '@reduxjs/toolkit';

import catalogReducer from './slices/catalog-slice';
import loaderReducer from './slices/loader-slice';
import mobileMenuReducer from './slices/mobile-menu-slice';
import registrationReducer from './slices/registration-slice';
import toastReducer from './slices/toast-slice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    mobileMenu: mobileMenuReducer,
    toast: toastReducer,
    loader: loaderReducer,
    registration: registrationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
