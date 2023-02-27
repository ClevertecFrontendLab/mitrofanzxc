import { BookData } from 'constants/constants.types';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { initialBookData, initialState } from './initial-state';

export const bookSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'book',
  initialState,
  reducers: {
    bookRequest: (state, action: PayloadAction<string>) => {
      state.isError = false;
      state.bookData = initialBookData;
      state.isLoading = true;
    },
    bookRequestSuccess: (state, action: PayloadAction<BookData>) => {
      state.bookData = action.payload;
      state.isLoading = false;
    },
    bookRequestError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { bookRequest, bookRequestSuccess, bookRequestError } = bookSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default bookSlice.reducer;
