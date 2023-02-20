import { ChangeEvent, FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setTextFieldError, setTextFieldValue } from '../../store/slices';
import { IForm } from '../../store/slices/slices.interface';
import { validateTextField } from '../../utils';
import { Sprite } from '..';

import { ITextField } from './text-field.interface';

import './text-field.scss';

export const TextField: FC<ITextField> = ({ type, id, placeholder, message }) => {
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const { form } = useAppSelector((state) => state.registration);
  const dispatch = useAppDispatch();

  const handleTextFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { type: targetType, id: targetId, value } = target;

    if (targetId) {
      dispatch(setTextFieldValue({ value, id: targetId }));

      if (targetType === 'tel') {
        dispatch(setTextFieldError({ value: validateTextField(value, id), id: targetId }));
      }

      if (targetType === 'email') {
        dispatch(setTextFieldError({ value: validateTextField(value, id), id: targetId }));
      }

      if (targetType === 'text' && targetId === 'login') {
        dispatch(setTextFieldError({ value: validateTextField(value, id), id: targetId }));
      }

      if (targetType === 'password') {
        dispatch(setTextFieldError({ value: validateTextField(value, id), id: targetId }));
      }
    }
  };

  const handleSetIsEyeOpen = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <div className='text-field'>
      <input
        type={isEyeOpen ? 'text' : type}
        name={id}
        id={id}
        placeholder={placeholder}
        className='text-field__input'
        disabled={false}
        autoComplete='off'
        pattern='^.{1,}$'
        value={form[id as keyof IForm].value}
        onChange={handleTextFieldValue}
      />
      <label htmlFor={id} data-content={placeholder} className='text-field__label'>
        <span className='text-field__label_hidden'>{placeholder}</span>
      </label>
      {type === 'password' && (
        <div className='text-field__logo-wrapper'>
          <Sprite id='check' className='text-field__logo text-field__logo_check' />
          <Sprite
            id={`${isEyeOpen ? 'eye-open' : 'eye-closed'}`}
            className='text-field__logo text-field__logo_eye'
            onClick={handleSetIsEyeOpen}
          />
        </div>
      )}
      {message && <p className='text-field__message info_large'>{message}</p>}
    </div>
  );
};
