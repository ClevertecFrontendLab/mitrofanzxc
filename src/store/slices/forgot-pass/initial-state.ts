import { ForgotPassState } from '../slices.types';

export const initialState: ForgotPassState = {
  passwordRecoveryRequest: {
    password: '',
    passwordConfirmation: '',
    code: '',
  },
  passwordRecoveryResponse: {
    jwt: '',
    user: {
      id: 0,
      username: '',
      email: '',
      provider: '',
      confirmed: false,
      blocked: true,
      createdAt: '',
      updatedAt: '',
      firstName: '',
      lastName: '',
      phone: '',
    },
  },
  passwordResetRequest: {
    email: '',
  },
  passwordResetResponse: {
    ok: null,
  },
  isLoading: false,
  isError: false,
};
