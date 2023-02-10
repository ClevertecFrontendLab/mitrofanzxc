import { FC } from 'react';

import { Sprite } from '../..';

import './button-login.scss';

export interface IButtonLogin {
  title: string;
  onClick: () => void;
}

export const ButtonLogin: FC<IButtonLogin> = ({ title, onClick }) => (
  <button type='button' className='button-login button_small_mobile' onClick={onClick}>
    <span>{title}</span>
    <Sprite id='arrow-long-right' className='button-login__icon' />
  </button>
);
