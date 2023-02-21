import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TCategories } from '../../constants/constants.types';

import { TCategoriesState } from './slices.types';

const initialState: TCategoriesState = {
  categoriesData: [],
};

export const categoriesSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesData: (state, action: PayloadAction<TCategories[]>) => {
      state.categoriesData = action.payload;
    },
  },
});

export const { setCategoriesData } = categoriesSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default categoriesSlice.reducer;
