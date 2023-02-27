import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RegistrationRequest, RegistrationResponse } from '../slices.types';

import { initialState } from './initial-state';

export const registrationSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'registration',
  initialState,
  reducers: {
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

export const { registrationRequest, registrationRequestSuccess, registrationRequestError } = registrationSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default registrationSlice.reducer;
