import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { PasswordRecoveryRequest, PasswordRecoveryResponse } from '../slices.types';

import { initialState } from './initial-state';

export const PasswordRecoverySlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'passwordRecovery',
  initialState,
  reducers: {
    passwordRecoveryRequest: (state, action: PayloadAction<PasswordRecoveryRequest>) => {
      state.isError = false;
      state.isLoading = true;
    },
    passwordRecoveryRequestSuccess: (state, action: PayloadAction<PasswordRecoveryResponse>) => {
      state.passwordRecoveryResponse = action.payload;
      state.isLoading = false;
    },
    passwordRecoveryRequestError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { passwordRecoveryRequest, passwordRecoveryRequestSuccess, passwordRecoveryRequestError } =
  PasswordRecoverySlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default PasswordRecoverySlice.reducer;
