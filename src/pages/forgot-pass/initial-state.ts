import { ValidationMode } from 'react-hook-form';

type InitialState = {
  defaultValues?: {
    email?: string;
    password?: string;
    passwordConfirmation?: string;
  };
  mode?: keyof ValidationMode;
};

export const initialState: InitialState = {
  defaultValues: {
    email: '',
    password: '',
    passwordConfirmation: '',
  },
  mode: 'onChange',
};
