import { FC } from 'react';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';

import { ButtonLoginTitle } from './button-login.types';

import './button-login.scss';

export type ButtonLoginProps = {
  title: ButtonLoginTitle;
  onClick: () => void;
};

export const ButtonLogin: FC<ButtonLoginProps> = ({ title, onClick }) => (
  <button type='button' className='button-login button_small_mobile' onClick={onClick}>
    <span>{title}</span>
    <Sprite id={SpriteId.ArrowLong} className='button-login__logo' />
  </button>
);
