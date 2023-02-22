import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ECatalogView } from '../../components/buttons/button-catalog-view/button-catalog-view.types';
import { TCatalogData } from '../../constants/constants.types';
import { sortData } from '../../utils';
import { ESort, TTypeSortData } from '../../utils/utils.types';

import { TCatalogState } from './slices.types';

const initialState: TCatalogState = {
  catalogView: ECatalogView.Grid,
  initialData: [],
  catalogData: [],
  catalogSortState: ESort.Descending,
  isLoading: false,
};

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogData: (state, action: PayloadAction<TCatalogData[]>) => {
      state.initialData = action.payload.sort(sortData(ESort.Descending));
      state.catalogData = action.payload.sort(sortData(ESort.Descending));
    },
    changeCatalogView: (state, action: PayloadAction<ECatalogView>) => {
      state.catalogView = action.payload;
    },
    sortCatalogByRating: (state, action: PayloadAction<TTypeSortData>) => {
      state.catalogData = state.catalogData.sort(sortData(action.payload));
    },
    changeCatalogSortState: (state, action: PayloadAction<TTypeSortData>) => {
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
