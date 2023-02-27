import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import {
  PasswordRecoveryRequest,
  PasswordRecoveryResponse,
  PasswordResetRequest,
  PasswordResetResponse,
} from '../slices.types';

import { initialState } from './initial-state';

export const forgotPassSlice = createSlice({
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
    passwordResetRequest: (state, action: PayloadAction<PasswordResetRequest>) => {
      state.isError = false;
      state.isLoading = true;
    },
    passwordResetRequestSuccess: (state, action: PayloadAction<PasswordResetResponse>) => {
      state.passwordResetResponse = action.payload;
      state.isLoading = false;
    },
    passwordResetRequestError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    openPasswordRecovery: (state) => {
      state.isPasswordRecovery = true;
    },
    closePasswordRecovery: (state) => {
      state.isPasswordRecovery = false;
    },
    openNewPassword: (state) => {
      state.isLetterReceived = true;
    },
    closeNewPassword: (state) => {
      state.isLetterReceived = false;
    },
  },
});

export const {
  passwordRecoveryRequest,
  passwordRecoveryRequestSuccess,
  passwordRecoveryRequestError,
  passwordResetRequest,
  passwordResetRequestSuccess,
  passwordResetRequestError,
  openPasswordRecovery,
  closePasswordRecovery,
  openNewPassword,
  closeNewPassword,
} = forgotPassSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default forgotPassSlice.reducer;
