import { forwardRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';
import { Sprite } from 'components';
import { FormValues } from 'components/registration/registration.types';
import { SpriteId } from 'components/sprite/sprite.types';

import { TextFieldId, TextFieldMessage, TextFieldPlaceholder, TextFieldType } from './text-field.types';

import './text-field.scss';

export const TextField = forwardRef<
  HTMLInputElement,
  {
    type: TextFieldType;
    id: TextFieldId;
    placeholder: TextFieldPlaceholder;
    message?: TextFieldMessage;
  } & ReturnType<UseFormRegister<FormValues>>
>(({ onChange, name, type, id, placeholder, message }, ref) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const handleSetIsEyeOpen = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <div className='text-field'>
      <input
        type={isEyeOpen ? TextFieldType.Text : type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='text-field__input'
        disabled={false}
        autoComplete='off'
        ref={ref}
        onChange={onChange}
      />
      <label htmlFor={id} data-content={placeholder} className='text-field__label'>
        <span className='text-field__label_hidden'>{placeholder}</span>
      </label>
      {type === TextFieldType.Password && (
        <div className='text-field__logo-wrapper'>
          <Sprite id={SpriteId.Check} className='text-field__logo text-field__logo_check' />
          <Sprite
            id={isEyeOpen ? SpriteId.EyeOpen : SpriteId.EyeClosed}
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpen}
          />
        </div>
      )}
      {message && <p className='text-field__message info_large'>{message}</p>}
    </div>
  );
});
