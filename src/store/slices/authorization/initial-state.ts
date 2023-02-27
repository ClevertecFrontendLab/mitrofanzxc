import { AuthorizationState } from '../slices.types';

export const initialState: AuthorizationState = {
  authorizationRequest: {
    identifier: '',
    password: '',
  },
  authorizationResponse: {
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
