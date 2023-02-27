import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import {
  authorizationRequest,
  bookRequest,
  catalogRequest,
  categoriesRequest,
  passwordRecoveryRequest,
  passwordResetRequest,
  registrationRequest,
} from 'store/slices';
import {
  AuthorizationRequest,
  Connection,
  PasswordRecoveryRequest,
  PasswordResetRequest,
  RegistrationRequest,
} from 'store/slices/slices.types';

export const useRequest = ({
  authorizationData,
  bookId,
  connectionType,
  passwordRecoveryData,
  passwordResetData,
  registrationData,
}: {
  authorizationData?: AuthorizationRequest;
  bookId?: string;
  connectionType: Connection;
  passwordRecoveryData?: PasswordRecoveryRequest;
  passwordResetData?: PasswordResetRequest;
  registrationData?: RegistrationRequest;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (connectionType) {
      case Connection.Authorization:
        if (authorizationData) {
          dispatch(authorizationRequest(authorizationData));
        }
        break;
      case Connection.Book:
        if (bookId) {
          dispatch(bookRequest(bookId));
          dispatch(categoriesRequest());
        }
        break;
      case Connection.Catalog:
        dispatch(catalogRequest());
        dispatch(categoriesRequest());
        break;
      case Connection.PasswordRecovery:
        if (passwordRecoveryData) {
          dispatch(passwordRecoveryRequest(passwordRecoveryData));
        }
        break;
      case Connection.PasswordReset:
        if (passwordResetData) {
          dispatch(passwordResetRequest(passwordResetData));
        }
        break;
      case Connection.Registration:
        if (registrationData) {
          dispatch(registrationRequest(registrationData));
        }
        break;
      default:
        break;
    }
  }, [authorizationData, bookId, connectionType, dispatch, passwordRecoveryData, passwordResetData, registrationData]);
};
