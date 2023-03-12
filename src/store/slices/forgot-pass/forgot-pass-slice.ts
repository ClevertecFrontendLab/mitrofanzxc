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
      state.passwordRecoveryRequest = action.payload;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = true;
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    passwordRecoveryRequestSuccess: (state, action: PayloadAction<PasswordRecoveryResponse>) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = action.payload;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = false;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    },
    passwordRecoveryRequestError: (state) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = true;
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },
    passwordResetRequest: (state, action: PayloadAction<PasswordResetRequest>) => {
      state.passwordResetRequest = action.payload;
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = false;
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    passwordResetRequestSuccess: (state, action: PayloadAction<PasswordResetResponse>) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetResponse = action.payload;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.isLetterReceived = true;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    },
    passwordResetRequestError: (state) => {
      state.passwordRecoveryRequest = PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA;
      state.passwordRecoveryResponse = PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA;
      state.passwordResetRequest = PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA;
      state.passwordResetResponse = PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA;
      state.isLetterReceived = false;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
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
} = forgotPassSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default forgotPassSlice.reducer;
