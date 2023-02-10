import { createSlice } from '@reduxjs/toolkit';

import { IToastState } from './slices.interface';

const initialState: IToastState = {
  isToastOpen: false,
  isToastError: false,
  typeToastError: 'default',
};

export const toastSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state) => {
      state.isToastOpen = true;
    },
    closeToast: (state) => {
      state.isToastOpen = false;
    },
    addErrorToToast: (state) => {
      state.isToastError = true;
    },
    removeErrorFromToast: (state) => {
      state.isToastError = false;
    },
  },
});

export const { openToast, closeToast, addErrorToToast, removeErrorFromToast } = toastSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default toastSlice.reducer;
