import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TForm, TRegistrationState } from './slices.types';

const initialState: TRegistrationState = {
  isFlowOpen: false,
  isRegistration: false,
  isPasswordRecovery: false,
  isLetterReceived: false,
  formStep: 1,
  form: {
    login: {
      isError: false,
      value: '',
    },
    password: {
      isError: false,
      value: '',
    },
    firstName: {
      isError: false,
      value: '',
    },
    lastName: {
      isError: false,
      value: '',
    },
    phone: {
      isError: false,
      value: '',
    },
    email: {
      isError: false,
      value: '',
    },
    contractNumber: {
      isError: false,
      value: '',
    },
    contractOwner: {
      isError: false,
      value: '',
    },
  },
};

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
