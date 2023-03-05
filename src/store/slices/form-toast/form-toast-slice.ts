import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';

import { initialState } from './initial-state';

export const formToastSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'toast',
  initialState,
  reducers: {
    closeFormToast: (state) => {
      state.isFormToastOpen = false;
    },
    setFormToast: (state, action: PayloadAction<{ title: FormToastTitle; message: FormToastMessage }>) => {
      state.formToastTitle = action.payload.title;
      state.formToastMessage = action.payload.message;
      state.isFormToastOpen = true;
    },
  },
});

export const { closeFormToast, setFormToast } = formToastSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default formToastSlice.reducer;
