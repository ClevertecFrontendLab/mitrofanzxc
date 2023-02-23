import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TBookData } from '../../../constants/constants.types';

import { initialState } from './initial-state';

export const bookSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'book',
  initialState,
  reducers: {
    bookRequest: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    bookRequestSuccess: (state, action: PayloadAction<TBookData>) => {
      state.bookData = action.payload;
      state.isLoading = false;
    },
    bookRequestFailure: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { bookRequest, bookRequestSuccess, bookRequestFailure } = bookSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default bookSlice.reducer;
