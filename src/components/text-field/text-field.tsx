import { ChangeEvent, FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setTextFieldError, setTextFieldValue } from '../../store/slices';
import { TForm } from '../../store/slices/slices.types';
import { validateTextField } from '../../utils';
import { ESpriteId } from '../sprite/sprite.types';
import { Sprite } from '..';

import { ETextFieldType, TTextField } from './text-field.types';

import './text-field.scss';

export const TextField: FC<TTextField> = ({ type, id, placeholder, message }) => {
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const { form } = useAppSelector((state) => state.registration);
  const dispatch = useAppDispatch();

  const handleTextFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { type: targetType, id: targetId, value } = target;

    dispatch(setTextFieldValue({ value, id: targetId }));

    switch (targetType) {
      case ETextFieldType.Tel:
        dispatch(setTextFieldError({ value: validateTextField(value, id), id: targetId }));
        break;
      case ETextFieldType.Email:
        dispatch(setTextFieldError({ value: validateTextField(value, id), id: targetId }));
        break;
      case ETextFieldType.Text:
        dispatch(setTextFieldError({ value: validateTextField(value, id), id: targetId }));
        break;
      case ETextFieldType.Password:
        dispatch(setTextFieldError({ value: validateTextField(value, id), id: targetId }));
        break;
      default:
        break;
    }
  };

  const handleSetIsEyeOpen = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <div className='text-field'>
      <input
        type={isEyeOpen ? ETextFieldType.Text : type}
        name={id}
        id={id}
        placeholder={placeholder}
        className='text-field__input'
        disabled={false}
        autoComplete='off'
        pattern='^.{1,}$'
        value={form[id as keyof TForm].value}
        onChange={handleTextFieldValue}
      />
      <label htmlFor={id} data-content={placeholder} className='text-field__label'>
        <span className='text-field__label_hidden'>{placeholder}</span>
      </label>
      {type === ETextFieldType.Password && (
        <div className='text-field__logo-wrapper'>
          <Sprite id={ESpriteId.Check} className='text-field__logo text-field__logo_check' />
          <Sprite
            id={isEyeOpen ? ESpriteId.EyeOpen : ESpriteId.EyeClosed}
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpen}
          />
        </div>
      )}
      {message && <p className='text-field__message info_large'>{message}</p>}
    </div>
  );
};
