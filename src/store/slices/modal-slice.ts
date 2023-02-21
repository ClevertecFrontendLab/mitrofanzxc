import { createSlice } from '@reduxjs/toolkit';

import { TModalState } from './slices.types';

const initialState: TModalState = {
  isError: false,
};

export const toastSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'toast',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isError = true;
    },
    closeModal: (state) => {
      state.isError = false;
    },
  },
});

export const { openModal, closeModal } = toastSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default toastSlice.reducer;
