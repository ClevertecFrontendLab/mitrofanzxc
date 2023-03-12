import { ForgotPassState } from '../slices.types';

export const PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA = {
  password: '',
  passwordConfirmation: '',
  code: '',
};

export const PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA = {
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
};

export const PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA = {
  email: '',
};

export const PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA = {
  ok: null,
};

export const initialState: ForgotPassState = {
  passwordRecoveryRequest: PASSWORD_RECOVERY_REQUEST_WITH_INITIAL_DATA,
  passwordRecoveryResponse: PASSWORD_RECOVERY_RESPONSE_WITH_INITIAL_DATA,
  passwordResetRequest: PASSWORD_RESET_REQUEST_WITH_INITIAL_DATA,
  passwordResetResponse: PASSWORD_RESET_RESPONSE_WITH_INITIAL_DATA,
  isLetterReceived: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};
