import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';

import { FormToastState } from '../slices.types';

export const initialState: FormToastState = {
  formToastTitle: FormToastTitle.AuthorizationError,
  formToastMessage: FormToastMessage.AuthorizationError,
  formToastButton: ButtonPrimaryTitle.Repeat,
  isFormToastOpen: false,
};
