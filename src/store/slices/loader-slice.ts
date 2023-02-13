import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ILoaderState } from './slices.interface';

const initialState: ILoaderState = {
  isLoading: false,
  isSuccess: false,
};

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'loader',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    handleSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { startLoading, endLoading, handleSuccess } = catalogSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default catalogSlice.reducer;
