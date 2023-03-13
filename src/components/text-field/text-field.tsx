import { DataTestId } from 'constants/data-test-id';
import { Path } from 'constants/path';
import { MASK_PHONE } from 'constants/regex';

import { ChangeEvent, FC, FocusEvent, useEffect, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import classNames from 'classnames';
import { HighLight, Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import { validate } from 'utils';

import { FormTextField, TextFieldId, TextFieldMessage, TextFieldPlaceholder, TextFieldType } from './text-field.types';

import './text-field.scss';

export type TextFieldProps = {
  type: TextFieldType;
  id: TextFieldId;
  placeholder: TextFieldPlaceholder;
  message: string | TextFieldMessage;
  handleButton?: (value: boolean) => void;
};

export const TextField: FC<TextFieldProps & UseControllerProps<FormTextField>> = ({
  type,
  id,
  placeholder,
  message,
  handleButton,
  ...props
}) => {
  const { field, fieldState } = useController(props);
  const { pathname } = useLocation();
  const [isEyeOpened, setIsEyeOpened] = useState(false);
  const [isEyeVisible, setIsEyeVisible] = useState(false);
  const [isCheckmarkVisible, setIsCheckmarkVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState<string[]>(['']);
  const [validationTitle, setValidationTitle] = useState<string | TextFieldMessage>(message);

  const handleCheckmark = (value: boolean) => {
    setIsCheckmarkVisible(value);
  };

  const handleValidationMessage = (value: string[]) => {
    setValidationMessage(value);
  };

  const handleSetIsEyeOpened = () => {
    setIsEyeOpened(!isEyeOpened);
  };

  const handleSubmitButton = () => {
    if (handleButton) {
      if (fieldState.error || !field.value) {
        handleButton(true);
      } else {
        handleButton(false);
      }
    }
  };

  const handleEmptyValue = (value: string) => {
    if (value) {
      if (pathname === Path.Authorization) {
        setIsEyeVisible(true);
        setValidationTitle('');
      } else {
        setIsEyeVisible(true);
        setValidationTitle(message);
      }

      if (id === TextFieldId.FirstName || id === TextFieldId.LastName) {
        setValidationTitle('');
        handleSubmitButton();
      }

      if (id === TextFieldId.PasswordConfirmation) {
        setValidationMessage(['']);
      }
    } else {
      setIsEyeVisible(false);

      if (id === TextFieldId.Password && pathname === Path.Registration) {
        setValidationMessage([TextFieldMessage.Password]);
        setValidationTitle(TextFieldMessage.Password);
      } else {
        setValidationMessage([TextFieldMessage.EmptyField]);
        setValidationTitle(TextFieldMessage.EmptyField);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    field.onChange(event);

    if (pathname !== Path.Authorization) {
      validate(value, id, message, handleCheckmark, handleValidationMessage);
    }

    handleEmptyValue(value);

    if (pathname.includes(Path.ForgotPass) && id === TextFieldId.Password) {
      if (!value) {
        setValidationMessage(['']);
        setValidationTitle(TextFieldMessage.Password);
      }
    }

    if (pathname === Path.Registration && id === TextFieldId.Username) {
      if (!value) {
        setValidationMessage(['']);
        setValidationTitle(TextFieldMessage.CreateUserName);
      }
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    field.onBlur();

    if (pathname !== Path.Authorization) {
      validate(value, id, message, handleCheckmark, handleValidationMessage);
      handleSubmitButton();
    }

    handleEmptyValue(value);

    if (pathname === Path.Registration && id === TextFieldId.Username) {
      if (value) {
        setValidationMessage([TextFieldMessage.CreateUserName]);
        setValidationTitle(TextFieldMessage.CreateUserName);
      }
    }
  };

  const inputClass = classNames('text-field__input', {
    'text-field__input_error':
      (!field.value && validationMessage[0].length > 0) || validationTitle === validationMessage[0],
  });
  const messageClass = classNames('mark text-field__message info_large', {
    color_negative: (!field.value && validationMessage[0].length > 0) || validationTitle === validationMessage[0],
  });

  useEffect(() => {
    if (message === TextFieldMessage.WrongLoginOrPassword) {
      setValidationMessage([TextFieldMessage.WrongLoginOrPassword]);
      setValidationTitle(TextFieldMessage.WrongLoginOrPassword);
    }

    if (message === TextFieldMessage.Error) {
      setValidationMessage([TextFieldMessage.Error]);
      setValidationTitle(TextFieldMessage.Error);
    }

    if (message === TextFieldMessage.PasswordMismatch) {
      setValidationMessage([TextFieldMessage.PasswordMismatch]);
      setValidationTitle(TextFieldMessage.PasswordMismatch);
    }
  }, [message]);

  return (
    <div className='text-field'>
      {type === TextFieldType.Tel && (
        <MaskedInput
          {...field}
          name={props.name}
          id={id}
          placeholder={placeholder}
          className={inputClass}
          disabled={false}
          autoComplete='off'
          mask={MASK_PHONE}
          keepCharPositions={true}
          placeholderChar={'\u0078'}
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
          {isCheckmarkVisible && pathname !== Path.Authorization && (
            <Sprite
              id={SpriteId.Checkmark}
              className='text-field__logo text-field__logo_check'
              dataTestId={DataTestId.Checkmark}
            />
          )}
          <Sprite
            id={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpened}
            dataTestId={isEyeOpened ? DataTestId.EyeOpened : DataTestId.EyeClosed}
          />
        </div>
      )}
      <p className={messageClass} data-test-id={DataTestId.Hint}>
        {/* {validationMessage[0].length > 0 && ( */}
        <HighLight className='color_negative' value={validationMessage} title={validationTitle} />
        {/* )} */}
      </p>
      {pathname === Path.ForgotPass && type === TextFieldType.Email && (
        <p className={messageClass} data-test-id={DataTestId.Hint}>
          <span className='text-field__message info_large color_color-grey-black-40'>{TextFieldMessage.Email}</span>
        </p>
      )}
    </div>
  );
};
