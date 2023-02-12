import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IBookData } from '../../constants/constants.interface';

import { IBookState } from './slices.interface';

const initialState: IBookState = {
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
  isSuccess: false,
};

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'catalog',
  initialState,
  reducers: {
    setBookData: (state, action: PayloadAction<IBookData>) => {
      state.bookData = action.payload;
    },
    startBookDataLoading: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    endBookDataLoading: (state) => {
      state.isLoading = false;
    },
    handleBookDataSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setBookData, startBookDataLoading, endBookDataLoading, handleBookDataSuccess } = catalogSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default catalogSlice.reducer;
