import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TextFieldMessage } from 'components/text-field/text-field.types';

import { AuthorizationRequest, AuthorizationResponse } from '../slices.types';

import {
  AUTHORIZATION_REQUEST_WITH_INITIAL_DATA,
  AUTHORIZATION_RESPONSE_WITH_INITIAL_DATA,
  initialState,
} from './initial-state';

export const authorizationSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'authorization',
  initialState,
  reducers: {
    authorizationRequest: (state, action: PayloadAction<AuthorizationRequest>) => {
      state.authorizationRequest = action.payload;
      state.authorizationResponse = AUTHORIZATION_RESPONSE_WITH_INITIAL_DATA;
      state.errorMessage = '';
      state.isAuth = false;
      state.isLoading = true;
      state.isError = false;
    },
    authorizationRequestSuccess: (state, action: PayloadAction<AuthorizationResponse>) => {
      state.authorizationRequest = AUTHORIZATION_REQUEST_WITH_INITIAL_DATA;
      state.authorizationResponse = action.payload;
      state.errorMessage = '';
      state.isAuth = true;
      state.isLoading = false;
      state.isError = false;
    },
    authorizationRequestError: (state) => {
      state.authorizationRequest = AUTHORIZATION_REQUEST_WITH_INITIAL_DATA;
      state.authorizationResponse = AUTHORIZATION_RESPONSE_WITH_INITIAL_DATA;
      state.errorMessage = '';
      state.isAuth = false;
      state.isLoading = false;
      state.isError = true;
    },
    logout: (state) => {
      state.authorizationRequest = AUTHORIZATION_REQUEST_WITH_INITIAL_DATA;
      state.authorizationResponse = AUTHORIZATION_RESPONSE_WITH_INITIAL_DATA;
      state.errorMessage = '';
      state.isAuth = false;
      state.isLoading = false;
      state.isError = false;
    },
    setErrorMessage: (state, action: PayloadAction<string | TextFieldMessage>) => {
      state.authorizationRequest = AUTHORIZATION_REQUEST_WITH_INITIAL_DATA;
      state.authorizationResponse = AUTHORIZATION_RESPONSE_WITH_INITIAL_DATA;
      state.errorMessage = action.payload;
      state.isAuth = false;
      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const { authorizationRequest, authorizationRequestSuccess, authorizationRequestError, logout, setErrorMessage } =
  authorizationSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default authorizationSlice.reducer;
