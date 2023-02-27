import { RegistrationState } from '../slices.types';

export const initialState: RegistrationState = {
  registrationRequest: {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  registrationResponse: {
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
