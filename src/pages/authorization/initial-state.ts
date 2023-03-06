import { ValidationMode } from 'react-hook-form';

type InitialState = {
  defaultValues?: {
    identifier?: string;
    password?: string;
  };
  mode?: keyof ValidationMode;
};

export const initialState: InitialState = {
  defaultValues: {
    identifier: '',
    password: '',
  },
  mode: 'onChange',
};
