import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TBookData } from '../../constants/constants.types';

import { TBookState } from './slices.types';

const initialState: TBookState = {
  bookData: {
    id: 0,
    title: '',
    rating: 0,
    issueYear: '',
    description: '',
    publish: '',
    pages: '',
    cover: '',
    weight: '',
    format: '',
    ISBN: '',
    producer: '',
    authors: [],
    images: [],
    categories: [],
    comments: [
      {
        id: '',
        rating: 0,
        text: '',
        createdAt: '',
        user: {
          commentUserId: 0,
          firstName: '',
          lastName: '',
          avatarUrl: '',
        },
      },
    ],
    booking: null,
    delivery: null,
    histories: [],
  },
  isLoading: false,
};

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
