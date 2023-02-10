import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CatalogMockData, ICatalogMockData } from '../../constants';
import { sortData } from '../../utils';

export interface ICatalogSlice {
  catalogView: 'grid' | 'list';
  initialData: ICatalogMockData[];
  catalogData: ICatalogMockData[];
  catalogSortState: 'default' | 'descending' | 'ascending';
}

const initialState: ICatalogSlice = {
  catalogView: 'grid',
  initialData: CatalogMockData,
  catalogData: [],
  catalogSortState: 'default',
};

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'catalogView',
  initialState,
  reducers: {
    changeCatalogView: (state, action: PayloadAction<'grid' | 'list'>) => {
      state.catalogView = action.payload;
    },
    sortCatalogByRating: (state, action: PayloadAction<'default' | 'descending' | 'ascending'>) => {
      state.catalogData = [...state.initialData].sort(sortData(action.payload));
    },
    changeCatalogSortState: (state, action: PayloadAction<'default' | 'descending' | 'ascending'>) => {
      state.catalogSortState = action.payload;
    },
    filterCatalogByCategory: (state, action: PayloadAction<string>) => {
      if (action.payload === 'all') {
        state.catalogData = [...state.initialData];
      } else {
        state.catalogData = [...state.initialData].filter((element) => element.category === action.payload);
      }
    },
    searchCatalogByTitle: (state, action: PayloadAction<string>) => {
      state.catalogData = [...state.initialData].filter((element) =>
        element.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase().trim())
      );
    },
  },
});

export const {
  changeCatalogView,
  sortCatalogByRating,
  changeCatalogSortState,
  filterCatalogByCategory,
  searchCatalogByTitle,
} = catalogSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default catalogSlice.reducer;
