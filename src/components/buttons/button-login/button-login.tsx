import { Path } from 'constants/path';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';

import { ButtonLoginTitle } from './button-login.types';

import './button-login.scss';

export type ButtonLoginProps = {
  title: ButtonLoginTitle;
  path: Path;
};

export const ButtonLogin: FC<ButtonLoginProps> = ({ title, path }) => (
  <Link to={path} type='button' className='button-login button_small_mobile'>
    <span>{title}</span>
    <Sprite id={SpriteId.ArrowLong} className='button-login__logo' />
  </Link>
);
