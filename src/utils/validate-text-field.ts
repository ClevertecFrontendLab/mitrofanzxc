import {
  MASK_PHONE,
  REGEX_WITH_EMAIL,
  REGEX_WITH_LATIN_ALPHABET,
  REGEX_WITH_MIN_8_CHARACTERS,
  REGEX_WITH_ONE_CAPITAL_LETTER,
  REGEX_WITH_ONE_DIGIT,
  REGEX_WITH_PASSWORD,
  REGEX_WITH_PHONE,
  REGEX_WITH_USERNAME,
} from 'constants/regex';

import { TextFieldId, TextFieldMessage } from 'components/text-field/text-field.types';

export const validate = (
  value: string,
  id: TextFieldId,
  message: TextFieldMessage,
  handleCheckmark: (value: boolean) => void,
  handleEye: (value: boolean) => void
) => {
  const matchCapital = REGEX_WITH_ONE_CAPITAL_LETTER.test(value);
  const matchCharacters = REGEX_WITH_MIN_8_CHARACTERS.test(value);
  const matchDigit = REGEX_WITH_ONE_DIGIT.test(value);
  const matchLatinAlphabet = REGEX_WITH_LATIN_ALPHABET.test(value);

  const matchUsername = matchLatinAlphabet && matchDigit;
  const matchCharactersAndCapital = matchCharacters && matchCapital && !matchDigit;
  const matchCharactersAndDigit = matchCharacters && matchDigit && !matchCapital;
  const matchCapitalAndDigit = matchCapital && matchDigit && !matchCharacters;
  const matchPassword = matchCharacters && matchCapital && matchDigit;

  switch (id) {
    case TextFieldId.Username:
      if (matchUsername) {
        handleEye('');
        break;
      }

      if (!matchUsername) {
        handleEye(message);
        break;
      }
      break;
    case TextFieldId.Password:
      if (matchPassword) {
        handleEye('');
        handleCheckmark(true);
        break;
      }

      if (!matchPassword) {
        handleEye(message);
        handleCheckmark(false);
        break;
      }

      if (!matchCharactersAndCapital) {
        handleEye(`${TextFieldMessage.PasswordCharaters} ${TextFieldMessage.PasswordCapitalLetter}`);
        handleCheckmark(false);
        break;
      }

      if (!matchCharactersAndDigit) {
        handleEye(`${TextFieldMessage.PasswordCharaters} ${TextFieldMessage.PasswordDigit}`);
        handleCheckmark(false);
        break;
      }

      if (!matchCapitalAndDigit) {
        handleEye(`${TextFieldMessage.PasswordCapitalLetter} ${TextFieldMessage.PasswordDigit}`);
        handleCheckmark(false);
        break;
      }

      if (matchCharactersAndCapital) {
        handleEye(TextFieldMessage.PasswordDigit);
        handleCheckmark(false);
        break;
      }

      if (matchCharactersAndDigit) {
        handleEye(TextFieldMessage.PasswordCapitalLetter);
        handleCheckmark(false);
        break;
      }

      if (matchCapitalAndDigit) {
        handleEye(TextFieldMessage.PasswordCharaters);
        handleCheckmark(false);
        break;
      }

      if (!matchCharacters) {
        handleEye(TextFieldMessage.PasswordCharaters);
        handleCheckmark(false);
        break;
      }

      if (!matchCapital) {
        handleEye(TextFieldMessage.PasswordCapitalLetter);
        handleCheckmark(false);
        break;
      }

      if (!matchDigit) {
        handleEye(TextFieldMessage.PasswordDigit);
        handleCheckmark(false);
        break;
      }

      if (matchCharacters) {
        handleEye(`${TextFieldMessage.PasswordCapitalLetter} ${TextFieldMessage.PasswordDigit}`);
        handleCheckmark(false);
        break;
      }

      if (matchCapital) {
        handleEye(`${TextFieldMessage.PasswordCharaters} ${TextFieldMessage.PasswordDigit}`);
        handleCheckmark(false);
        break;
      }

      if (matchDigit) {
        handleEye(`${TextFieldMessage.PasswordCharaters} ${TextFieldMessage.PasswordCapitalLetter}`);
        handleCheckmark(false);
        break;
      }
      break;
    default:
      break;
  }
};
