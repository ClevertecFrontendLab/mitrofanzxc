import { REGEX_WITH_EMAIL, REGEX_WITH_PASSWORD, REGEX_WITH_PHONE, REGEX_WITH_USERNAME } from 'constants/regex';

import { TextFieldId } from 'components/text-field/text-field.types';

export const validateTextField = (value: string, id: TextFieldId): boolean => {
  switch (id) {
    case TextFieldId.Username:
      return REGEX_WITH_USERNAME.test(value);
    case TextFieldId.Password:
      return REGEX_WITH_PASSWORD.test(value);
    case TextFieldId.Email:
      return REGEX_WITH_EMAIL.test(value);
    case TextFieldId.Phone:
      return REGEX_WITH_PHONE.test(value);
    case TextFieldId.ContractNumber:
      return false;
    case TextFieldId.ContractOwner:
      return false;
    default:
      return false;
  }
};
