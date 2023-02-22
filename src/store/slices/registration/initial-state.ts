import { TRegistrationState } from '../slices.types';

export const initialState: TRegistrationState = {
  isFlowOpen: false,
  isRegistration: false,
  isPasswordRecovery: false,
  isLetterReceived: false,
  formStep: 1,
  form: {
    login: {
      isError: false,
      value: '',
    },
    password: {
      isError: false,
      value: '',
    },
    firstName: {
      isError: false,
      value: '',
    },
    lastName: {
      isError: false,
      value: '',
    },
    phone: {
      isError: false,
      value: '',
    },
    email: {
      isError: false,
      value: '',
    },
    contractNumber: {
      isError: false,
      value: '',
    },
    contractOwner: {
      isError: false,
      value: '',
    },
  },
};
