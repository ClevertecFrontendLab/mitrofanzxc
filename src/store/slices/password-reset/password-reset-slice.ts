import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { PasswordResetRequest, PasswordResetResponse } from '../slices.types';

import { initialState } from './initial-state';

export const PasswordResetSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'passwordReset',
  initialState,
  reducers: {
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
  },
});

export const { passwordResetRequest, passwordResetRequestSuccess, passwordResetRequestError } =
  PasswordResetSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default PasswordResetSlice.reducer;
