import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ICategories } from '../../constants/constants.interface';

import { ICategoriesState } from './slices.interface';

const initialState: ICategoriesState = {
  categoriesData: [],
};

export const categoriesSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesData: (state, action: PayloadAction<ICategories[]>) => {
      state.categoriesData = action.payload;
    },
  },
});

export const { setCategoriesData } = categoriesSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default categoriesSlice.reducer;
