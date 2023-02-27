import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RegistrationRequest, RegistrationResponse } from '../slices.types';

import { initialState } from './initial-state';

export const registrationSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'registration',
  initialState,
  reducers: {
    openFlow: (state) => {
      state.isFlowOpen = true;
    },
    closeFlow: (state) => {
      state.isFlowOpen = false;
    },
    openRegistration: (state) => {
      state.isRegistration = true;
    },
    closeRegistration: (state) => {
      state.isRegistration = false;
    },
    toggleRegistration: (state) => {
      state.isRegistration = !state.isRegistration;
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
    registrationRequest: (state, action: PayloadAction<RegistrationRequest>) => {
      state.isError = false;
      state.isLoading = true;
    },
    registrationRequestSuccess: (state, action: PayloadAction<RegistrationResponse>) => {
      state.registrationResponse = action.payload;
      state.isLoading = false;
    },
    registrationRequestError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const {
  openFlow,
  closeFlow,
  openRegistration,
  closeRegistration,
  toggleRegistration,
  openPasswordRecovery,
  closePasswordRecovery,
  openNewPassword,
  closeNewPassword,
  registrationRequest,
  registrationRequestSuccess,
  registrationRequestError,
} = registrationSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default registrationSlice.reducer;
