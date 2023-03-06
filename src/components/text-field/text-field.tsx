import { ChangeEvent, FC, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import classNames from 'classnames';
import { HighLight, Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';

import { FormTextField, TextFieldId, TextFieldMessage, TextFieldPlaceholder, TextFieldType } from './text-field.types';

import './text-field.scss';

export type TextFieldProps = {
  type: TextFieldType;
  id: TextFieldId;
  placeholder: TextFieldPlaceholder;
  isError: boolean;
  message?: TextFieldMessage;
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
  const [isEmptyValue, setIsEmptyValue] = useState(false);

  console.log('field ===', field);
  console.log('field.value ===', field.value);
  console.log('fieldState ===', fieldState);
  console.log('fieldState.error ===', fieldState.error);
  console.log('isEmptyValue ===', isEmptyValue);

  const handleSetIsEyeOpened = () => {
    setIsEyeOpened(!isEyeOpened);
  };

  const handleEmptyValue = () => {
    if (field.value && field.value.length) {
      setIsEmptyValue(false);
      setIsEyeVisible(true);
    } else {
      setIsEmptyValue(true);
      setIsEyeVisible(false);
    }
  };

  const handleBlur = () => {
    handleEmptyValue();
    field.onBlur();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleEmptyValue();
    field.onChange(event);
  };

  const inputClass = classNames('text-field__input', { 'text-field__input_error': fieldState.error || isError });
  const messageClass = classNames('mark text-field__message info_large', {
    color_negative: fieldState.error || isError,
  });

  return (
    <div className='text-field'>
      <input
        {...field}
        type={isEyeOpened ? TextFieldType.Text : type}
        name={props.name}
        id={id}
        placeholder={placeholder}
        className={inputClass}
        disabled={false}
        autoComplete='off'
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label htmlFor={id} data-content={placeholder} className='text-field__label'>
        <span className='text-field__label_hidden'>{placeholder}</span>
      </label>
      {type === TextFieldType.Password && isEyeVisible && (
        <div className='text-field__logo-wrapper'>
          <Sprite
            id={SpriteId.Checkmark}
            className='text-field__logo text-field__logo_check'
            dataTestId={SpriteId.Checkmark}
          />
          <Sprite
            id={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpened}
            dataTestId={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
          />
        </div>
      )}
      {isEmptyValue && (
        <HighLight
          className={messageClass}
          value={TextFieldMessage.EmptyField}
          title={TextFieldMessage.EmptyField}
          dataTestId='hint'
        />
      )}
      {!isEmptyValue && message && (
        <HighLight className={messageClass} value={message} title={message} dataTestId='hint' />
      )}
    </div>
  );
};
