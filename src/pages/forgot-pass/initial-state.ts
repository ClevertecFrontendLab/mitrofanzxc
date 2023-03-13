import { ValidationMode } from 'react-hook-form';

type InitialStateEmail = {
  defaultValues?: {
    email?: string;
  };
  mode?: keyof ValidationMode;
};

type InitialStatePassword = {
  defaultValues?: {
    password?: string;
    passwordConfirmation?: string;
  };
  mode?: keyof ValidationMode;
};

export const initialStateEmail: InitialStateEmail = {
  defaultValues: {
    email: '',
  },
  mode: 'onChange',
};

export const initialStatePassword: InitialStatePassword = {
  defaultValues: {
    password: '',
    passwordConfirmation: '',
  },
  mode: 'all',
};
