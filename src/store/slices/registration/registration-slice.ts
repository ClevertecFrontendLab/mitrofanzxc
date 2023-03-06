import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RegistrationRequest, RegistrationResponse } from '../slices.types';

import {
  initialState,
  REGISTRATION_REQUEST_WITH_INITIAL_DATA,
  REGISTRATION_RESPONSE_WITH_INITIAL_DATA,
} from './initial-state';

export const registrationSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'registration',
  initialState,
  reducers: {
    registrationRequest: (state, action: PayloadAction<RegistrationRequest>) => {
      state.registrationRequest = action.payload;
      state.registrationResponse = REGISTRATION_RESPONSE_WITH_INITIAL_DATA;
      state.isLoading = true;
      state.isError = false;
    },
    registrationRequestSuccess: (state, action: PayloadAction<RegistrationResponse>) => {
      state.registrationRequest = REGISTRATION_REQUEST_WITH_INITIAL_DATA;
      state.registrationResponse = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    registrationRequestError: (state) => {
      state.registrationRequest = REGISTRATION_REQUEST_WITH_INITIAL_DATA;
      state.registrationResponse = REGISTRATION_RESPONSE_WITH_INITIAL_DATA;
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { registrationRequest, registrationRequestSuccess, registrationRequestError } = registrationSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default registrationSlice.reducer;
