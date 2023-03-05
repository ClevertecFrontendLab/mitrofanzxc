import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';

import { FormToastState } from '../slices.types';

export const initialState: FormToastState = {
  formToastTitle: FormToastTitle.AuthorizationError,
  formToastMessage: FormToastMessage.AuthorizationError,
  formToastButton: ButtonLoginTitle.Enter,
  isFormToastOpen: false,
};
