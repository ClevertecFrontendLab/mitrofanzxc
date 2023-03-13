import { TCategories } from 'constants/constants.types';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initial-state';

export const categoriesSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'categories',
  initialState,
  reducers: {
    categoriesRequest: (state) => {
      state.categoriesData = [];
      state.isLoading = true;
      state.isError = false;
    },
    categoriesRequestSuccess: (state, action: PayloadAction<TCategories[]>) => {
      state.categoriesData = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    categoriesRequestError: (state) => {
      state.categoriesData = [];
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { categoriesRequest, categoriesRequestSuccess, categoriesRequestError } = categoriesSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default categoriesSlice.reducer;
