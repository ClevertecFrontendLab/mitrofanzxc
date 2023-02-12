import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ISearchState } from './slices.interface';

const initialState: ISearchState = {
  inputSearchValue: '',
  isInputSearchOpen: false,
};

export const searchSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'search',
  initialState,
  reducers: {
    setInputSearchValue: (state, action: PayloadAction<string>) => {
      state.inputSearchValue = action.payload;
    },
    searchCatalogByTitle: (state) => {
      // if (!state.inputSearchValue || !state.inputSearchValue.length) {
      //   state.catalogData = [...state.initialData];
      // } else {
      //   state.catalogData = [...state.initialData].filter((element) =>
      //     element.title.toLocaleLowerCase().includes(state.inputSearchValue.toLocaleLowerCase())
      //   );
      // }
    },
    handleIsInputSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isInputSearchOpen = action.payload;
    },
  },
});

export const { setInputSearchValue, searchCatalogByTitle, handleIsInputSearchOpen } = searchSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default searchSlice.reducer;
