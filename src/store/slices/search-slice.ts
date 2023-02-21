import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TSearchState } from './slices.types';

const initialState: TSearchState = {
  isInputSearchOpen: false,
};

export const searchSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'search',
  initialState,
  reducers: {
    handleIsInputSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isInputSearchOpen = action.payload;
    },
  },
});

export const { handleIsInputSearchOpen } = searchSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default searchSlice.reducer;
