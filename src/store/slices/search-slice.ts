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
    handleIsInputSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isInputSearchOpen = action.payload;
    },
  },
});

export const { setInputSearchValue, handleIsInputSearchOpen } = searchSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default searchSlice.reducer;
