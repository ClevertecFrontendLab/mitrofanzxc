import { RegistrationState } from '../slices.types';

export const REGISTRATION_REQUEST_WITH_INITIAL_DATA = {
  email: '',
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
};

export const REGISTRATION_RESPONSE_WITH_INITIAL_DATA = {
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

export const initialState: RegistrationState = {
  registrationRequest: REGISTRATION_REQUEST_WITH_INITIAL_DATA,
  registrationResponse: REGISTRATION_RESPONSE_WITH_INITIAL_DATA,
  isLoading: false,
  isError: false,
};
