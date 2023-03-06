import { ValidationMode } from 'react-hook-form';

type InitialState = {
  defaultValues?: {
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
  };
  mode?: keyof ValidationMode;
};

export const initialState: InitialState = {
  defaultValues: {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  },
  mode: 'onChange',
};
