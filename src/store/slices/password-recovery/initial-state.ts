import { PasswordRecoveryState } from '../slices.types';

export const initialState: PasswordRecoveryState = {
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
  isLoading: false,
  isError: false,
};
