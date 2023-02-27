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
      state.isError = false;
      state.categoriesData = [];
      state.isLoading = true;
    },
    categoriesRequestSuccess: (state, action: PayloadAction<TCategories[]>) => {
      state.categoriesData = action.payload;
      state.isLoading = false;
    },
    categoriesRequestError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { categoriesRequest, categoriesRequestSuccess, categoriesRequestError } = categoriesSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default categoriesSlice.reducer;
