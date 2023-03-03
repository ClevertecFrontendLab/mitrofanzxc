import { Path } from 'constants/path';

import { forwardRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';
import { useLocation } from 'react-router-dom';
import sprite from 'assets/sprite.svg';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';

import { FormValues, TextFieldId, TextFieldMessage, TextFieldPlaceholder, TextFieldType } from './text-field.types';

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
  console.log('onError ===');
  const { pathname } = useLocation();
  const [isEyeOpened, setIsEyeOpened] = useState(false);

  const handleSetIsEyeOpened = () => {
    setIsEyeOpened(!isEyeOpened);
  };

  return (
    <div className='text-field'>
      <input
        type={isEyeOpened ? TextFieldType.Text : type}
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
          {pathname === Path.Registration && (
            <svg className='text-field__logo text-field__logo_check' data-test-id='checkmark'>
              <use xlinkHref={`${sprite}#${SpriteId.Check}`} />
            </svg>
            // <Sprite id={SpriteId.Check} className='text-field__logo text-field__logo_check' dataTestId='checkmark' />
          )}
          {/* <Sprite
            id={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpened}
            dataTestId={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
          /> */}
          <svg
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpened}
            data-test-id={isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}
          >
            <use xlinkHref={`${sprite}#${isEyeOpened ? SpriteId.EyeOpened : SpriteId.EyeClosed}`} />
          </svg>
        </div>
      )}
      {message && (
        <p className='text-field__message info_large' data-test-id='hint'>
          {message}
        </p>
      )}
    </div>
  );
});
