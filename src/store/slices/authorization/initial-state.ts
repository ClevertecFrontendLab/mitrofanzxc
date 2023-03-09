// import { TextFieldMessage } from 'components/text-field/text-field.types';

import { AuthorizationState } from '../slices.types';

export const AUTHORIZATION_REQUEST_WITH_INITIAL_DATA = {
  identifier: '',
  password: '',
};

export const AUTHORIZATION_RESPONSE_WITH_INITIAL_DATA = {
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

export const initialState: AuthorizationState = {
  authorizationRequest: AUTHORIZATION_REQUEST_WITH_INITIAL_DATA,
  authorizationResponse: AUTHORIZATION_RESPONSE_WITH_INITIAL_DATA,
  errorMessage: '',
  isAuth: false,
  isLoading: false,
  isError: false,
};
