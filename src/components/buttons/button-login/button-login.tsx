import { FC } from 'react';

import { Sprite } from '../..';

import { TButtonLogin } from './button-login.types';

import './button-login.scss';

export const ButtonLogin: FC<TButtonLogin> = ({ title, onClick }) => (
  <button type='button' className='button-login button_small_mobile' onClick={onClick}>
    <span>{title}</span>
    <Sprite id='arrow-long-right' className='button-login__logo' />
  </button>
);
