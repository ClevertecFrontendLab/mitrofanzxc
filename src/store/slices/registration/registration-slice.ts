import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TForm } from '../slices.types';

import { initialState } from './initial-state';

export const loaderSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'loader',
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
    nextStep: (state) => {
      state.formStep += 1;
    },
    setTextFieldValue: (state, action: PayloadAction<{ value: string; id: string }>) => {
      state.form[action.payload.id as keyof TForm].value = action.payload.value;
    },
    setTextFieldError: (state, action: PayloadAction<{ value: boolean; id: string }>) => {
      state.form[action.payload.id as keyof TForm].isError = action.payload.value;
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
  nextStep,
  setTextFieldValue,
  setTextFieldError,
} = loaderSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default loaderSlice.reducer;
