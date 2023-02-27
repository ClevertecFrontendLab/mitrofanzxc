import { BookData, TCatalogData, TCategories } from 'constants/constants.types';

import { CatalogView } from 'components/buttons/button-catalog-view/button-catalog-view.types';
import { ToastMessage, ToastType } from 'components/toast/toast.types';
import { Sort } from 'utils/utils.types';

export enum Connection {
  Catalog = 'getCatalog',
  Book = 'getBook',
  Categories = 'getCategories',
  Registration = 'setUser',
  Authorization = 'getUser',
  PasswordRecovery = 'setUserPassword',
  PasswordReset = 'setUserPassword',
}

export type CatalogState = {
  catalogView: CatalogView;
  initialData: TCatalogData[];
  catalogData: TCatalogData[];
  catalogSortState: Sort;
  isLoading: boolean;
  isError: boolean;
};

export type BookState = {
  bookData: BookData;
  isLoading: boolean;
  isError: boolean;
};

export type MobileMenuState = {
  isMobileMenuOpen: boolean;
  isAccordionMenuOpen: boolean;
};

export type ToastState = {
  isToastOpen: boolean;
  toastType: ToastType;
  toastMessage: ToastMessage;
};

export type CategoriesState = {
  categoriesData: TCategories[];
  isLoading: boolean;
  isError: boolean;
};

export type RegistrationRequest = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type RegistrationResponse = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
};

export type RegistrationError = {
  data: null;
  error: {
    status: number | null;
    name: string | null;
    message: string | null;
    details: Record<string, never> | null;
  };
};

export type RegistrationState = {
  isFlowOpen: boolean;
  isRegistration: boolean;
  isPasswordRecovery: boolean;
  isLetterReceived: boolean;
  registrationRequest: RegistrationRequest;
  registrationResponse: RegistrationResponse;
  isLoading: boolean;
  isError: boolean;
};

export type AuthorizationRequest = {
  identifier: string;
  password: string;
};

export type AuthorizationResponse = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
};

export type AuthorizationError = {
  data: null;
  error: {
    status: number | null;
    name: string | null;
    message: string | null;
    details: Record<string, never> | null;
  };
};

export type AuthorizationState = {
  authorizationRequest: AuthorizationRequest;
  authorizationResponse: AuthorizationResponse;
  isLoading: boolean;
  isError: boolean;
};

export type PasswordResetRequest = {
  email: string;
};

export type PasswordResetResponse = {
  ok: boolean | null;
};

export type PasswordResetState = {
  passwordResetRequest: PasswordResetRequest;
  passwordResetResponse: PasswordResetResponse;
  isLoading: boolean;
  isError: boolean;
};

export type PasswordRecoveryRequest = {
  password: string;
  passwordConfirmation: string;
  code: string;
};

export type PasswordRecoveryResponse = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
};

export type PasswordRecoveryState = {
  passwordRecoveryRequest: PasswordRecoveryRequest;
  passwordRecoveryResponse: PasswordRecoveryResponse;
  isLoading: boolean;
  isError: boolean;
};
