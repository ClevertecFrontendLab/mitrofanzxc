import { ETextFieldId } from '../components/text-field/text-field.types';

import { TValidateTextField } from './utils.types';

export const validateTextField: TValidateTextField = (value, id) => {
  const regexPhone = /^(?:\+375|375|80)\s?\(?(?:25|29|33|44)\)?\s?\d{3}\s?-?\d{2}\s?-?\d{2}/g;
  const regexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  const regexLogin = /^[A-Za-z0-9]+$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  switch (id) {
    case ETextFieldId.Login:
      return regexLogin.test(value);
    case ETextFieldId.Phone:
      return regexPhone.test(value);
    case ETextFieldId.Email:
      return regexEmail.test(value);
    case ETextFieldId.Password:
      return regexPassword.test(value);
    case ETextFieldId.ContractNumber:
      return false;
    case ETextFieldId.ContractOwner:
      return false;
    default:
      return false;
  }
};
