import { createSlice } from '@reduxjs/toolkit';

export interface ILoaderState {
  isLoaderOpen: boolean;
}

const initialState: ILoaderState = {
  isLoaderOpen: false,
};

export const loaderSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'loader',
  initialState,
  reducers: {
    openLoader: (state) => {
      state.isLoaderOpen = true;
    },
    closeLoader: (state) => {
      state.isLoaderOpen = false;
    },
  },
});

export const { openLoader, closeLoader } = loaderSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default loaderSlice.reducer;
