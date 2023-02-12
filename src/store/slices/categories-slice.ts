import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ICategories } from '../../constants/constants.interface';

import { ICategoriesState } from './slices.interface';

const initialState: ICategoriesState = {
  categoriesData: [],
  isLoading: false,
  isSuccess: false,
};

export const categoriesSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesData: (state, action: PayloadAction<ICategories[]>) => {
      state.categoriesData = action.payload;
    },
    startCategoriesDataLoading: (state) => {
      state.isLoading = true;
    },
    endCategoriesDataLoading: (state) => {
      state.isLoading = false;
    },
    handleCategoriesDataSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setCategoriesData, startCategoriesDataLoading, endCategoriesDataLoading, handleCategoriesDataSuccess } =
  categoriesSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default categoriesSlice.reducer;
