import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TCatalogView } from '../../components';
import { CatalogMockData, ICatalogMockData } from '../../constants';
import { sortData, TTypeSortData } from '../../utils';

import { ICatalogState } from './slices.interface';

const initialState: ICatalogState = {
  catalogView: 'grid',
  initialData: CatalogMockData,
  catalogData: [],
  catalogSortState: 'default',
  inputSearchValue: '',
  isInputSearchOpen: false,
};

export const catalogSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'catalog',
  initialState,
  reducers: {
    setAllBooks: (state, action: PayloadAction<ICatalogMockData[]>) => {
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
      if (action.payload === 'all') {
        state.catalogData = [...state.initialData];
      } else {
        state.catalogData = [...state.initialData].filter((element) => element.category === action.payload);
      }
    },
    setInputSearchValue: (state, action: PayloadAction<string>) => {
      state.inputSearchValue = action.payload;
    },
    searchCatalogByTitle: (state) => {
      if (!state.inputSearchValue || !state.inputSearchValue.length) {
        state.catalogData = [...state.initialData];
      } else {
        state.catalogData = [...state.initialData].filter((element) =>
          element.title.toLocaleLowerCase().includes(state.inputSearchValue.toLocaleLowerCase())
        );
      }
    },
    handleIsInputSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isInputSearchOpen = action.payload;
    },
  },
});

export const {
  setAllBooks,
  changeCatalogView,
  sortCatalogByRating,
  changeCatalogSortState,
  filterCatalogByCategory,
  setInputSearchValue,
  searchCatalogByTitle,
  handleIsInputSearchOpen,
} = catalogSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default catalogSlice.reducer;
