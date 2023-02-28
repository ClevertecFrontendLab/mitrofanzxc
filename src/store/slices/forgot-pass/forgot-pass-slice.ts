import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import {
  PasswordRecoveryRequest,
  PasswordRecoveryResponse,
  PasswordResetRequest,
  PasswordResetResponse,
} from '../slices.types';

import {
  initialState,
  PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA,
  PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA,
  PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA,
  PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA,
} from './initial-state';

export const forgotPassSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'forgotPass',
  initialState,
  reducers: {
    passwordRecoveryRequest: (state, action: PayloadAction<PasswordRecoveryRequest>) => {
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = false;
      state.isLoading = true;
      state.isError = false;
    },
    passwordRecoveryRequestSuccess: (state, action: PayloadAction<PasswordRecoveryResponse>) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = action.payload;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = false;
      state.isLoading = false;
      state.isError = false;
    },
    passwordRecoveryRequestError: (state) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = false;
      state.isLoading = false;
      state.isError = true;
    },
    passwordResetRequest: (state, action: PayloadAction<PasswordResetRequest>) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = false;
      state.isLoading = true;
      state.isError = false;
    },
    passwordResetRequestSuccess: (state, action: PayloadAction<PasswordResetResponse>) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetResponse = action.payload;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.isLetterReceived = true;
      state.isLoading = false;
      state.isError = false;
    },
    passwordResetRequestError: (state) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = false;
      state.isLoading = false;
      state.isError = true;
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
