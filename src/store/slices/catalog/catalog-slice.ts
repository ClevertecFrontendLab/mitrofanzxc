import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ECatalogView } from '../../../components/buttons/button-catalog-view/button-catalog-view.types';
import { TCatalogData } from '../../../constants/constants.types';
import { sortData } from '../../../utils';
import { ESort } from '../../../utils/utils.types';

import { initialState } from './initial-state';

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogData: (state, action: PayloadAction<TCatalogData[]>) => {
      state.initialData = action.payload;
      state.catalogData = action.payload;
    },
    changeCatalogView: (state, action: PayloadAction<ECatalogView>) => {
      state.catalogView = action.payload;
    },
    sortCatalogByRating: (state, action: PayloadAction<ESort>) => {
      state.catalogData = state.catalogData.sort(sortData(action.payload));
    },
    changeCatalogSortState: (state, action: PayloadAction<ESort>) => {
      state.catalogSortState = action.payload;
    },
    filterCatalogByCategory: (state, action: PayloadAction<string>) => {
      if (action.payload === 'Все книги') {
        state.catalogData = state.initialData;
      } else {
        state.catalogData = state.initialData.filter((element) => element.categories.includes(action.payload));
      }
    },
    searchCatalogByTitle: (state, action: PayloadAction<string>) => {
      state.catalogData = state.catalogData.filter((element) =>
        element.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
      );
    },
    startCatalogDataLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  setCatalogData,
  changeCatalogView,
  sortCatalogByRating,
  changeCatalogSortState,
  filterCatalogByCategory,
  searchCatalogByTitle,
  startCatalogDataLoading,
} = catalogSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default catalogSlice.reducer;
