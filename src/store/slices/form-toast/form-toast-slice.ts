import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';

import { initialState } from './initial-state';

export const formToastSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'formToast',
  initialState,
  reducers: {
    closeFormToast: (state) => {
      state.isFormToastOpen = false;
    },
    setFormToast: (
      state,
      action: PayloadAction<{ title: FormToastTitle; message: FormToastMessage; button: ButtonLoginTitle }>
    ) => {
      state.formToastTitle = action.payload.title;
      state.formToastMessage = action.payload.message;
      state.formToastButton = action.payload.button;
      state.isFormToastOpen = true;
    },
  },
});

export const { closeFormToast, setFormToast } = formToastSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default formToastSlice.reducer;
