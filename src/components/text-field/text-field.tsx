import { useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { HighLight, Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';

import { FormTextField, TextFieldId, TextFieldMessage, TextFieldPlaceholder, TextFieldType } from './text-field.types';

import './text-field.scss';

export const TextField = ({
  type,
  id,
  placeholder,
  message,
  ...props
}: {
  type: TextFieldType;
  id: TextFieldId;
  placeholder: TextFieldPlaceholder;
  message?: TextFieldMessage;
} & UseControllerProps<FormTextField>) => {
  const { field, fieldState } = useController(props);
  console.log('field ===', field);
  console.log('fieldState ===', fieldState);
  const [isEyeOpened, setIsEyeOpened] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const handleSetIsEyeOpened = () => {
    setIsEyeOpened(!isEyeOpened);
  };

  const handleBlur = () => {
    setIsBlur(true);
    field.onBlur();
  };

  return (
    <div className='text-field'>
      <input
        {...field}
        type={isEyeOpened ? TextFieldType.Text : type}
        name={props.name}
        id={id}
        placeholder={placeholder}
        className='text-field__input'
        disabled={false}
        autoComplete='off'
        // ref={props.ref}
        onBlur={handleBlur}
        // onChange={props.onChange}
      />
      <label htmlFor={id} data-content={placeholder} className='text-field__label'>
        <span className='text-field__label_hidden'>{placeholder}</span>
      </label>
      {type === TextFieldType.Password && (
        <div className='text-field__logo-wrapper'>
          <Sprite id={SpriteId.Check} className='text-field__logo text-field__logo_check' dataTestId='checkmark' />
          <Sprite
            id={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpened}
            dataTestId={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
          />
        </div>
      )}
      {message && (
        <p className='text-field__message info_large' data-test-id='hint'>
          <HighLight value={message} title={message} />
        </p>
      )}
    </div>
  );
};
