import { DataTestId } from 'constants/data-test-id';
import {
  MASK_PHONE,
  REGEX_WITH_EMAIL,
  REGEX_WITH_MIN_8_CHARACTERS,
  REGEX_WITH_ONE_CAPITAL_LETTER,
  REGEX_WITH_ONE_DIGIT,
  REGEX_WITH_PASSWORD,
  REGEX_WITH_PHONE,
  REGEX_WITH_USERNAME,
} from 'constants/regex';

import { ChangeEvent, FC, FocusEvent, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import classNames from 'classnames';
import { HighLight, Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';

import { FormTextField, TextFieldId, TextFieldMessage, TextFieldPlaceholder, TextFieldType } from './text-field.types';

import './text-field.scss';

export type TextFieldProps = {
  type: TextFieldType;
  id: TextFieldId;
  placeholder: TextFieldPlaceholder;
  message: TextFieldMessage;
  isError: boolean;
};

export const TextField: FC<TextFieldProps & UseControllerProps<FormTextField>> = ({
  type,
  id,
  placeholder,
  message,
  isError,
  ...props
}) => {
  const { field, fieldState } = useController(props);
  const [isEyeOpened, setIsEyeOpened] = useState(false);
  const [isEyeVisible, setIsEyeVisible] = useState(false);
  const [isEmptyValue, setIsEmptyValue] = useState<boolean | null>(null);
  const [validationMessage, setValidationMessage] = useState('');

  // console.log('message ===', message);
  // console.log('validationMessage ===', validationMessage);

  // console.log('field ===', field);
  // console.log('field.value ===', field.value);
  // console.log('fieldState ===', fieldState);
  // console.log('fieldState.error ===', fieldState.error);
  // console.log('isEmptyValue ===', isEmptyValue);

  const handleSetIsEyeOpened = () => {
    setIsEyeOpened(!isEyeOpened);
  };

  const handleEmptyValue = (value: string) => {
    if (value) {
      setIsEmptyValue(false);
      setIsEyeVisible(true);
    } else {
      setIsEmptyValue(true);
      setIsEyeVisible(false);
    }
  };

  const handleValidate = (value: string) => {
    if (type === TextFieldType.Password) {
      const matchCharacters = REGEX_WITH_MIN_8_CHARACTERS.test(value);
      const matchCapital = REGEX_WITH_ONE_CAPITAL_LETTER.test(value);
      const matchDigit = REGEX_WITH_ONE_DIGIT.test(value);
      console.log('XYU');
      console.log('matchCharacters ===', matchCharacters);
      console.log('matchCapital ===', matchCapital);
      console.log('matchDigit ===', matchDigit);

      if (!matchCharacters) {
        setValidationMessage(TextFieldMessage.PasswordCharaters);
      }

      if (!matchCapital) {
        setValidationMessage(TextFieldMessage.PasswordCapitalLetter);
      }

      if (!matchDigit) {
        setValidationMessage(TextFieldMessage.PasswordDigit);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    field.onChange(event);
    handleValidate(value);
    handleEmptyValue(value);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    field.onBlur();
    handleValidate(value);
    handleEmptyValue(value);
  };

  const inputClass = classNames('text-field__input', { 'text-field__input_error': fieldState.error || isError });
  // const messageClass = classNames('mark text-field__message info_large', {
  //   color_negative: fieldState.error || isError,
  // });
  const messageClass = classNames('mark text-field__message info_large');

  return (
    <div className='text-field'>
      {type === TextFieldType.Tel && (
        <MaskedInput
          name={props.name}
          id={id}
          placeholder={placeholder}
          className={inputClass}
          disabled={false}
          autoComplete='off'
          mask={MASK_PHONE}
          value={field.value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {type !== TextFieldType.Tel && (
        <input
          {...field}
          type={isEyeOpened ? TextFieldType.Text : type}
          name={props.name}
          id={id}
          placeholder={placeholder}
          className={inputClass}
          disabled={false}
          autoComplete='off'
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      <label htmlFor={id} data-content={placeholder} className='text-field__label'>
        <span className='text-field__label_hidden'>{placeholder}</span>
      </label>
      {type === TextFieldType.Password && isEyeVisible && (
        <div className='text-field__logo-wrapper'>
          <Sprite
            id={SpriteId.Checkmark}
            className='text-field__logo text-field__logo_check'
            dataTestId={DataTestId.Checkmark}
          />
          <Sprite
            id={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpened}
            dataTestId={isEyeOpened ? DataTestId.EyeOpened : DataTestId.EyeClosed}
          />
        </div>
      )}
      <p className={messageClass}>
        {/* {isEmptyValue && (
          <HighLight
            className='color_negative'
            value={TextFieldMessage.EmptyField}
            title={TextFieldMessage.EmptyField}
            dataTestId={DataTestId.Hint}
          />
        )} */}
        {/* {isEmptyValue === false && message && ( */}
        <HighLight className='color_negative' value={validationMessage} title={message} dataTestId={DataTestId.Hint} />
        {/* )} */}
      </p>
    </div>
  );
};
