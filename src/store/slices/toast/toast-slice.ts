import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { EToastMessage, EToastType } from '../../../components/toast/toast.types';

import { initialState } from './initial-state';

export const toastSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'toast',
  initialState,
  reducers: {
    closeToast: (state) => {
      state.isToastOpen = false;
    },
    setToast: (state, action: PayloadAction<{ type: EToastType; message: EToastMessage }>) => {
      state.toastType = action.payload.type;
      state.toastMessage = action.payload.message;
      state.isToastOpen = true;
    },
  },
});

export const { closeToast, setToast } = toastSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default toastSlice.reducer;
