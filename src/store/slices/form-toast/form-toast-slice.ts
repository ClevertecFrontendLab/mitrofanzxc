import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { TextFieldMessage } from 'components/text-field/text-field.types';

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
      action: PayloadAction<{ title: FormToastTitle; message: FormToastMessage; button?: ButtonPrimaryTitle }>
    ) => {
      state.formToastTitle = action.payload.title;
      state.formToastMessage = action.payload.message;
      state.formToastButton = action.payload.button || null;
      state.isFormToastOpen = true;
    },
    setErrorMessage: (state, action: PayloadAction<string | TextFieldMessage>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { closeFormToast, setFormToast, setErrorMessage } = formToastSlice.actions;
/* eslint-disable-next-line import/no-default-export */
export default formToastSlice.reducer;
