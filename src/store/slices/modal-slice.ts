import { createSlice } from '@reduxjs/toolkit';

import { IModalState } from './slices.interface';

const initialState: IModalState = {
  isModalOpen: false,
};

export const toastSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'toast',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = toastSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default toastSlice.reducer;
