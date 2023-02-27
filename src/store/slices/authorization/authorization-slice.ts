import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationRequest, AuthorizationResponse } from '../slices.types';

import { initialState } from './initial-state';

export const authorizationSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'authorization',
  initialState,
  reducers: {
    authorizationRequest: (state, action: PayloadAction<AuthorizationRequest>) => {
      state.isError = false;
      state.isLoading = true;
    },
    authorizationRequestSuccess: (state, action: PayloadAction<AuthorizationResponse>) => {
      state.authorizationResponse = action.payload;
      state.isLoading = false;
    },
    authorizationRequestError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { authorizationRequest, authorizationRequestSuccess, authorizationRequestError } =
  authorizationSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default authorizationSlice.reducer;
