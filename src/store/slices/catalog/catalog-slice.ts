import { TCatalogData } from 'constants/constants.types';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CatalogView } from 'components/buttons/button-catalog-view/button-catalog-view.types';
import { Sort } from 'utils/utils.types';

import { initialState } from './initial-state';

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'catalog',
  initialState,
  reducers: {
    catalogRequest: (state) => {
      state.initialData = [];
      state.catalogData = [];
      state.isLoading = true;
      state.isError = false;
    },
    catalogRequestSuccess: (state, action: PayloadAction<TCatalogData[]>) => {
      state.initialData = action.payload;
      state.catalogData = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    catalogRequestError: (state) => {
      state.initialData = [];
      state.catalogData = [];
      state.isError = true;
      state.isLoading = false;
    },
    changeCatalogView: (state, action: PayloadAction<CatalogView>) => {
      state.catalogView = action.payload;
    },
    sortCatalogByRating: (state, action: PayloadAction<TCatalogData[]>) => {
      state.catalogData = action.payload;
    },
    changeCatalogSortState: (state, action: PayloadAction<Sort>) => {
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
