import { PasswordResetState } from '../slices.types';

export const initialState: PasswordResetState = {
  passwordResetRequest: {
    email: '',
  },
  passwordResetResponse: {
    ok: null,
  },
  isLoading: false,
  isError: false,
};
