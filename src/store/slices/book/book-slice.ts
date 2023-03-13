import { BookData } from 'constants/constants.types';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { BOOK_WITH_INITIAL_DATA, initialState } from './initial-state';

export const bookSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'book',
  initialState,
  reducers: {
    bookRequest: (state, action: PayloadAction<string>) => {
      state.bookData = BOOK_WITH_INITIAL_DATA;
      state.isLoading = true;
      state.isError = false;
    },
    bookRequestSuccess: (state, action: PayloadAction<BookData>) => {
      state.bookData = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    bookRequestError: (state) => {
      state.bookData = BOOK_WITH_INITIAL_DATA;
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { bookRequest, bookRequestSuccess, bookRequestError } = bookSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default bookSlice.reducer;
