import {
  REGEX_WITH_EMAIL,
  REGEX_WITH_LATIN_ALPHABET,
  REGEX_WITH_MIN_8_CHARACTERS,
  REGEX_WITH_ONE_CAPITAL_LETTER,
  REGEX_WITH_ONE_DIGIT,
  REGEX_WITH_PHONE,
} from 'constants/regex';

import { TextFieldId, TextFieldMessage } from 'components/text-field/text-field.types';

export const validate = (
  value: string,
  id: TextFieldId,
  message: string | TextFieldMessage,
  handleCheckmark: (value: boolean) => void,
  handleValidationMessage: (value: string[]) => void
) => {
  const matchCapital = REGEX_WITH_ONE_CAPITAL_LETTER.test(value);
  const matchCharacters = REGEX_WITH_MIN_8_CHARACTERS.test(value);
  const matchDigit = REGEX_WITH_ONE_DIGIT.test(value);
  const matchLatinAlphabet = REGEX_WITH_LATIN_ALPHABET.test(value);
  const matchPhone = REGEX_WITH_PHONE.test(value);
  const matchEmail = REGEX_WITH_EMAIL.test(value);

  switch (id) {
    case TextFieldId.Username:
    case TextFieldId.Identifier:
      if (!matchLatinAlphabet && !matchDigit) {
        handleValidationMessage([message]);
        break;
      }

      if (!matchLatinAlphabet && matchDigit) {
        handleValidationMessage([TextFieldMessage.CreateUserNameLatinAlphabet]);
        break;
      }

      if (matchLatinAlphabet && !matchDigit) {
        handleValidationMessage([TextFieldMessage.CreateUserNameDigits]);
        break;
      }

      if (matchLatinAlphabet && matchDigit) {
        handleValidationMessage(['']);
        break;
      }
      break;
    case TextFieldId.Password:
      if (!matchCharacters && !matchCapital && !matchDigit) {
        handleValidationMessage([message]);
        handleCheckmark(false);
        break;
      }

      if (!matchCharacters && !matchCapital && matchDigit) {
        handleValidationMessage([TextFieldMessage.PasswordCharaters, TextFieldMessage.PasswordCapitalLetter]);
        handleCheckmark(false);
        break;
      }

      if (!matchCharacters && matchCapital && !matchDigit) {
        handleValidationMessage([TextFieldMessage.PasswordCharaters, TextFieldMessage.PasswordDigit]);
        handleCheckmark(false);
        break;
      }

      if (matchCharacters && !matchCapital && !matchDigit) {
        handleValidationMessage([TextFieldMessage.PasswordCapitalLetter, TextFieldMessage.PasswordDigit]);
        handleCheckmark(false);
        break;
      }

      if (matchCharacters && matchCapital && !matchDigit) {
        handleValidationMessage([TextFieldMessage.PasswordDigit]);
        handleCheckmark(false);
        break;
      }

      if (matchCharacters && !matchCapital && matchDigit) {
        handleValidationMessage([TextFieldMessage.PasswordCapitalLetter]);
        handleCheckmark(false);
        break;
      }

      if (!matchCharacters && matchCapital && matchDigit) {
        handleValidationMessage([TextFieldMessage.PasswordCharaters]);
        handleCheckmark(false);
        break;
      }

      if (matchCharacters && matchCapital && matchDigit) {
        handleValidationMessage(['']);
        handleCheckmark(true);
        break;
      }
      break;
    case TextFieldId.Phone:
      if (!matchPhone) {
        handleValidationMessage([message]);
        break;
      }

      if (matchPhone) {
        handleValidationMessage(['']);
        break;
      }
      break;
    case TextFieldId.Email:
      if (!matchEmail) {
        handleValidationMessage([message]);
        break;
      }

      if (matchEmail) {
        handleValidationMessage(['']);
        break;
      }
      break;
    default:
      break;
  }
};
