import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initial-state';

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
