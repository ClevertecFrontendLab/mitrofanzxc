import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TCatalogView } from '../../components';
import { ICatalogData } from '../../constants/constants.interface';
import { sortData } from '../../utils';
import { TTypeSortData } from '../../utils/utils.interface';

import { ICatalogState } from './slices.interface';

const initialState: ICatalogState = {
  catalogView: 'grid',
  initialData: [],
  catalogData: [],
  catalogSortState: 'default',
  isLoading: false,
  isSuccess: false,
};

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogData: (state, action: PayloadAction<ICatalogData[]>) => {
      state.initialData = action.payload;
      state.catalogData = action.payload;
    },
    changeCatalogView: (state, action: PayloadAction<TCatalogView>) => {
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
      if (!action.payload || !action.payload.length) {
        state.catalogData = state.initialData;
      } else {
        state.catalogData = state.catalogData.filter((element) =>
          element.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
        );
      }
    },
    startCatalogDataLoading: (state) => {
      state.isLoading = true;
    },
    endCatalogDataLoading: (state) => {
      state.isLoading = false;
    },
    handleCatalogDataSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
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
  endCatalogDataLoading,
  handleCatalogDataSuccess,
} = catalogSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default catalogSlice.reducer;
