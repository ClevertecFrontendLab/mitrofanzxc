import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TBookData } from '../../../constants/constants.types';

import { initialState } from './initial-state';

export const bookSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'book',
  initialState,
  reducers: {
    setBookData: (state, action: PayloadAction<TBookData>) => {
      state.bookData = action.payload;
    },
    startBookDataLoading: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
  },
});

export const { setBookData, startBookDataLoading } = bookSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default bookSlice.reducer;
