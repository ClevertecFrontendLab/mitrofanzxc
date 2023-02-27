import { PatternEmail, PatternLogin, PatternPassword, PatternTel } from 'constants/patterns';

import { TextFieldId } from 'components/text-field/text-field.types';

export const validateTextField = (value: string, id: TextFieldId): boolean => {
  switch (id) {
    case TextFieldId.Login:
      return PatternLogin.test(value);
    case TextFieldId.Password:
      return PatternPassword.test(value);
    case TextFieldId.Email:
      return PatternEmail.test(value);
    case TextFieldId.Tel:
      return PatternTel.test(value);
    case TextFieldId.ContractNumber:
      return false;
    case TextFieldId.ContractOwner:
      return false;
    default:
      return false;
  }
};
