import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ECatalogView } from '../../../components/buttons/button-catalog-view/button-catalog-view.types';
import { TCatalogData } from '../../../constants/constants.types';
import { ESort } from '../../../utils/utils.types';

import { initialState } from './initial-state';

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'catalog',
  initialState,
  reducers: {
    catalogRequest: (state) => {
      state.isLoading = true;
    },
    catalogRequestSuccess: (state, action: PayloadAction<TCatalogData[]>) => {
      state.initialData = action.payload;
      state.catalogData = action.payload;
      state.isLoading = false;
    },
    catalogRequestError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    changeCatalogView: (state, action: PayloadAction<ECatalogView>) => {
      state.catalogView = action.payload;
    },
    sortCatalogByRating: (state, action: PayloadAction<TCatalogData[]>) => {
      state.catalogData = action.payload;
    },
    changeCatalogSortState: (state, action: PayloadAction<ESort>) => {
      state.catalogSortState = action.payload;
    },
    filterCatalogByCategory: (state, action: PayloadAction<TCatalogData[]>) => {
      state.catalogData = action.payload;
    },
    searchCatalogByTitle: (state, action: PayloadAction<TCatalogData[]>) => {
      state.catalogData = action.payload;
    },
  },
});

export const {
  catalogRequest,
  catalogRequestSuccess,
  catalogRequestError,
  changeCatalogView,
  sortCatalogByRating,
  changeCatalogSortState,
  filterCatalogByCategory,
  searchCatalogByTitle,
} = catalogSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default catalogSlice.reducer;
